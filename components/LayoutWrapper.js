import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Navbar from '@/components/Navbar/Navbar'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
