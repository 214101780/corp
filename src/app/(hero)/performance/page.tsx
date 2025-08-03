import Hero from '@/components/hero'
import React from 'react'


const imgInfo = {
  imgUrl: '/images/performance.jpg',
  altText: 'performance',
  content: 'performance modified content',
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl={imgInfo.imgUrl} altTxt={imgInfo.altText} content={imgInfo.content}/>
    </div>
  )
}