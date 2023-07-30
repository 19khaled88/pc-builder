import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const PowerSupplyPage = () => {
  return (
    <div>
      <h1>Power supply page</h1>
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
