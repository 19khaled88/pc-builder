import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const StoragePage = () => {
  return (
    <div>
      <h1>This is storage page</h1>
    </div>
  );
}

export default StoragePage;

StoragePage.getLayout = function getLayout(page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}
