import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import { useTranslation } from 'next-i18next'
import Button, { SubmitButton } from '@/components/Button/Button'

const getStaticProps = makeStaticProps(['contact', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Contact() {
  const { t } = useTranslation('contact')
  return (
    <>
      <PageSEO
        description={t('page_description')}
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
      />
      <PageHeader title={t('page_title')} />
      <Section id={t('form.title')} backgroundColor="bg-primary-0">
        <header>
          <p>{t('form.subtitle')}</p>
          <h2>{t('form.title')}</h2>
        </header>
        <p>{t('form.p1')}</p>
        <form action="https://static-assistant-hmnx6.ondigitalocean.app/contact/form" method="POST">
          <div className="flex flex-col">
            <label htmlFor="name">{t('name')}</label>
            <input
              className="text-input"
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              aria-required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="organization">{t('organization')}</label>
            <input
              className="text-input"
              type="text"
              id="organization"
              name="organization"
              aria-required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">{t('email')}</label>
            <input
              className="text-input"
              type="email"
              id="email"
              name="reply_to"
              autoComplete="email"
              aria-required
            />
          </div>
          <div className="hidden" aria-hidden aria-disabled>
            <label htmlFor="subject">{t('subject')}</label>
            <input
              aria-required
              className="text-input"
              type="subject"
              id="subject"
              name="subject"
              defaultValue="Contact depuis le site Aynils.ca"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">{t('message')}</label>
            <textarea
              aria-required
              className="text-input"
              id="message"
              name="message"
              rows="12"
              autoComplete="off"
            />
          </div>
          <SubmitButton color="primary" type="mail" className="mx-auto sm:mx-0">
            {t('send')}
          </SubmitButton>
        </form>
      </Section>
    </>
  )
}
