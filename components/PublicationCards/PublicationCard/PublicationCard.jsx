import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import parse from 'html-react-parser'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

const PublicationCard = ({ publication }) => {
  return (
    <Link
      className="mb-8 flex h-auto w-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-lg hover:scale-[1.01]"
      href={'/information/' + publication.slug + '/'}
    >
      <header className="text-primary-900 font-title text-2xl font-semibold">
        {publication.title}
      </header>
      <p className="mb-0 text-base text-primary-700">
        <time dateTime={publication.date}>
          {new Date(publication.date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
        </time>
      </p>
      {/*<p className="prose">{publication.summary}</p>*/}
      <p className="prose">{parse(publication.summary)}</p>
    </Link>
  )
}

export default PublicationCard
