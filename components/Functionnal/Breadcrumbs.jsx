import { Children, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Fragment } from 'preact'
import Link from '@/components/Link'
import { useTranslation } from 'next-i18next'
import headerNavLinks from '@/data/headerNavLinks'

const Breadcrumbs = ({ page }) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState()

  const { t } = useTranslation('common')

  const findLabelForPath = (path) => {
    const links = [...headerNavLinks].map((link) => link)
    const subLinks = headerNavLinks.flatMap((link) => link.subLinks).filter((link) => link)
    const allLinks = [...links, ...subLinks]
    const link = allLinks.find((link) => link.href === `/${path}`)
    return link?.title
  }

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray
      .filter((path) => path !== '')
      .filter((path) => !['fr', 'en'].includes(path.toLowerCase()))

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: t(findLabelForPath(path)),
        isCurrent: index === pathArray.length - 1,
      }
    })

    setBreadcrumbs(breadcrumbs)
  }, [router.asPath, t])

  return (
    <Breadcrumb page={page}>
      <BreadcrumbItem isCurrent={router.pathname === '/'} href="/">
        <i className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </i>
        <span className="mx-2">{t('home')}</span>
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}
          >
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  )
}

export default Breadcrumbs

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children)

  const childrenWithSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return <Fragment key={index}>{child}/</Fragment>
    }
    return child
  })

  return (
    <nav className="mb-4" aria-label="breadcrumb">
      <ul>{childrenWithSeperator}</ul>
    </nav>
  )
}

const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
  return (
    <li className="mx-3 inline " {...props}>
      {isCurrent ? (
        <>{children}</>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
    </li>
  )
}
