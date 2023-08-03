import RootLayout from '@/components/Layouts/RootLayout';
import path from 'path'
import fsPromises from 'fs/promises'
import { Others } from '@/components/Others/Others';

const OtherPage = ({display}) => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">Others page</h1>
      <Others display={display} />
    </div>
  );
}

export default OtherPage;

OtherPage.getLayout = function getLayout(page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}


export const getStaticProps = async () => {

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
