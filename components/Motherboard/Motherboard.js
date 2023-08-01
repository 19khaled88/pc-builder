import Image from 'next/image'
import React from 'react'

const Motherboard = ({ display }) => {
  const motherboard = display.motherboard
  const motherboardCard = (motherboard) => {
    let array = []
    motherboard.map((data) => {
      array.push(
        <div key={data.id} className="card bg-base-100 shadow-xl p-2">
          <figure className="pt-5 pl-5 pr-5">
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
            <h4 className={`${data.status === 'out of Stock' ? 'text-red-600 font-bold' : null}`}>Status: {data.status}</h4>
            <div className="flex flex-row justify-between text-sm font-normal gap-2">
              <p className='text-left'>Type : {data.category}</p>
              <p className="text-right">Rating : {data.rating}</p>
            </div>
            <div className="card-actions flex flex-row justify-between">
              <div className="badge badge-outline">Price : {data.price}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>,
      )
    })

    return array
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 ">
      {motherboardCard(motherboard)}
    </div>
  )
}

export default Motherboard
