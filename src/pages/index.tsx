import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function HomePage() {
  const { push } = useRouter()
  useEffect(() => {
    push('/swap');
  });
}
