import RootLayout from '@/components/Layouts/RootLayout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
// import { store } from './redux/store'
import { store } from '@/components/redux/sotre'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}
