import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

import Hero from '@/components/Section/Hero'
import Section from '@/components/Section/Section'
import Button from '@/components/Button/Button'
import InformIllustration from '../../public/static/images/undraw_online_articles_re_yrkj.svg'
import ToolsIllustration from '../../public/static/images/undraw_blogging_re_kl0d.svg'
import ConsultIllustration from '../../public/static/images/undraw_solution_mindset_re_57bf.svg'

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
            className="h-[70%] w-full"
            viewBox="100 300 600 100"
            alt="Illustration représentant une personne debout, lisant un article de blog."
          />
        }
        imagePlacement="left"
        backgroundColor="bg-primary-0"
      >
        <header>
          <p>{t('inform')}</p>
          <h2>{t('inform_section.subtitle')}</h2>
        </header>
        <p>{t('inform_section.p1')}</p>
        <p>{t('inform_section.p2')}</p>
        <div className="mt-10 lg:mt-20">
          <Button color={'secondary'} type="noicon" href={'/fr/information'}>
            {t('inform_section.inform_link')}
          </Button>
        </div>
      </Section>
      <Section
        id="section2"
        image={
          <ConsultIllustration
            className="h-[50%] w-full"
            viewBox="000 250 550 100"
            alt="Illustration représentant plusieurs personnes devant un tableau présentant un choix entre deux blocs d'information."
          />
        }
        imagePlacement="left"
        backgroundColor="bg-primary-100"
      >
        <header>
          <p>{t('consult')}</p>
          <h2>{t('consult_section.subtitle')}</h2>
        </header>
        <p>{t('consult_section.p1')}</p>
        <p>{t('consult_section.p2')}</p>
        <ul>
          <li className={'task-list-item'}>{t('consult_section.l3')}</li>
          <li className={'task-list-item'}>{t('consult_section.l1')}</li>
          <li className={'task-list-item'}>{t('consult_section.l4')}</li>
          <li className={'task-list-item'}>{t('consult_section.l2')}</li>
        </ul>
        <div className="mt-10 lg:mt-20">
          <Button color={'secondary'} type="noicon" href={'/fr/conseil'}>
            {t('consult_section.consult_link')}
          </Button>
        </div>
      </Section>
      <Section
        id="section2"
        image={
          <ToolsIllustration
            className="h-[20%] w-full"
            viewBox="000 200 980 100"
            alt="Illustration représentant plusieurs personnes en train de construire une interface web."
          />
        }
        imagePlacement="left"
        backgroundColor="bg-primary-0"
      >
        <header>
          <p>{t('tools')}</p>
          <h2>{t('tools_section.subtitle')}</h2>
        </header>
        <p>{t('tools_section.p1')}</p>
        <p>{t('tools_section.p2')}</p>
        <p>{t('tools_section.p3')}</p>

        <div className="mt-10">
          <Button color={'secondary'} type="noicon" href={'/fr/outils'}>
            {t('tools_section.tools_link')}
          </Button>
        </div>

        <header className="mt-20">
          {/*<p>{t('training_section.subtitle')}</p>*/}
          <h2>{t('training_section.subtitle')}</h2>
        </header>
        <p>{t('training_section.p1')}</p>
        <p>{t('training_section.p2')}</p>
        <p>{t('training_section.p3')}</p>
        <ul>
          <li className={'task-list-item'}>{t('training_section.l1')}</li>
          <li className={'task-list-item'}>{t('training_section.l2')}</li>
          <li className={'task-list-item'}>{t('training_section.l3')}</li>
        </ul>
        <div className="mt-10">
          <Button color={'secondary'} type="noicon" href={'/fr/outils/formations'}>
            {t('training_section.training_link')}
          </Button>
        </div>
      </Section>
    </>
  )
}
