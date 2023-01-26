import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import TrainingIllustration from '../../public/static/images/undraw_teaching_re_g7e3.svg'
import ConsultIllustration from '../../public/static/images/undraw_solution_mindset_re_57bf.svg'
import ToolsIllustration from '../../public/static/images/undraw_blogging_re_kl0d.svg'

const getStaticProps = makeStaticProps(['information', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Information() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
        description={t('page_description')}
      />
      <PageHeader title={t('page_title')} />
      <Section
        id={t('information.title')}
        backgroundColor="bg-primary-0"
        image={
          <ToolsIllustration
            className="h-[30%] w-full"
            viewBox="000 200 980 100"
            alt="Illustration représentant plusieurs personnes en train de construire une interface web."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('tools.title')}</p>
          <h2>{t('tools.subtitle')}</h2>
        </header>
        <p>{t('tools.p1')}</p>
        <p>{t('tools.p2')}</p>
        <p>{t('tools.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('tools.l1')}</li>
          <li className={'task-list-item'}>{t('tools.l2')}</li>
        </ul>
        <div className="mt-10 flex justify-between">
          <Button
            color={'primary'}
            type="externalLink"
            href={'https://labibli.com?utm_campaign=tools-page'}
            target="_blank"
          >
            {t('tools.link_labibli')}
          </Button>
          <Button
            color={'primary'}
            type="externalLink"
            href={'https://feuilledetemps.ca?utm_campaign=tools-page'}
            target="_blank"
          >
            {t('tools.link_feuilledetemps')}
          </Button>
        </div>
      </Section>
    </>
  )
}
