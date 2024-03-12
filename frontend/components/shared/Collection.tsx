import React from 'react'
import Card from './Card'
import { services } from "@/constants/dummydata";

type CollectionProps = {
    selectedCategory: string;
    title: string;
    
};

const Collection = ({ selectedCategory, title }: { selectedCategory: string, title: string }) => {

    // API call to specific get data for this category

    return (
        <div className='flex flex-col gap-y-1 '>
            <h2 className={`font-serif font-semibold tracking-normal py-3 transition-all duration-300 
                    ${selectedCategory === title ? "text-4xl text-accent-dark" : " text-3xl"}`}>{title}</h2>
            <div className='flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide'>
                { services.map((service) => (<Card key={service._id} service={service} />))}
            </div>
        </div>
    )
}

export default Collection