import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import { useTranslation } from 'next-i18next'
import Button from '@/components/Button/Button'

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
      <Section id={t('form.title')} backgroundColor="bg-primary-0">
        <header>
          <p>{t('form.subtitle')}</p>
          <h2>{t('form.title')}</h2>
        </header>
        <p>{t('form.p1')}</p>
        <form>
          <div className="flex flex-col">
            <label htmlFor="name" aria-required>
              {t('name')}
            </label>
            <input className="text-input" type="text" id="name" autoComplete="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="organization">{t('organization')}</label>
            <input className="text-input" type="text" id="organization" aria-required="false" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" aria-required>
              {t('email')}
            </label>
            <input className="text-input" type="email" id="email" autoComplete="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" aria-required>
              {t('message')}
            </label>
            <textarea className="text-input" id="message" rows="12" autoComplete="off" />
          </div>
          <Button color="primary" type="mail">
            {t('send')}
          </Button>
        </form>
      </Section>
    </>
  )
}