import RootLayout from '@/components/Layouts/RootLayout';
import path from 'path'
import fsPromises from 'fs/promises'
import ChooseDevice from '@/components/PcBuilder/ChooseDevice';
import { useGetPcBuilderQuery } from '../redux/api/api';

const BuildPc = ({display}) => {
   const {data, isError,isSuccess,isLoading} = useGetPcBuilderQuery()


  return (
    <div className='flex flex-col items-center'>
      <p className='text-center text-2xl p-5'>Choose device page</p>
      {isLoading ? <div className='border border-blue-400 w-4/5 h-16 mb-3 flex flex-row pl-5 items-center' ><p>Loading.....</p></div>:<div className='border border-blue-400 w-4/5 h-16 mb-3 flex flex-row pl-5 items-center'>Selected Items : 0</div>}
      <ChooseDevice display={display} />
    </div>
  );
}

export default BuildPc;

BuildPc.getLayout = function getLayout(page){
    return(
        <RootLayout>{page}</RootLayout>
    )
}


export const getServerSideProps = async (context) => {
    
    if(typeof window === undefined){
      return{
        props:{
          display:[]
        }
      }
    }
   
  
    const filePath = path.join(process.cwd(),'db.json')
    const jsonData = await fsPromises.readFile(filePath)
    const data = JSON.parse(jsonData)
    const temp = data.all.filter((item)=>item.category === context.query.build)
   
    return {
      props: {
        display: temp,
      },
    }
  }
