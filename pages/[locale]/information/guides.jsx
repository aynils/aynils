import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import InformIllustration from '/public/static/images/undraw_online_articles_re_yrkj.svg'

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
        <p>{t('guides.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('guides.l1')}</li>
          <li className={'task-list-item'}>{t('guides.l2')}</li>
          <li className={'task-list-item'}>{t('guides.l3')}</li>
          <li className={'task-list-item'}>{t('guides.l4')}</li>
        </ul>
        <p className="font-bold text-secondary-600">{t('guides.p4')}</p>
      </Section>
    </>
  )
}
