import Footer from './Footer'
import Navbar from '@/components/Navbar/Navbar'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
