import Hero from '@/components/hero'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Scale',
  description: 'Scale description',
  icons: '/favicon-gitee.com-64.ico'
}

const imgInfo = {
  imgUrl: '/images/scale.jpg',
  altText: 'scale',
  content: 'scale',
}

export default function Page() {
  return (
    <Hero imgUrl={imgInfo.imgUrl} altTxt={imgInfo.altText} content={imgInfo.content}/>
  )
}