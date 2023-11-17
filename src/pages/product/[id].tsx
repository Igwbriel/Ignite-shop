import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return <h1>Produto: {JSON.stringify(query)}</h1>
}
