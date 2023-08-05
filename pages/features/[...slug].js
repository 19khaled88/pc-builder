import fsPromises from 'fs/promises'
import path from 'path'
import { useRouter } from 'next/router'
import RootLayout from '@/components/Layouts/RootLayout'

const CatchAllRoutes = ({display}) => {
  const router = useRouter()

  return <div>{router.query.slug}</div>
}

export default CatchAllRoutes

CatchAllRoutes.getLayout = function getLayout(page){
    return(
        <RootLayout>{page}</RootLayout>
    )
}


export const getStaticPaths = async () => {
    const filePath = path.join(process.cwd(), 'db.json')
    const jsonData = await fsPromises.readFile(filePath)
    const data = JSON.parse(jsonData)
    // const flatData = Object.values(data).flat()
    const flatData = data.all
  
    const paths = flatData.map((flat) => {
      const { id,category } = flat
      return {
        params: {
          slug: [id.toString()],
        },
      }
    })
  
    return { paths, fallback: false }
  }


  export const getStaticProps = async (context) => {
    const { params } = context
   
    const filePath = path.join(process.cwd(), 'db.json')
    const jsonData = await fsPromises.readFile(filePath)
    const data = JSON.parse(jsonData)
  
    const temp = data.all.filter((info) => info.id === (params.slug))
    return {
      props: {
        display: temp,
      },
    }
  }
