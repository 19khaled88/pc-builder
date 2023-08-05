import RootLayout from '@/components/Layouts/RootLayout'
import path from 'path'
import fsPromises from 'fs/promises'
import ChooseDevice from '@/components/PcBuilder/ChooseDevice'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const BuildPc = ({ display }) => {
  const router = useRouter()
  const { data, isLoading, isSuccess, isError } = useSelector(
    (state) => state.builder,
  )
  
 if(Object.keys(data).length > 0){
  data.map((element)=>{
   let data = display.map((newElement)=>{
    if(newElement.id === element.id){
      router.push('/pcbuilder')
     }
   } )
  })
 }

  return (
    <div className="p-2 flex flex-col justify-center text-center">
      <p className="text-2xl p-5">Single device select page</p>
      <ChooseDevice display={display} />
    </div>
  )
}

export default BuildPc

BuildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async (context) => {
  if (typeof window === undefined) {
    return {
      props: {
        display: [],
      },
    }
  }

  const filePath = path.join(process.cwd(), 'db.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)
  const temp = data.all.filter((item) => item.category === context.query.build)

  return {
    props: {
      display: temp,
    },
  }
}
