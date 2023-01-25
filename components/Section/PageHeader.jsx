import GradientSection from '@/components/Section/GradientSection'
import Breadcrumbs from '@/components/Functionnal/Breadcrumbs'

const PageHeader = ({ title }) => {
  return (
    <GradientSection>
      <container className="mx-auto block max-w-7xl">
        <div className="px-6 pt-0 text-center text-gray-800 lg:py-20 lg:px-24 ">
          <div className="container mx-auto">
            <div className="flex items-center ">
              <div className="mx-auto mt-12 flex flex-col justify-center lg:mt-0">
                <h1>{title}</h1>
                <Breadcrumbs />
              </div>
            </div>
          </div>
        </div>
      </container>
    </GradientSection>
  )
}

export default PageHeader
