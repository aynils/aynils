import LogoVertical from '/public/static/images/logos/aynils_icon.svg'
import { useTranslation } from 'next-i18next'
import Button from '@/components/Button/Button'
import GradientSection from '@/components/Section/GradientSection'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <GradientSection>
      <container className="mx-auto block max-w-7xl">
        <div className="px-6 pt-0 pb-8 lg:px-24 lg:py-32">
          <div className="container mx-auto ">
            <div className="grid items-center  gap-12 lg:grid-cols-3">
              <div className="col-span-2 mt-12 flex flex-col justify-center lg:mt-0">
                {/*<h1>*/}
                {/*  {t('our_mission')} <br />*/}
                {/*</h1>*/}
                <p className="mb-8 mt-10 font-title text-3xl text-secondary-800 lg:mt-0">
                  {t('mission_statement')}
                </p>

                <Button
                  color={'secondary'}
                  type="arrowDown"
                  className="mx-auto lg:ml-0"
                  href="#section1"
                >
                  {t('how_can_we_help')}
                </Button>
              </div>
              <div className="mb-0 hidden h-full w-full justify-self-end lg:block">
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
