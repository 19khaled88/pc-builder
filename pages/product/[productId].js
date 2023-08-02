import RootLayout from '@/components/Layouts/RootLayout'
import { useRouter } from 'next/router'
import fsPromises from 'fs/promises'
import path from 'path'
import Image from 'next/image'

const ProductDetails = ({ display }) => {
  const router = useRouter()
  const description =(data)=>{
    let array=[]
    for(let info in data){
      array.push(
        <p className='pl-3'>{info}: {data[info]}</p>
      )
    }
    return array
  }
  const details = (display) => {
    let array = []
    display.map((info) => {
      array.push(
      <div className='flex flex-row gap-9'>
        <Image src={info.image} width={200} height={200} alt="" />
        <div>
          <p>Name: {info.name}</p>
          <p>Type: {info.category}</p>
          <p>Price: {info.price}</p>
          <p>Status: {info.status}</p>
          <p>Rating: {info.rating}</p>
          {info.description !== undefined ? <p className='p-2'>Description:{description(info.description)}</p>: null}
        </div>
      </div>
      )
    })
    return array
  }
  return <div className='flex flex-row justify-center p-5'>{details(display)}</div>
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

  const temp = data.all.filter((info) => info.id === parseInt(params.productId))
  return {
    props: {
      display: temp,
    },
  }
}
