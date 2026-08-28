import { Fragment, type ReactNode } from 'react'

/** `**bold**`, `` `code` `` or `[label](href)`. Built per call so no `lastIndex` is shared. */
const token = () => /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g

const linkClass = 'text-nuraya-gold-500 hover:underline break-words'

/**
 * Renders the small inline syntax used by legal content files.
 *
 * External links get `noopener noreferrer`; `mailto:` and in-page links do not
 * need it and would look odd in the markup.
 */
export function InlineText({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = []
  let cursor = 0
  let match: RegExpExecArray | null
  const pattern = token()

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index))

    const [, bold, code, label, href] = match
    if (bold) {
      nodes.push(<strong key={match.index}>{bold}</strong>)
    } else if (code) {
      nodes.push(
        <code
          key={match.index}
          className='px-1.5 py-0.5 rounded bg-light-sand dark:bg-dark-surface text-deep-navy dark:text-nuraya-gold-200 text-[0.9em] font-mono'>
          {code}
        </code>,
      )
    } else if (label && href) {
      const external = href.startsWith('http')
      nodes.push(
        <a
          key={match.index}
          href={href}
          className={linkClass}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {label}
        </a>,
      )
    }
    cursor = match.index + match[0].length
  }

  if (cursor < text.length) nodes.push(text.slice(cursor))

  return (
    <>
      {nodes.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  )
}
