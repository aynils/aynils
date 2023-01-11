import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNavbar from '@/components/Navbar/MobileNavbar'
import LogoHorizontal from '../../public/static/images/logos/aynils_horizontal.svg'

const Navbar = () => {
  return (
    <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between pl-16 pr-16 pt-5 pb-2">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <LogoHorizontal className="h-10 w-full" />
        {/*<div className="text-2xl font-semibold">{siteMetadata.headerTitle}</div>*/}
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden flex-nowrap lg:flex">
          {headerNavLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div
                  key={link.title}
                  className="dropdown text-primary-900 relative p-1 text-2xl font-medium hover:text-primary-500 dark:text-primary-100 dark:hover:text-primary-400 lg:p-4"
                >
                  <a
                    className="dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.title}
                  </a>
                  <ul
                    className="
                          dropdown-menu
                          absolute
                          z-50
                          float-left
                          m-0
                          mt-1
                          hidden
                          hidden
                          min-w-max
                          list-none
                          rounded-lg
                          border-none
                          bg-white
                          bg-clip-padding
                          py-2
                          text-left
                          text-base
                          shadow-lg
                        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.title}>
                        <a
                          className="
                                  dropdown-item
                                  block
                                  w-full
                                  whitespace-nowrap
                                  bg-transparent
                                  py-2
                                  px-4
                                  text-2xl
                                  font-normal
                                  text-primary-700
                                  hover:bg-primary-100
                                "
                          href={subLink.href}
                        >
                          {subLink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            } else {
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="dropdown text-primary-900 relative p-1 text-2xl font-medium hover:text-primary-500 dark:text-primary-100 dark:hover:text-primary-400 lg:p-4"
                >
                  {link.title}
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
