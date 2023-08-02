import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
const HomeComponent = ({ display }) => {
  const arr = Object.values(display).flat()
  const router = useRouter()

  const detailHandler=(id)=>{
    router.push(`/product/${id}`)
  }
  const getRandomProduct = (arr, num) => {
    let array = []
    const shuffled = [...arr].sort(() => 0.5 - Math.random())

    shuffled.slice(0, num).map((data, index) => {
      array.push(
        <div onClick={()=>detailHandler(data.id)} key={index} className="card bg-base-100 shadow-xl p-2 cursor-pointer">
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 ">
      {getRandomProduct(arr, 9)}
    </div>
  )
}

export default HomeComponent
