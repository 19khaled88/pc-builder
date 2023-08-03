import RootLayout from '@/components/Layouts/RootLayout'
import { useRouter } from 'next/router'


const FeatureProducts = () => {
    const router = useRouter()
  return <div>{router.query.featureId}</div>
}

export default FeatureProducts 


FeatureProducts.getLayout = function getLayout(page){
    return<RootLayout>{page}</RootLayout>
}


