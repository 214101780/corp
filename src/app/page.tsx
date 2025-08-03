import Header from '@/components/header'
import Hero from '@/components/hero'
import React from 'react'

const imgInfo = {
  imgUrl: '/images/home.jpg',
  altText: 'home image',
  content: 'Professinal Cloud Hosting',
}

export default function Page() {
  return (
    <div>
      <Header/>
      <Hero imgUrl={imgInfo.imgUrl} altTxt={imgInfo.altText} content={imgInfo.content}/>
    </div>
  )
}
