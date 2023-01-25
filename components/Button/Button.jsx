import ExternalLinkIcon from '../../public/static/icons/external_link.svg'
import ArrowDownIcon from '../../public/static/icons/arrow-down.svg'

const addIcon = (type, color) => {
  switch (type) {
    case 'externalLink':
      return (
        <ExternalLinkIcon
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="download"
          className={`ml-4 h-full w-6 fill-current ${color === 'primary' ? 'text-white' : ''}`}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 35 35"
        />
      )
    case 'arrowDown':
      return (
        <ArrowDownIcon
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="download"
          className="ml-2 h-full w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 35 35"
        />
      )

    default:
      break
  }
}

const Button = ({ color, type, children, className, href }) => {
  return (
    <a type="button" className={`button ${color} ${className}`} href={href}>
      {children}
      {addIcon(type, color)}
    </a>
  )
}

export default Button