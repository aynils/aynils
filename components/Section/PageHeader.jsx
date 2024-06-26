import GradientSection from '@/components/Section/GradientSection'
import Breadcrumbs from '@/components/Functionnal/Breadcrumbs'

const PageHeader = ({ title, type }) => {
  return (
    <GradientSection>
      <container className="mx-auto block max-w-7xl">
        <div className="px-6 pt-4 pb-0 text-center text-gray-800 lg:py-4 lg:px-24 ">
          <div className="container mx-auto">
            <div className="flex items-center py-12 md:py-16">
              <div className="mx-auto flex flex-col justify-center  lg:mt-0">
                <h1>{title}</h1>
                <Breadcrumbs type={type} />
              </div>
            </div>
          </div>
        </div>
      </container>
    </GradientSection>
  )
}

export default PageHeader
