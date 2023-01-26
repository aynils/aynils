import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import CommitmentsIllustration from '../../public/static/images/undraw_contract_re_ves9.svg'
import ValuesIllustration from '../../public/static/images/undraw_gardening_re_e658.svg'
import TeamIllustration from '../../public/static/images/undraw_team_page_re_cffb.svg'

const getStaticProps = makeStaticProps(['about', 'common'], {})
export { getStaticPaths, getStaticProps }

export default function Apropos() {
  const { t } = useTranslation('about')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('page_title')}`}
        description={t('page_description')}
      />
      <PageHeader title={t('page_title')} />
      <Section
        id={t('who_are_we.title')}
        backgroundColor="bg-primary-0"
        image={
          <TeamIllustration
            className="h-[60%] w-full"
            viewBox="000 290 650 050"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>Aynils</p>
          <h2>{t('who_are_we.title')}</h2>
        </header>
        <p>{t('who_are_we.p1')}</p>
        <p>{t('who_are_we.p2')}</p>
        <p>{t('who_are_we.p3')}</p>
        <header>
          <h3>{t('common:our_mission')}</h3>
        </header>
        <p className="text-secondary-600">{t('common:mission_statement')}</p>
      </Section>
      <Section
        id={t('values.title')}
        backgroundColor="bg-primary-100"
        image={
          <ValuesIllustration
            className="h-[50%] w-full"
            viewBox="000 150 550 100"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('values.title')}</p>
          <h2>{t('values.subtitle')}</h2>
        </header>
        <ul>
          <li className={'task-list-item'}>{t('values.l1')}</li>
          <li className={'task-list-item'}>{t('values.l2')}</li>
          <li className={'task-list-item'}>{t('values.l3')}</li>
        </ul>
        <p>{t('values.p1')}</p>
      </Section>
      <Section
        id={t('commitments.title')}
        backgroundColor="bg-primary-0"
        image={
          <CommitmentsIllustration
            className="h-[25%] w-full"
            viewBox="000 250 550 100"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header className="mt-24">
          <p>{t('commitments.subtitle')}</p>
          <h2>{t('commitments.title')}</h2>
        </header>
        <h3>{t('commitments.commitment1.title')}</h3>
        <p>{t('commitments.commitment1.p1')}</p>
        <p>{t('commitments.commitment1.p2')}</p>
        <h3>{t('commitments.commitment2.title')}</h3>
        <p>{t('commitments.commitment2.p1')}</p>
        <p>{t('commitments.commitment2.p2')}</p>
        <p>{t('commitments.commitment2.p3')}</p>
        <h3>{t('commitments.commitment3.title')}</h3>
        <p>{t('commitments.commitment3.p1')}</p>
        <p>{t('commitments.commitment3.p2')}</p>
        <p>{t('commitments.commitment3.p3')}</p>
        <h3>{t('commitments.commitment4.title')}</h3>
        <p>{t('commitments.commitment4.p1')}</p>
        <p>{t('commitments.commitment4.p2')}</p>
        <h3>{t('commitments.commitment5.title')}</h3>
        <p>{t('commitments.commitment5.p1')}</p>
        <div className="mt-10">
          <Button color={'secondary'} type="noicon" href={'/contact'}>
            {t('common:contact')}
          </Button>
        </div>
      </Section>
    </>
  )
}
