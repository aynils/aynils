import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { useTranslation } from 'next-i18next'
import PageHeader from '@/components/Section/PageHeader'
import Section from '@/components/Section/Section'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) => {
  const url = encodeURIComponent(`${siteMetadata.siteUrl}/blog/${slug}`)
  const text = `@svandegar, je viens de lire cet article et ... %0A%0A`
  return `https://twitter.com/intent/tweet?url=${url}&text=${text}`
}

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, type, updatedDate } = frontMatter

  const { t } = useTranslation(['blog', 'common'])

  return (
    <>
      <PageHeader title={title} type={type} />
      <Section backgroundColor="bg-primary-0">
        <BlogSEO
          url={`${siteMetadata.siteUrl}/blog/${slug}`}
          authorDetails={authorDetails}
          {...frontMatter}
        />
        <ScrollTopAndComment />
        <article>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">{t('authors')}</dt>
              <dd>
                <ul className="flex flex-col justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex flex-col items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="100px"
                          height="100px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="mt-8 whitespace-nowrap text-center font-medium leading-5">
                        <dt className="sr-only">{t('name')}</dt>
                        <Link href={author.linkedin} className="stext-gray-900 dark:text-gray-100">
                          {author.name}
                        </Link>
                      </dl>
                    </li>
                  ))}
                  <li className="!m-auto w-full">
                    <dt className="sr-only">{t('publication_date')}</dt>
                    <dd className="flex w-full justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time className={'capitalize'} dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 text-xl dark:prose-dark">{children}</div>
              <div className="pt-6 pb-6 text-base text-gray-700 dark:text-gray-300">
                {t('licence')}
                <Link
                  href={'https://creativecommons.org/licenses/by-sa/4.0/deed.fr'}
                  rel="nofollow"
                >
                  {' '}
                  {t('cc-by-v4')}
                </Link>
              </div>
              {/*<div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">*/}
              {/*  <Link href={discussUrl(slug, 'linkedin')} rel="nofollow">*/}
              {/*    {'Commenter sur LinkedIn'}*/}
              {/*  </Link>*/}
              {/*  {` • `}*/}
              {/*  <Link href={discussUrl(slug, 'facebook')} rel="nofollow">*/}
              {/*    {'Commenter sur Facebook'}*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2>{t('keywords')}</h2>
                    <div className="mt-4 flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2>{t('previous')}</h2>
                        <div className="mt-2 text-primary-500 hover:text-primary-600 dark:text-primary-200 dark:hover:text-primary-300">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2>{t('next')}</h2>
                        <div className="mt-2 text-primary-500 hover:text-primary-600 dark:text-primary-200 dark:hover:text-primary-300">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </footer>
          </div>
        </article>
      </Section>
    </>
  )
}
