import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between pt-5 pb-2">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="hidden h-full text-2xl font-semibold md:block">
              {siteMetadata.headerTitle}
            </div>
          </Link>
          <div className="flex items-center text-base leading-5">
            <div className="hidden flex-nowrap sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/*<ThemeSwitch />*/}
            <MobileNav />
          </div>
        </header>
        <p className="mt-1 mb-5 hidden text-xl text-secondary-600 dark:text-secondary-200 md:block">
          {siteMetadata.description}
        </p>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
