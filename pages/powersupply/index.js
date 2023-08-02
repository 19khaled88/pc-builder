import RootLayout from '@/components/Layouts/RootLayout'
import PowerSupply from '@/components/PowerSupply/PowerSupply'
import path from 'path'
import fsPromises from 'fs/promises'

const PowerSupplyPage = ({display}) => {
  return (
    <div>
      <h1>Power supply page</h1>
      <PowerSupply display={display}/>
    </div>
  )
}

export default PowerSupplyPage

PowerSupplyPage.getLayout = function getLayout(page){
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
