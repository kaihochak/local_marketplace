"use client"

import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import { ServiceItem } from '@/lib/database/models/service.model';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft';
import { ArrowRight } from '@/public/assets/icons/ArrowRight';

type CollectionProps = {
    title?: string;
    selectedCategory?: string; 
    direction?: 'horizontal' | 'vertical';
    itemType?: 'service' | 'reservation' | 'review';
    items?: ServiceItem[] | RatingReviewItem[] | ReservationItem[];
    hasButton?: boolean;
    limit?: number;
    hasViewMore?: boolean;
    link?: Url;
    itemsPerPage?: number;
};

const Collection = ({
    title,
    selectedCategory,
    direction,
    itemType,
    items,
    hasButton,
    limit,
    hasViewMore,
    link,
    itemsPerPage = 3,
}: CollectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollBy = (offset: number) => {        
        console.log(containerRef.current?.scrollLeft, offset);
        
        if (containerRef.current) { containerRef.current.scrollLeft += offset;}
    };

    // Card collection
    const CardCollection = () => {
        return (
            <div className="relative [&_#card-prev-next-button]:hover:opacity-50">
                {/* Cards */}
                <div
                    ref={containerRef}
                    className={`${direction === "vertical" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto" 
                                            : "flex gap-x-2 pr-10 overflow-x-auto scrollbar-hide"}`}
                >
                    {items?.map((item, index) => (
                            <Card
                                key={item._id}
                                itemType={itemType as 'service' | 'reservation' | 'review' | undefined}
                                item={item}
                                direction={direction}
                                hasButton={hasButton}
                            />
                    ))}
                </div>
                
                {/* Previous button */}
                <button 
                    id="card-prev-next-button"
                    onClick={() => scrollBy(-400)} // Adjust scroll amount as per your design
                    className="left-0"
                >
                    <ArrowLeft className='text-[22px]'/>
                </button>
                
                {/* Next button */}
                <button 
                    id="card-prev-next-button"
                    onClick={() => scrollBy(400)} // Adjust scroll amount as per your design
                    className="right-0"
                >
                    <ArrowRight className='text-[22px]'/>
                </button>
            </div>
        )
    }

    return (
        <div className='relative flex flex-col gap-y-1'>
            {/* Title */}
            <div className='flex justify-between items-center py-4'>
                <h2 className={`font-semibold tracking-normal transition-all duration-300 ease-in-out text-2xl
                    ${selectedCategory === title ? "text-accent" : " text-accent-light"}`}>
                    {title}
                </h2>
                {/* View more */}
                {hasViewMore && link &&
                    <Link href={link}><ArrowRight className='text-gray-800'/></Link>
                }
            </div>

            {/* Card collection */}
            <CardCollection/>
        </div>
    );
};

export default Collection;
