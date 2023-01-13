import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

import NewsletterForm from '@/components/NewsletterForm'
import Hero from '@/components/Section/Hero'
import Section from '@/components/Section/Section'

const getStaticProps = makeStaticProps(['common'], { posts: await getAllFilesFrontMatter('blog') })
export { getStaticPaths, getStaticProps }

export default function Home({ posts }) {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Section id="section1">Coucou</Section>
      <Section id="section2">Coucou</Section>
    </>
  )
}
