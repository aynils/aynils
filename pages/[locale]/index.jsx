import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from 'next-i18next'
import { getStaticPaths } from '@/lib/getStatic'

import Hero from '@/components/Section/Hero'
import Section from '@/components/Section/Section'

export { getStaticPaths }

export default function Home() {
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
