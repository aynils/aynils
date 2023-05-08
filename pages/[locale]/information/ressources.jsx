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

const resources = [
  {
    title: "Modèle de cahier des charges pour la refonte d'un site internet",
    slug: 'modele-cahier-des-charges-refonte-site-internet',
    date: '2023-03-08',
    summary:
      "<p>Le cahier des charges est un document essentiel pour la préparation de la refonte d'un site internet. C'est ce document qui servira de base pour les discussions avec les prestataires de service pour définir les coûts de développement puis à vérifier que le résultat correspond à vos attentes.<p/><p>Utilisez ce modèle mis à votre disposition pour ne rien oublier lors de la rédaction de ce document important.</p>",
  },
  {
    title: 'Modèle de politique de confidentialité des données',
    slug: 'modele-de-politique-de-confidentialite-des-donnees',
    date: '2023-02-09',
    summary:
      '<p>Une politique de confidentialité des données est le document qui permet à votre public, vos membres, vos partenaires et toutes les personnes avec lesquelles vous entretenez des relations professionnelles de connaître précisément la façon dont vous récoltez, traitez et stockez leurs données.</p><p>Utilisez ce modèle mis à votre disposition pour créer votre propre politique de confidentialité des données</p>',
  },
]

export default function Resources() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('resources.title')}`}
        description={t('resources.description')}
      />
      <PageHeader title={t('resources.title')} />
      <Section
        id={t('resources.title')}
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
          <p>{t('resources.title')}</p>
          <h2>{t('resources.subtitle')}</h2>
        </header>
        <p>{t('resources.p1')}</p>
        <p>{t('resources.p2')}</p>
        <p>{t('resources.p3')}</p>
        <PublicationCards publications={resources} />

        <p>{t('resources.p6')}</p>
      </Section>
    </>
  )
}
