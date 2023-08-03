import RootLayout from '@/components/Layouts/RootLayout';
import path from 'path'
import fsPromises from 'fs/promises'
import ChooseDevice from '@/components/PcBuilder/ChooseDevice';

const BuildPc = ({display}) => {
    console.log(display)
  return (
    <div>
      <p>Pc Build page</p>
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
    console.log(context.query.build)
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
    console.log(temp)
    return {
      props: {
        display: temp,
      },
    }
  }
