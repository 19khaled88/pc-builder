import RootLayout from '@/components/Layouts/RootLayout'
import Processor from '@/components/Processor/Processor'
import path from 'path'
import fsPromises from 'fs/promises'

const CpuPage = ({ allCpus }) => {
  // const { cpu } = allCpus
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      <Processor cpu={allCpus}/>
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
 

  const filePath = path.join(process.cwd(),'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)
  
  return {
    props: {
      allCpus: data,
    },
  }
}
