import React from 'react'
import Card from './Card'

const Collection = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-y-2 '>
            <h2>{title}</h2>
            <div className='flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide'>
                <Card />
                <Card />
                <Card />        
            </div>
        </div>
    )
}

export default Collection
