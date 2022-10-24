import siteMetadata from '@/data/siteMetadata'
import mediaData from '@/data/mediaData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Media() {
  return (
    <>
      <PageSEO
        title={`Media - ${siteMetadata.author}`}
        description={
          "Ici se trouvent des articles que j'ai écrit et des interviews auxquelles j'ai participé."
        }
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1>Media</h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Vous trouverez ici des articles que j'ai écrit et des interviews auxquelles j'ai
            participé.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {mediaData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
