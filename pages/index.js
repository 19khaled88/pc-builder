import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout'
import path from 'path'
import fsPromises from 'fs/promises'
import HomeComponent from '@/components/Home/Home'
import Features from '@/components/Features/Features'
const inter = Inter({ subsets: ['latin'] })

export default function HomePage({ display }) {
  return (
    <div className="">
      <h1 className="text-center text-lg font-bold pt-5">Home page</h1>
      <HomeComponent display={display.all} />
      <div>
        <h1 className="bg-orange-300 text-center p-5 text-2xl font-bold">
          Featured Categories
        </h1>
        <div className="flex flex-col gap-5">
          <Features display={display} />
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
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
