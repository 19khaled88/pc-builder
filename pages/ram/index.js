import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const RamPage = () => {
  return (
    <div>
      <h1>This is RAM page</h1>
    </div>
  );
}

export default RamPage;

RamPage.getLayout = function getLayout(page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}
