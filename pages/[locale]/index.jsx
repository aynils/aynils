import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

import Hero from '@/components/Section/Hero'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import InformIllustration from '../../public/static/images/undraw_online_articles_re_yrkj.svg'

const getStaticProps = makeStaticProps(['common'], { posts: await getAllFilesFrontMatter('blog') })
export { getStaticPaths, getStaticProps }

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Section
        id="section1"
        image={
          <InformIllustration
            className="h-full w-full"
            viewBox="100 600 600 100"
            alt="Illustration représentant une personne debout, lisant un article de blog."
          />
        }
        imagePlacement="left"
        backgroundColor="white"
      >
        <header>
          <p>{t('inform')}</p>
          <h2>{t('inform_section.subtitle')}</h2>
        </header>
        <p>{t('inform_section.p1')}</p>
        <p>{t('inform_section.p2')}</p>
        <div className="mt-10 lg:mt-20">
          <Button color={'secondary'} type="externalLink" href={'/informer'}>
            {t('inform_section.inform_link')}
          </Button>
        </div>
      </Section>
      <Section
        id="section2"
        image={
          <InformIllustration
            className="h-full w-full"
            viewBox="100 500 600 100"
            alt="Illustration représentant une personne debout, lisant un article de blog."
          />
        }
        imagePlacement="left"
        backgroundColor="white"
      >
        <header>
          <p>{t('consult')}</p>
          <h2>{t('consult_section.subtitle')}</h2>
        </header>
        <p>{t('consult_section.p1')}</p>
        <p>{t('consult_section.p2')}</p>
        <ul>
          <li>{t('consult_section.l1')}</li>
          <li>{t('consult_section.l2')}</li>
          <li>{t('consult_section.l3')}</li>
          <li>{t('consult_section.l4')}</li>
        </ul>
        <div className="mt-10 lg:mt-20">
          <Button color={'secondary'} type="externalLink" href={'/conseiller'}>
            {t('consult_section.consult_link')}
          </Button>
        </div>
      </Section>
    </>
  )
}
