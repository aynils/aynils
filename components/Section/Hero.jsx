import LogoVertical from '/public/static/images/logos/aynils_vertical.svg'
import { useTranslation } from 'next-i18next'
import Button from '@/components/Button/Button'
import GradientSection from '@/components/Section/GradientSection'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <GradientSection>
      <container className="mx-auto block max-w-7xl">
        <div className="px-6 pt-0 text-center text-gray-800 lg:py-20 lg:px-24  lg:text-left">
          <div className="container mx-auto ">
            <div className="flex grid items-center  gap-12 lg:grid-cols-3">
              <div className="col-span-2 mt-12 flex flex-col justify-center lg:mt-0">
                <h1>
                  {t('our_mission')} <br />
                </h1>
                <p className="mb-8 mt-10 text-2xl text-secondary-800">{t('mission')}</p>

                <Button
                  color={'secondary'}
                  type="arrowDown"
                  className="mx-auto lg:ml-0"
                  href="#section1"
                >
                  {t('how_can_we_help')}
                </Button>
              </div>
              <div className="h-9/12 mb-0 hidden w-9/12 justify-self-end lg:block">
                <LogoVertical className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </container>
    </GradientSection>
  )
}

export default Hero
