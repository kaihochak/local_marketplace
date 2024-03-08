import React from 'react'
import Card from './Card'

const Collection = ({ selectedCategory, title }: { selectedCategory: string, title: string }) => {
    return (
        <div className='flex flex-col gap-y-1 '>
            <h2 className={`font-serif font-semibold tracking-normal py-3 transition-all duration-300 
                    ${selectedCategory === title ? "text-4xl text-accent-dark" : " text-3xl"}`}>{title}</h2>
            <div className='flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide'>
                <Card />
                <Card />
                <Card />        
            </div>
        </div>
    )
}

export default Collection
