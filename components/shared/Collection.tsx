import React from 'react'
import Card from './Card'
import { ServiceItem } from '@/lib/database/models/service.model';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';

type CollectionProps = {
    title?: string,
    selectedCategory?: string, 
    direction?: 'horizontal' | 'vertical',
    itemType?: 'service' | 'reservation' | 'review',
    items?: ServiceItem[] | RatingReviewItem[] | ReservationItem[],
    hasButton?: boolean,
    limit?: number,
};

const Collection = ({ 
    title, 
    selectedCategory, 
    direction,
    itemType,
    items,
    hasButton,
    limit,
}: CollectionProps ) => {


    // API call to specific get data for this category

    // store the items in a list and map through them

    return (
        <div className='flex flex-col gap-y-1 '>
            <h2 className={`font-serif font-semibold tracking-normal py-3 transition-all duration-300 
                    ${selectedCategory === title ? "text-4xl text-accent-dark" : " text-3xl"}`}>{title}</h2>
            <div className={`flex ${direction === "vertical" ? "flex-col gap-y-5 mx-auto" 
                                : "gap-x-5 pr-10 overflow-x-auto scrollbar-hide" }`}>
                { items?.map((item) => (
                    <Card 
                        key={item._id} 
                        itemType={itemType as 'service' | 'reservation' | 'review' | undefined}
                        item={item}
                        direction={direction}
                        hasButton={hasButton}
                    />
                ))}
            </div>
        </div>
    )
}

export default Collection