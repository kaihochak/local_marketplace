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
    nextPrevButton?: boolean;
    bookmarked?: boolean;
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
    itemsPerPage,
    nextPrevButton,
    bookmarked
}: CollectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollBy = (offset: number) => {
        console.log(containerRef.current?.scrollLeft, offset);

        if (containerRef.current) { containerRef.current.scrollLeft += offset; }
    };

    // Card collection
    const CardCollection = () => {
        return (
            <div className="relative [&_#card-prev-next-button]:hover:opacity-50">
                {/* Cards */}
                <div
                    ref={containerRef}
                    className={`${direction === "vertical" ?
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto"
                        : "flex gap-x-2 md:gap-x-4 pr-10 overflow-x-auto scrollbar-hide"}`}
                >
                    {items?.map((item, index) => (
                        <div key={index} className={`${direction === "vertical" ? "" : "py-6"}`}>
                            <Card
                                key={item._id}
                                itemType={itemType as 'service' | 'reservation' | 'review' | undefined}
                                item={item}
                                direction={direction}
                                hasButton={hasButton}
                            />
                        </div>
                    ))}
                </div>

                {/* Next Prev button */}
                {nextPrevButton && <button
                    id="card-prev-next-button"
                    onClick={() => scrollBy(-400)} // Adjust scroll amount as per your design
                    className="left-0"
                >
                    <ArrowLeft className='text-[22px]' />
                </button>}
                {nextPrevButton && <button
                    id="card-prev-next-button"
                    onClick={() => scrollBy(400)} // Adjust scroll amount as per your design
                    className="right-0"
                >
                    <ArrowRight className='text-[22px]' />
                </button>}
            </div>
        )
    }

    return (
        <div className='relative flex flex-col gap-y-1'>
            {/* Title */}
            <div className='flex justify-between items-center pt-4'>
                <h2 className='h4-medium'>
                    {title}
                </h2>
                {/* View more */}
                {hasViewMore && link &&
                    <Link href={link}>
                        <ArrowRight className='text-[22px] text-primary-foreground/60 mr-4' />
                    </Link>
                }
            </div>

            {/* Card collection */}
            <CardCollection />
        </div>
    );
};

export default Collection;
