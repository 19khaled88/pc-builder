import RootLayout from '@/components/Layouts/RootLayout';
import path from 'path'
import fsPromises from 'fs/promises'
import PcBuilder from '@/components/PcBuilder/PcBuilder';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
const PcBuilderPage = ({display}) => {
  
  const router = useRouter()
  const {data,isLoading,isSuccess,isError} = useSelector((state)=>state.builder)

//  let isExist = false
//  if(Object.keys(data).length > 0){
//   data.map((element)=>{
//    display.all.map((newElement)=>{
//     if(newElement.id === element.id){
//         isExist = true
//      }
//    } )
//   })
//  }
 
  return (
    <div className='p-2 flex flex-col justify-center text-center'>
      <p className='text-2xl p-5'>Pc Builder page</p>
      <PcBuilder display={display} selectedCat={data}/>
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
