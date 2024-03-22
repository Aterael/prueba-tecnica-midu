import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
