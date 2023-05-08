import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import InformIllustration from '/public/static/images/undraw_online_articles_re_yrkj.svg'
import Link from '@/components/Link'
import PublicationCards from '@/components/PublicationCards/PublicationCards/PublicationCard'

const getStaticProps = makeStaticProps(['information', 'common'], {})
export { getStaticPaths, getStaticProps }

const guides = [
  {
    title: 'Choisir un mot de passe sécurisé',
    slug: 'choisir-un-mot-de-passe-securitaire',
    date: '2023-04-03',
    summary:
      '<p>Chaque service en ligne demande de choisir un mot de passe unique et difficile à deviner. Qui dit difficile à deviner dit souvent difficile à retenir.</p>' +
      '<p>Alors comment fait-on pour choisir un mot de passe sécuritaire, mais facile à retenir ?</p>',
  },
  {
    title: "Guide de rédaction du cahier des charges pour la refonte d'un site Web",
    slug: 'guide-cahier-des-charges-refonte-site-internet',
    date: '2023-03-08',
    summary:
      "<p>Le cahier des charges est un document essentiel pour la préparation de la refonte d'un site internet. L'élaboration de ce document vous permettra de réfléchir à vos attentes et aux objectifs de la refonte.</p>" +
      '<p>Dans ce guide, nous mettons notre expertise à votre service en vous expliquant quels sont les éléments importants et pourquoi ils devraient faire partie de votre cahier des charges.</p>',
  },
]

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
        <PublicationCards publications={guides} />
        <p>{t('guides.p6')}</p>
      </Section>
    </>
  )
}
