import Hero from '@/components/hero'
import React from 'react'


const imgInfo = {
  imgUrl: '/images/performance.jpg',
  altText: 'performance',
  content: 'performance',
}

export default function Page() {
  return (
    <Hero imgUrl={imgInfo.imgUrl} altTxt={imgInfo.altText} content={imgInfo.content}/>
  )
}