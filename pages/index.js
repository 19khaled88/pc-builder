import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-row m-auto'>
      <h1>Home page</h1>
    </div>
  )
}
