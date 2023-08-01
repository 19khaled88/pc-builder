import Image from 'next/image'
const Processor = ({ cpu }) => {
  const cp = cpu.cpu
  const cpuCard = (cp) => {
    let array = []
    cp.map((data) => {
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
            <h2 className="card-title text-sm">{data.name}</h2>
            <h4 className={`${data.status === 'out of Stock' ? 'text-red-600 font-bold' : null}`}>Status: {data.status}</h4>
            <div className="flex flex-row justify-between text-sm">
              <p>Type : {data.category}</p>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-2 ">
      {cpuCard(cp)}
    </div>
  )
}

export default Processor
