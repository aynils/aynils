/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ skipLocaleHandling, href, ...rest }) => {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || 'fr'

  href = href || router.asPath
  if (href.indexOf('http') === 0 || href.indexOf('mailto') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale)
  }

  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  if (rest.norefer) {
    return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  }
  return <a target="_blank" rel="noopener" href={href} {...rest} />
}

export default CustomLink
