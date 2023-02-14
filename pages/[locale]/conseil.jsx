import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import ConsultIllustration from '../../public/static/images/undraw_solution_mindset_re_57bf.svg'

const getStaticProps = makeStaticProps(['consult', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Consult() {
  const { t } = useTranslation('consult')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
        description={t('page_description')}
      />
      <PageHeader title={t('page_title')} />
      <Section
        id={t('consult.title')}
        backgroundColor="bg-primary-0"
        image={
          <ConsultIllustration
            className="h-[20%] w-full"
            viewBox="000 250 550 100"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('consult.subtitle')}</p>
          <h2>{t('consult.title')}</h2>
        </header>
        <p>{t('consult.p1')}</p>
        <p>{t('consult.p2')}</p>
        <h3>{t('consult.consult1.title')}</h3>
        <p>{t('consult.consult1.p1')}</p>
        <p>{t('consult.consult1.p2')}</p>
        <h3>{t('consult.consult2.title')}</h3>
        <p>{t('consult.consult2.p1')}</p>
        <p>{t('consult.consult2.p2')}</p>
        <p>{t('consult.consult2.p3')}</p>
        <h3>{t('consult.consult3.title')}</h3>
        <p>{t('consult.consult3.p1')}</p>
        <p>{t('consult.consult3.p2')}</p>
        <p>{t('consult.consult3.p3')}</p>
        <h3>{t('consult.consult4.title')}</h3>
        <p>{t('consult.consult4.p1')}</p>
        <p>{t('consult.consult4.p2')}</p>
        <div className="mt-10">
          <Button color={'secondary'} type="noicon" href={'/fr/contact'}>
            {t('common:contact')}
          </Button>
        </div>
      </Section>
    </>
  )
}
