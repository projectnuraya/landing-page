import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText,
} from '@payloadcms/richtext-lexical/react'

import { postPath } from '../../lib/blog'
import type { Post } from '../../payload-types'

/** Internal links in the editor point at documents; turn them into site URLs. */
const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({
    internalDocToHref: ({ linkNode }) => {
      const doc = linkNode.fields.doc
      if (doc?.relationTo === 'posts' && typeof doc.value === 'object') {
        const { slug } = doc.value as Pick<Post, 'slug'>
        if (slug) return postPath(slug)
      }
      return '/'
    },
  }),
})

export function PostContent({ data }: { data: Post['content'] }) {
  return (
    <RichText
      data={data}
      converters={converters}
      className='rich-text rich-text-lg dark:rich-text-invert max-w-none rich-text-headings:text-deep-navy dark:rich-text-headings:text-white rich-text-a:text-nuraya-gold-500 rich-text-img:rounded-xl'
    />
  )
}
