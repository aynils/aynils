import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

import Hero from '@/components/Section/Hero'
import Section from '@/components/Section/Section'
import ExternalLinkIcon from '../../public/static/icons/external_link.svg'
import Button from '@/components/Button/Button'

const getStaticProps = makeStaticProps(['common'], { posts: await getAllFilesFrontMatter('blog') })
export { getStaticPaths, getStaticProps }

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Section id="section1">
        <header>
          <h2>{t('inform')}</h2>
          <p>{t('inform_section.subtitle')}</p>
        </header>
        <p>{t('inform_section.p1')}</p>
        <p>{t('inform_section.p2')}</p>
        <Button color={'primary'} type="externalLink" href={'/informer'}>
          {t('inform_section.inform_link')}
        </Button>
      </Section>
      <Section id="section2">Coucou</Section>
    </>
  )
}
