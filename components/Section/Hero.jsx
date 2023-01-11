import LogoVertical from '../../public/static/images/logos/aynils_vertical.svg'
import { useTranslation } from 'next-i18next'
import ArrowDownIcon from '../../public/static/icons/arrow-down.svg'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <section className="mb-20">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute -z-10 h-[750px] sm:h-[560px] sm:w-[250%]"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#E4FFFF" offset="0%" />
            <stop stopColor="#BAFAFF" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        />
      </svg>
      <container className="mx-auto block max-w-7xl">
        <div className="px-6 pt-0 text-center text-gray-800 md:py-20 md:px-24  lg:text-left">
          <div className="container mx-auto ">
            <div className="flex grid items-center  gap-12 lg:grid-cols-3">
              <div className="col-span-2 mt-12 flex flex-col justify-center lg:mt-0">
                <h1>
                  {t('our_mission')} <br />
                </h1>
                <p className="mb-16 mt-10 text-2xl text-secondary-800">{t('mission')}</p>

                <a type="button" className="buttonSecondary mx-auto lg:ml-0" href="#section1">
                  {t('how_can_we_help')}
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
                </a>
              </div>
              <div className="h-9/12 mb-0 hidden w-9/12 justify-self-end lg:block">
                <LogoVertical className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  )
}

export default Hero
