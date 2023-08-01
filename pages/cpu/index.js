import RootLayout from '@/components/Layouts/RootLayout'


const CpuPage = ({ allCpus }) => {
  // const { cpu } = allCpus
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      
    </div>
  )
}

export default CpuPage

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {

  if(typeof window === undefined){
    return{
      props:{
        allCpus:[]
      }
    }
  }
 
  const res = await fetch(`${process.env.URL}/db`)
  const data = await res.json()
  return {
    props: {
      allCpus: data,
    },
  }
}
