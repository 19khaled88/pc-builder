import RootLayout from '@/components/Layouts/RootLayout'
import fsPromises from 'fs/promises'
import Image from 'next/image'
import { useRouter } from 'next/router'
import path from 'path'

const FeatureProducts = ({ display }) => {
  const router = useRouter()
  const randomNumber =
    Math.floor(Math.random() * (Object.keys(display).length - 3 + 1)) + 3

  const getRandomProduct = (display, randomNumber) => {
    let array = []
    const shuffled = [...display].sort(() => 0.5 - Math.random())

    shuffled.slice(0, randomNumber).map((data, index) => {
      array.push(
        <div
          onClick={() => detailHandler(data.id,data.category)}
          key={index}
          className="card bg-base-100 shadow-xl p-2 cursor-pointer"
        >
          <figure className="pt-5 pl-5 pr-5 hover:scale-110 transition duration-700 ease-in-out">
            <Image
              src={data.image}
              width={200}
              height={200}
              layout="responsive"
              alt=""
            />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title text-sm text-left">{data.name}</h2>
            <h4
              className={`${
                data.status === 'out of Stock' ? 'text-red-600 font-bold' : null
              }`}
            >
              Status: {data.status}
            </h4>
            <div className="flex flex-row justify-between text-sm font-normal gap-2">
              <h1 className="text-left">Type : {data.category}</h1>
              <h1 className="text-right">Rating : {data.rating}</h1>
            </div>
            <div className="card-actions flex flex-row justify-between">
              <h1 className="badge badge-outline">Price : {data.price}</h1>
              <h1 className="badge badge-outline">Products</h1>
            </div>
          </div>
        </div>,
      )
    })

    return array
  }

  const detailHandler=(id,category)=>{
    router.push(`/features/${category}/${id}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 ">
      {getRandomProduct(display, randomNumber)}
    </div>
  )
}

export default FeatureProducts

FeatureProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)
  // const flatData = Object.values(data).flat()
  const flatData = data.all

  const paths = flatData.map((flat) => {
    const { category } = flat

    return {
      params: {
        featureId: category,
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

  const temp = data.all.filter((info) => info.category === params.featureId)
  return {
    props: {
      display: temp,
    },
  }
}
