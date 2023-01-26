import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import ToolsIllustration from '/public/static/images/undraw_blogging_re_kl0d.svg'

const getStaticProps = makeStaticProps(['tools', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function LaBibli() {
  const { t } = useTranslation('tools')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('labibli.title')}`}
        description={t('labibli.description')}
      />
      <PageHeader title={t('labibli.title')} />
      <Section
        id={t('labibli.title')}
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
          <p>{t('labibli.title')}</p>
          <h2>{t('labibli.subtitle')}</h2>
        </header>
        <p>{t('labibli.p1')}</p>
        <p>{t('labibli.p2')}</p>
        <p>{t('labibli.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('labibli.l1')}</li>
          <li className={'task-list-item'}>{t('labibli.l2')}</li>
          <li className={'task-list-item'}>{t('labibli.l3')}</li>
        </ul>
        <div className="mt-10 flex justify-between">
          <Button
            color={'primary'}
            type="externalLink"
            href={'https://labibli.com?utm_campaign=labibli-page'}
            target="_blank"
          >
            {t('labibli.link_labibli')}
          </Button>
        </div>
      </Section>
    </>
  )
}
