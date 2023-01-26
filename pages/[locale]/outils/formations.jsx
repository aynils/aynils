import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import TrainingIllustration from '/public/static/images/undraw_teaching_re_g7e3.svg'

const getStaticProps = makeStaticProps(['train', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Train() {
  const { t } = useTranslation('train')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
        description={t('page_description')}
      />
      <PageHeader title={t('page_title')} />
      <Section
        id={t('training.title')}
        backgroundColor="bg-primary-0"
        image={
          <TrainingIllustration
            className="h-[35%] w-full"
            viewBox="000 00 750 500"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('training.title')}</p>
          <h2>{t('training.subtitle')}</h2>
        </header>
        <p>{t('training.p1')}</p>
        <p>{t('training.p2')}</p>
        <p>{t('training.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('training.l1')}</li>
          <li className={'task-list-item'}>{t('training.l2')}</li>
          <li className={'task-list-item'}>{t('training.l3')}</li>
        </ul>
        <div className="mt-10">
          <Button color={'secondary'} type="noicon" href={'/contact'}>
            {t('common:contact')}
          </Button>
        </div>
      </Section>
    </>
  )
}
