import React from 'react'
import NavItem from './navItem'
interface Props{
    setCurr:(x:string)=>void
}
export default function Nav({setCurr}:Props) {
  return (
    <div className='nav'>
      <NavItem title="transfer money" setCoor={setCurr} />
      <NavItem title="credit" setCoor={setCurr} />
      <NavItem title="home" setCoor={setCurr}/>
    </div>
  )
}
