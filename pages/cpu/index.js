import RootLayout from '@/components/Layouts/RootLayout'
import Processor from '@/components/Processor/Processor'

const CpuPage = ({ allCpus }) => {
  const { cpu } = allCpus
  return (
    <div>
      <h1 className="text-center text-lg font-bold pt-5">
        All the available processors
      </h1>
      <Processor cpu={cpu} />
    </div>
  )
}

export default CpuPage

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:3004/db')
    const data = await res.json()
    return {
      props: {
        allCpus: data,
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null, // Or handle the error in a way that makes sense for your app
      },
    };
  
  }
}
