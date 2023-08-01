import Image from 'next/image'
const Processor = ({ cpu }) => {
  const cpuCard = (cpu) => {
    let array = []
    for (let data in cpu) {
      cpu[data].map((data) => {
        array.push(
          <div key={data.id} className="card bg-base-100 shadow-xl p-2">
            <figure className="pt-5 pl-5 pr-5">
              <Image
                src={data.image}
                width={200}
                height={200}
                layout="responsive"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-1">
              <p className="card-title text-sm text-start">{data.name}</p>
              <div className="flex flex-row justify-between text-sm md:text-md lg:text-md">
                <p>Category : {data.category}</p>
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
    }
    return array
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 ">
      {cpuCard(cpu)}
    </div>
  )
}

export default Processor
