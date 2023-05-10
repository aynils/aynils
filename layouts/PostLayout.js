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

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, type, updatedDate } = frontMatter

  const { t } = useTranslation(['blog', 'common'])

  return (
    <>
      <PageHeader title={title} type={type} />
      <Section backgroundColor="bg-primary-0">
        <BlogSEO
          url={`${siteMetadata.siteUrl}/fr/information/${slug}`}
          authorDetails={authorDetails}
          {...frontMatter}
        />
        <ScrollTopAndComment />
        <article className={'mx-auto max-w-none xl:max-w-3xl'}>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-0 xl:dark:border-gray-700">
              <dt className="sr-only">{t('authors')}</dt>
              <dd>
                <ul className="flex flex-col justify-start space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
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
                      <dl className="mt-8 !ml-0 whitespace-nowrap font-medium leading-5">
                        <dt className="sr-only">{t('name')}</dt>
                        <dd>
                          <Link href={author.linkedin} className="text-gray-900 dark:text-gray-100">
                            {author.name}
                          </Link>
                        </dd>
                      </dl>
                    </li>
                  ))}
                  <li className="!m-auto w-full">
                    <dl>
                      <dt className="sr-only">{t('publication_date')}</dt>
                      <dd className="flex w-full justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="mx-auto max-w-none divide-y divide-gray-200 dark:divide-gray-700">
              <div className="prose pt-10 pb-8 text-xl dark:prose-dark ">{children}</div>
              <div className="pt-6 pb-6 text-base text-primary-700 dark:text-gray-300 lg:text-xl">
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
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700">
                {/*{tags && (*/}
                {/*  <div className="py-4 xl:py-8">*/}
                {/*    <h3 className={'mt-0'}>{t('common:tags')}</h3>*/}
                {/*    <div className="mt-0 block flex-wrap">*/}
                {/*      {tags.map((tag) => (*/}
                {/*        <Tag key={tag} text={tag} />*/}
                {/*      ))}*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*)}*/}
                {(next || prev) && (
                  <div className="block space-y-8 py-8 font-title text-lg lg:text-2xl">
                    {prev && (
                      <div>
                        <p className="mb-2 ">{t('previous')}</p>
                        <div className="mt-0 text-primary-bright hover:text-primary-brightDark">
                          <Link href={`/information/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <p className="mb-2 ">{t('next')}</p>
                        <div className="mt-2 text-primary-bright hover:text-primary-brightDark">
                          <Link href={`/information/${next.slug}`}>{next.title}</Link>
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
