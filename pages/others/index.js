import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Otherpage = () => {
  return (
    <div>
      <h1>Others page</h1>
    </div>
  );
}

export default Otherpage;

Otherpage.getLayout = function getLayout(page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}
