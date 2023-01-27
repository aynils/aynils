import ExternalLinkIcon from '../../public/static/icons/external_link.svg'
import MailIcon from '../../public/static/icons/mail.svg'
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
          viewBox="0 2 40 40"
        />
      )
    case 'arrowDown':
      return (
        <ArrowDownIcon
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="download"
          className={`ml-2 h-full w-6 fill-current ${color === 'primary' ? 'text-white' : ''}`}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 35 35"
        />
      )

    case 'mail':
      return (
        <MailIcon
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="download"
          className={`ml-4 h-full w-6 fill-current ${color === 'primary' ? 'text-white' : ''}`}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 -5 40 40"
        />
      )

    default:
      break
  }
}

const Button = ({ color, type, children, className, href, target }) => {
  return (
    <a type="button" className={`button ${color} ${className}`} href={href} target={target}>
      {children}
      {addIcon(type, color)}
    </a>
  )
}

export const SubmitButton = ({ color, type, children, className, href, target }) => {
  return (
    <button type="submit" className={`button ${color} ${className}`}>
      {children}
      {addIcon(type, color)}
    </button>
  )
}

export default Button
