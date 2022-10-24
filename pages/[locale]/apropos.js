import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

const DEFAULT_LAYOUT = 'AuthorLayout'

const getStaticProps = makeStaticProps(['common'], {
  authorDetails: await getFileBySlug('authors', ['default']),
})
export { getStaticPaths, getStaticProps }

export default function Apropos({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
