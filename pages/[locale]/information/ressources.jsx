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

export default function Resources() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('resources.title')}`}
        description={t('resources.description')}
      />
      <PageHeader title={t('resources.title')} />
      <Section
        id={t('resources.title')}
        backgroundColor="bg-primary-0"
        image={
          <InformIllustration
            className="h-[35%] w-full"
            viewBox="000 000 850 600"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('resources.title')}</p>
          <h2>{t('resources.subtitle')}</h2>
        </header>
        <p>{t('resources.p1')}</p>
        <p>{t('resources.p2')}</p>
        <p>{t('resources.p3')}</p>
        <p>{t('resources.p4')}</p>
        <ul>
          <li>
            <Link
              href={'/information/modele-de-politique-de-confidentialite-des-donnees/'}
              className="link font-bold"
              aria-label="Modèle de politique de confidentialité des données"
            >
              📄 Modèle de politique de confidentialité des données
            </Link>
          </li>
        </ul>
        <p className={'mt-10'}>{t('resources.p5')}</p>
        <ul>
          <li>🚧 {t('resources.l2')}</li>
        </ul>
        <p>{t('resources.p6')}</p>
      </Section>
    </>
  )
}
