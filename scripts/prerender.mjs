/**
 * Renders every static route to real HTML at build time.
 *
 * The site is a client-rendered SPA, so before this existed the server sent an
 * empty `<div id="root">` for every URL — including /privacy. Google requires
 * the privacy policy to be readable "in the body of a dedicated privacy policy
 * web page", and matches the OAuth consent screen app name against the
 * homepage, so shipping an empty shell fails brand verification regardless of
 * what the page renders once JavaScript runs.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const SITE = 'https://projectnuraya.id'

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Replaces the content of a `<meta>` tag matched by one of its attributes. */
function setMeta(html, attr, name, content) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`)
  return pattern.test(html)
    ? html.replace(pattern, `$1${escapeAttr(content)}$2`)
    : html.replace('</head>', `    <meta ${attr}="${name}" content="${escapeAttr(content)}" />\n  </head>`)
}

function buildHead(html, page) {
  const url = `${SITE}${page.path === '/' ? '/' : page.path}`

  let out = html
    .replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(page.title)}</title>`)

  out = setMeta(out, 'name', 'description', page.description)
  out = setMeta(out, 'property', 'og:title', page.title)
  out = setMeta(out, 'property', 'og:description', page.description)
  out = setMeta(out, 'property', 'og:url', url)
  out = setMeta(out, 'property', 'og:locale', page.lang === 'id' ? 'id_ID' : 'en_US')
  out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)

  if (page.alternate) {
    const other = page.lang === 'id' ? 'en' : 'id'
    const alternates = [
      `<link rel="alternate" hreflang="${page.lang}" href="${url}" />`,
      `<link rel="alternate" hreflang="${other}" href="${SITE}${page.alternate}" />`,
      `<link rel="alternate" hreflang="x-default" href="${SITE}${page.lang === 'id' ? page.path : page.alternate}" />`,
    ].join('\n    ')
    out = out.replace('</head>', `    ${alternates}\n  </head>`)
  }

  return out
}

async function main() {
  const template = await readFile(join(distDir, 'index.html'), 'utf8')
  const { render, pages } = await import(join(distDir, '..', 'dist-ssr', 'entry-server.js'))

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html has no empty <div id="root"></div> to fill')
  }

  for (const page of pages) {
    const body = render(page.path)
    if (!body.trim()) throw new Error(`Route ${page.path} rendered nothing`)

    const html = buildHead(template, page).replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>`,
    )

    const outFile =
      page.path === '/'
        ? join(distDir, 'index.html')
        : join(distDir, page.path.replace(/^\//, ''), 'index.html')

    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html, 'utf8')

    const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
    console.log(`  prerendered ${page.path.padEnd(14)} ${kb.padStart(7)} kB`)
  }

  // SPA fallback for routes that are not prerendered, so unknown URLs still
  // reach the client-side NotFoundPage instead of the host's own error page.
  await writeFile(join(distDir, '404.html'), template, 'utf8')
  console.log('  wrote 404.html (SPA fallback)')
}

main().catch((error) => {
  console.error('\nPrerender failed:', error)
  process.exitCode = 1
})
