import Link from '@/components/Link'
import { makeStaticProps, getStaticPaths } from '@/lib/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['common'], {})
export { getStaticPaths, getStaticProps }

export default function FourZeroFour() {
  const { t } = useTranslation('common')
  return (
    <>
      <div className="mx-auto mt-20 flex w-10/12 flex-col justify-center pt-6 text-center md:space-y-5">
        <h1>404</h1>
        <p className="pb-12 text-xl font-bold leading-normal md:text-2xl">
          Désolé, nous n'avons pas pu trouver cette page.
        </p>
        <Link href="/" className="button primary mt-8 self-center">
          Retourner à l'accueil
        </Link>
      </div>
    </>
  )
}
