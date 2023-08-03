import RootLayout from '@/components/Layouts/RootLayout';
import path from 'path'
import fsPromises from 'fs/promises'
import PcBuilder from '@/components/PcBuilder/PcBuilder';

const PcBuilderPage = ({display}) => {
  
  return (
    <div className='p-5 flex flex-col justify-center text-center'>
      <p className='text-2xl'>Pc Builder page</p>
      <PcBuilder display={display}/>
    </div>
  );
}

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page){
    return(
        <RootLayout>{page}</RootLayout>
    )
}

export const getServerSideProps = async () => {

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
    
    return {
      props: {
        display: data,
      },
    }
  }
