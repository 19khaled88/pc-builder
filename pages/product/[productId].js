import RootLayout from '@/components/Layouts/RootLayout'
import { useRouter } from 'next/router'
import fsPromises from 'fs/promises'
import path from 'path'

const ProductDetails = ({ display }) => {

  const router = useRouter()
  return <div>{router.query.productId}</div>
}

export default ProductDetails

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)
  // const flatData = Object.values(data).flat()
  const flatData = data.all

  const paths = flatData.map((flat) => {
    const { id } = flat
    return {
      params: {
        productId: id.toString(),
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
  const temp = data.all 
  console.log(temp)
  const datum = temp.filter((info)=>info.id === params.productId)

  return {
    props: {
      display: datum,
    },
  }
}
