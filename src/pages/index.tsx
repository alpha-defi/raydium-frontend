import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const { push } = useRouter()
    push('/swap')
  })
}
