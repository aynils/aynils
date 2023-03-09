import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
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
          <p>{t('information.title')}</p>
          <h2>{t('information.subtitle')}</h2>
        </header>
        <p>{t('information.p1')}</p>
        <p>{t('information.p2')}</p>
        <ul>
          <li className={'task-list-item'}>{t('information.l1')}</li>
          <li className={'task-list-item'}>{t('information.l2')}</li>
          <li className={'task-list-item'}>{t('information.l3')}</li>
        </ul>
        <div className="mt-10 sm:flex sm:justify-between">
          <Button
            className="!w-full justify-center sm:mx-auto sm:!w-fit"
            color={'primary'}
            type="noicon"
            href={'/fr/information/guides/'}
          >
            {t('information.link_guides')}
          </Button>
          <Button
            className="!w-full justify-center sm:mx-auto sm:!w-fit"
            color={'primary'}
            type="noicon"
            href={'/fr/information/ressources/'}
          >
            {t('information.link_resources')}
          </Button>
          <Button
            className="!w-full justify-center sm:mx-auto sm:!w-fit"
            color={'primary'}
            type="noicon"
            href={'/fr/information/articles/'}
          >
            {t('information.link_articles')}
          </Button>
        </div>
      </Section>
    </>
  )
}
