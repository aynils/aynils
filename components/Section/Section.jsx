import LogoVertical from '/public/static/images/logos/aynils_vertical.svg'
import { useTranslation } from 'next-i18next'
import ArrowDownIcon from '/public/static/icons/arrow-down.svg'

const Hero = ({ children }) => {
  return (
    <section className="py-10 lg:py-10">
      <container className="mx-auto block max-w-7xl px-6 sm:px-16 lg:px-24">{children}</container>
    </section>
  )
}

export default Hero
