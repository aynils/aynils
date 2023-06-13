import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'
import InformIllustration from '/public/static/images/undraw_online_articles_re_yrkj.svg'
import PublicationCards from '@/components/PublicationCards/PublicationCards/PublicationCard'

const getStaticProps = makeStaticProps(['information', 'common'], {})
export { getStaticPaths, getStaticProps }

const articles = [
  {
    title: 'Savez-vous reconnaitre une tentative de phishing?',
    slug: 'savez-vous-reconnaitre-une-tentative-de-phishing',
    date: '2023-06-12',
    summary:
      '<p>Le <i>phishing</i> ou hameçonnage est une technique qui consiste pour des personnes mal intentionnées à se faire passer pour un service en ligne que vous utilisez, dans le but de vous soutirer des informations personnelles. Le plus souvent, des informations de connexion ou de carte de crédit.</p>' +
      '<p>Ce test vous permettra de vous entrainer à reconnaitre ces courriels frauduleux.</p>',
  },
  {
    title: 'Le numérique est politique et les OSBL devraient s’y intéresser',
    slug: 'le-numerique-est-politique',
    date: '2023-05-29',
    summary:
      '<p>Depuis quelques années, de nombreuses initiatives documentent la domination croissante qu’exercent sur nos sociétés une poignée de géants du numérique. Cette hégémonie est-elle un problème ? </p>' +
      '<p>Discutons-en dans ce premier article d’une série consacrée aux stratégies numériques des organismes sans but lucratif.</p>',
  },
  {
    title: 'Incident de sécurité de LastPass: quels risques pour mon OSBL ?',
    slug: 'incident-de-securite-lastpass-quels-risques-que-faire',
    date: '2023-03-02',
    summary:
      "<p>Ce 1er mars 2023, le gestionnaire de mots de passe LastPass a publié une mise à jour sur deux incidents de sécurités survenus ces derniers mois.</p><p> Que cela signifie-t-il exactement ? Que s'est-il passé et quelles données ont été compromises ? Quel est l'impact sur mon organisme sans but lucratif et comment réagir ?</p>",
  },
]

export default function Articles() {
  const { t } = useTranslation('information')
  return (
    <>
      <PageSEO
        title={`${siteMetadata.defaultTitlePrefix}${t('articles.title')}`}
        description={t('articles.description')}
      />
      <PageHeader title={t('articles.title')} />
      <Section
        id={t('articles.title')}
        backgroundColor="bg-primary-0"
        image={
          <InformIllustration
            className="h-[40%] w-full"
            viewBox="000 000 850 600"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
      >
        <header>
          <p>{t('articles.title')}</p>
          <h2>{t('articles.subtitle')}</h2>
        </header>
        <p>{t('articles.p2')}</p>
        <PublicationCards publications={articles} />
      </Section>
    </>
  )
}
