import Image from 'next/image'
const Processor = ({ cpu }) => {
 
  const cpuCard = (cpu) => {
    let array = []
    for (let data in cpu) {
      cpu[data].map((data)=>{
        array.push(
          <div key={data.id} className="card bg-base-100 shadow-xl p-3">
            <figure className='pt-5 pl-5 pr-5'>
              <Image 
              src={data.image} 
              width={200} 
              height={200} 
              layout="responsive"
              alt="Shoes" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">
                <div>{data.name}</div>
              </h2>
              <div className='flex flex-row justify-between'>
                <p>Category : {data.category}</p>
                <p className='text-right'>Rating : {data.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  Price : {data.price}
                </div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>,
        )
      })
    
    }
    return array
  }

  return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 ">{cpuCard(cpu)}</div>
}

export default Processor
