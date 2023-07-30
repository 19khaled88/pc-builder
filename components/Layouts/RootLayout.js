
import Navbar from "../Navbar/Navbar"

const RootLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  )
}

export default RootLayout
