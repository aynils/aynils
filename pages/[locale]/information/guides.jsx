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

export default function Guides() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('guides.title')}`}
        description={t('guides.description')}
      />
      <PageHeader title={t('guides.title')} />
      <Section
        id={t('guides.title')}
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
          <p>{t('guides.title')}</p>
          <h2>{t('guides.subtitle')}</h2>
        </header>
        <p>{t('guides.p1')}</p>
        <p>{t('guides.p2')}</p>
        <p>{t('guides.p4')}</p>
        <ul>
          <li>
            <Link
              href={'/information/guide-cahier-des-charges-refonte-site-internet'}
              className="link font-bold"
              aria-label="Guide de rédaction du cahier des charges pour la refonte d'un site Web"
            >
              📄 Guide de rédaction du cahier des charges pour la refonte d'un site Web
            </Link>
          </li>
        </ul>
        <p>{t('guides.p6')}</p>
      </Section>
    </>
  )
}
