import Hero from '@/components/hero'
import React from 'react'


const imgInfo = {
  imgUrl: '/images/reliablility.jpg',
  altText: 'reliablility',
  content: 'reliablility',
}

export default function Page() {
  return (
    <Hero imgUrl={imgInfo.imgUrl} altTxt={imgInfo.altText} content={imgInfo.content}/>
  )
}