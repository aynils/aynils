import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNavbar from '@/components/Navbar/MobileNavbar'
// import 'tw-elements'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-5 pb-2">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="hidden h-full text-2xl font-semibold md:block">
          {siteMetadata.headerTitle}
        </div>
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden flex-nowrap sm:flex">
          {headerNavLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div
                  key={link.title}
                  className="dropdown relative p-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 sm:p-4"
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
                                  text-sm
                                  font-normal
                                  text-gray-700
                                  hover:bg-gray-100
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
                  className="p-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 sm:p-4"
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
