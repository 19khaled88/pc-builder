import RootLayout from '@/components/Layouts/RootLayout'
import Motherboard from '@/components/Motherboard/Motherboard'
import path from 'path'
import fsPromises from 'fs/promises'

const MotherboardPage = ({ display }) => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available motherboard
      </h1>
      <Motherboard display={display} />
    </div>
  )
}

export default MotherboardPage

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  if (typeof window === undefined) {
    return {
      props: {
        display: [],
      },
    }
  }

  const filePath = path.join(process.cwd(), 'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      display: data,
    },
  }
}
