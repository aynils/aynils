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

export default function FeuilleDeTemps() {
  const { t } = useTranslation('tools')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('feuilledetemps.title')}`}
        description={t('feuilledetemps.description')}
      />
      <PageHeader title={t('feuilledetemps.title')} />
      <Section
        id={t('feuilledetemps.title')}
        backgroundColor="bg-primary-0"
        image={
          //TODO: change to fdt image
          <ToolsIllustration
            className="h-[30%] w-full"
            viewBox="000 200 980 100"
            alt="Illustration représentant plusieurs personnes en train de construire une interface web."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('feuilledetemps.title')}</p>
          <h2>{t('feuilledetemps.subtitle')}</h2>
        </header>
        <p>{t('feuilledetemps.p1')}</p>
        <p>{t('feuilledetemps.p2')}</p>
        <p>{t('feuilledetemps.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('feuilledetemps.l1')}</li>
          <li className={'task-list-item'}>{t('feuilledetemps.l2')}</li>
          <li className={'task-list-item'}>{t('feuilledetemps.l3')}</li>
          <li className={'task-list-item'}>{t('feuilledetemps.l4')}</li>
          <li className={'task-list-item'}>{t('feuilledetemps.l5')}</li>
        </ul>
        <div className="mt-10 flex justify-between">
          <Button
            color={'primary'}
            type="externalLink"
            href={'https://feuilledetemps.ca?utm_campaign=fdt-page'}
            target="_blank"
          >
            {t('feuilledetemps.link_feuilledetemps')}
          </Button>
        </div>
      </Section>
    </>
  )
}
