import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const MonitorPage = () => {
  return (
    <div>
      <h1>This is monitor page</h1>
    </div>
  );
}

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}
