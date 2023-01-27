import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNavbar from '@/components/Navbar/MobileNavbar'
import LogoHorizontal from '../../public/static/images/logos/aynils_horizontal.svg'
import { useTranslation } from 'next-i18next'

const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between bg-primary-0 pl-8 pr-8 pt-5 pb-2">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <LogoHorizontal className="h-10 w-full" />
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden flex-nowrap lg:flex">
          {headerNavLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div
                  key={link.title}
                  className="dropdown text-primary-900 relative p-1 text-2xl font-light hover:text-primary-600 dark:text-primary-100 dark:hover:text-primary-400 lg:p-4"
                >
                  <a
                    className="dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t(link.title)}
                  </a>
                  <ul
                    className="
                          dropdown-menu
                          absolute
                          !-left-4
                          z-50
                          hidden
                          min-w-max
                          list-none
                          rounded-lg
                          border-none
                          bg-white
                          bg-clip-padding
                          pt-4
                          pb-0
                          text-left
                          text-base
                          shadow-lg
                        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={`${link.href}${subLink.href}`}
                        href={`${link.href}${subLink.href}`}
                        className="
                                  dropdown-item
                                  block
                                  w-full
                                  whitespace-nowrap
                                  bg-transparent
                                  py-4
                                  px-6
                                  text-2xl
                                  font-normal
                                  text-primary-700
                                  hover:bg-primary-100
                                "
                      >
                        {t(subLink.title)}
                      </Link>
                    ))}
                  </ul>
                </div>
              )
            } else {
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="dropdown text-primary-900 relative p-1 text-2xl font-light hover:text-primary-600 dark:text-primary-100 dark:hover:text-primary-400 lg:p-4"
                >
                  {t(link.title)}
                </Link>
              )
            }
          })}
        </div>

        {/*<ThemeSwitch />*/}
        <MobileNavbar />
      </div>
    </nav>
  )
}

export default Navbar
