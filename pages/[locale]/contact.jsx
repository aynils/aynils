import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['contact', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Contact() {
  const { t } = useTranslation('contact')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
        description={t('page_description')}
      />
      <PageHeader title={t('page_title')} />
      <Section id={t('who_are_we.title')} backgroundColor="bg-primary-0">
        <header>
          <p>{t('who_are_we.subtitle')}</p>
          <h2>{t('who_are_we.title')}</h2>
        </header>
        <p>{t('who_are_we.p1')}</p>
        <p>{t('who_are_we.p2')}</p>
        <p>{t('who_are_we.p3')}</p>
      </Section>
    </>
  )
}
