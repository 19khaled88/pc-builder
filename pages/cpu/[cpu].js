import { useRouter } from 'next/router'

const Cpu = () => {
  const router = useRouter()
  return <div>{router.query.cpu}</div>
}

export default Cpu
