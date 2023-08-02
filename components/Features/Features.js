import Image from 'next/image'
import React from 'react'

const Features = ({ display }) => {
  const feature = display.features
  const displayFeature = (feature) => {
    let array = []
    feature.map((data,index) => {
      array.push(
        <div key={index} className="card bg-base-100 shadow-xl image-full">
          <figure>
          <Image
              src={data.image}
              width={200}
              height={200}
              layout="responsive"
              alt=""
            />
          </figure>
          <div className="card-body flex flex-row justify-center">
            <h2 className="card-title  h-full text-2xl">{data.name}</h2>
            
           
          </div>
        </div>,
      )
    })
    return array
  }

  return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 '>{displayFeature(feature)}</div>
}

export default Features
