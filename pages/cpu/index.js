import RootLayout from '@/components/Layouts/RootLayout'
import Processor from '@/components/Processor/Processor'


const CpuPage = ({ allCpus }) => {

  // const { cpu } = allCpus
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      <Processor cpu={allCpus} />
    </div>
  )
}

export default CpuPage

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export async function getStaticProps() {

  if(typeof window === undefined){
    return{
      props:{
        allCpus:[]
      }
    }
  }
  const res = await fetch('http://localhost:3004/db')
    const data = await res.json()
   
    return {
      props: {
        allCpus: data,
      },
    }
}
