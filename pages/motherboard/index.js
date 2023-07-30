import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const MotherboardPage = () => {
  return (
    <div>
      <h1>Motherboard page</h1>
    </div>
  )
}

export default MotherboardPage

MotherboardPage.getLayout = function getLayout(page){
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}