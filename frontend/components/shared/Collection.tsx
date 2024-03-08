import React from 'react'
import Card from './Card'

const Collection = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-y-1 '>
            <h2 className='font-serif font-bold text-xl tracking-tighter'>{title}</h2>
            <div className='flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide'>
                <Card />
                <Card />
                <Card />        
            </div>
        </div>
    )
}

export default Collection
