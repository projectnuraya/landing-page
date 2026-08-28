import type { LucideIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import type { LegalBlock, LegalDocument } from '../../content/legal/types'
import { findPageMeta } from '../../lib/seo'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

import type { LegalAccent } from './accents'
import { InlineText } from './InlineText'

const bodyClass = 'text-warm-gray dark:text-gray-300 leading-relaxed'

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case 'paragraph':
      return (
        <p className={`${bodyClass} mt-4 first:mt-0`}>
          <InlineText text={block.text} />
        </p>
      )

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          className={`${block.ordered ? 'list-decimal' : 'list-disc'} list-outside space-y-2 ml-6 mt-4 ${bodyClass}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <InlineText text={item} />
            </li>
          ))}
        </Tag>
      )
    }

    case 'definitions':
      return (
        <div className='bg-light-sand/50 dark:bg-dark-surface p-6 rounded-lg space-y-2 mt-4'>
          {block.items.map((item, i) => (
            <p key={i} className={bodyClass}>
              <strong>{item.term}:</strong> <InlineText text={item.value} />
            </p>
          ))}
        </div>
      )

    case 'note':
      return (
        <div className='border-l-4 border-warm-gray/30 dark:border-gray-600 pl-4 py-1 mt-4'>
          <p className={`${bodyClass} text-sm`}>
            <InlineText text={block.text} />
          </p>
        </div>
      )

    case 'table':
      return (
        <div className='overflow-x-auto mt-4 rounded-lg border border-light-sand dark:border-gray-700'>
          <table className='w-full text-left border-collapse text-sm'>
            <thead className='bg-light-sand/50 dark:bg-dark-surface'>
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={i}
                    className='px-4 py-3 font-semibold text-deep-navy dark:text-white whitespace-nowrap'>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className='border-t border-light-sand dark:border-gray-700 align-top'>
                  {row.map((cell, c) => (
                    <td key={c} className={`px-4 py-3 ${bodyClass}`}>
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

interface Props {
  doc: LegalDocument
  icon: LucideIcon
  accent: LegalAccent
  /** Route path, used to look up head metadata for client-side navigation. */
  path: string
}

export function LegalPageLayout({ doc, icon: Icon, accent, path }: Props) {
  // Prerendering writes the real <title> into each static file; this only keeps
  // it correct after client-side navigation.
  useEffect(() => {
    const meta = findPageMeta(path)
    if (meta) document.title = meta.title
  }, [path])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />

      <main className='pt-24'>
        <section className='py-16 md:py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className={accent.iconWrapper}>
                <Icon className='w-8 h-8' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>{doc.title}</h1>
              <p className='text-lg text-gray-300'>{doc.intro}</p>
              <p className='text-sm text-gray-400 mt-4'>{doc.lastUpdated}</p>
              <Link
                to={doc.languageSwitch.to}
                onClick={() => window.scrollTo(0, 0)}
                hrefLang={doc.locale === 'id' ? 'en' : 'id'}
                className='inline-block mt-6 text-sm text-nuraya-gold-400 hover:text-nuraya-gold-300 underline underline-offset-4'>
                {doc.languageSwitch.label}
              </Link>
            </div>
          </div>
        </section>

        <section className='py-16 md:py-24 bg-white dark:bg-dark-bg'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                {doc.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                      {section.heading}
                    </h2>
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                ))}

                <div className={accent.callout}>
                  <p className='text-deep-navy dark:text-white font-semibold mb-2'>
                    {doc.callout.title}
                  </p>
                  <p className={bodyClass}>
                    <InlineText text={doc.callout.text} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12 text-center'>
            <p className='text-lg mb-4'>
              <InlineText text={doc.contactPrompt} />
            </p>
            <Link
              to='/'
              onClick={() => window.scrollTo(0, 0)}
              className='inline-block px-8 py-3 bg-nuraya-gold-400 hover:bg-nuraya-gold-500 text-deep-navy font-semibold rounded-lg transition-colors duration-300'>
              {doc.backHome}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
