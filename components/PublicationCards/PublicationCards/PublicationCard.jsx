import PublicationCard from '@/components/PublicationCards/PublicationCard/PublicationCard'

const PublicationCards = ({ publications }) => {
  return publications.map((publication) => (
    <PublicationCard key={publication.slug} publication={publication} />
  ))
}

export default PublicationCards
