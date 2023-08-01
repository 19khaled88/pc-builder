
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const RootLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default RootLayout
