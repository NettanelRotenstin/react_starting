import React from 'react'
interface Props{
    currPage:string
}
export default function Page({currPage}:Props) {
  return (
    <div className='page'>
      page {currPage}
    </div>
  )
}
