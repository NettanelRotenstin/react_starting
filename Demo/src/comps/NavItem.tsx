import React from 'react'
interface Props {
    title: string
    setCoor: (x: string) => void
}
export default function NavItem({ title,setCoor }: Props) {
    return (
        <div className='nav-item'>
            <button onClick={()=>setCoor(title)}>{title}</button>
        </div>
    )
}
