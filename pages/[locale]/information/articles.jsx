import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import InformIllustration from '/public/static/images/undraw_online_articles_re_yrkj.svg'
import Link from '@/components/Link'

const getStaticProps = makeStaticProps(['information', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Articles() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('articles.title')}`}
        description={t('articles.description')}
      />
      <PageHeader title={t('articles.title')} />
      <Section
        id={t('articles.title')}
        backgroundColor="bg-primary-0"
        image={
          <InformIllustration
            className="h-[40%] w-full"
            viewBox="000 000 850 600"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('articles.title')}</p>
          <h2>{t('articles.subtitle')}</h2>
        </header>
        <p>{t('articles.p2')}</p>
        {/*<p>{t('articles.p2')}</p>*/}
        <p>{t('articles.p3')}</p>
        <ul>
          <li>
            <Link
              href={'/information/incident-de-securite-lastpass-quels-risques-que-faire/'}
              className="link font-bold"
              aria-label="Modèle de politique de confidentialité des données"
            >
              📄 Incident de sécurité de LastPass : quels risques pour mon OSBL?
            </Link>
          </li>
        </ul>
      </Section>
    </>
  )
}
