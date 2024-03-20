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
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollBy = (offset: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += offset;
        }
    };

    const [showButtons, setShowButtons] = useState(false);
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    return (
        <div className='relative flex flex-col gap-y-1'>
            {/* Title */}
            <div className='flex items-end justify-start gap-x-2'>
                <h2 className={`font-semibold tracking-normal transition-all duration-300 
                    ${selectedCategory === title ? "text-4xl text-accent-dark" : " text-3xl"}`}>
                    {title}
                </h2>
                {/* View more */}
                {hasViewMore && link &&
                    <Link href={link}><h3>View More</h3></Link>
                }
            </div>

            
            <div>
                {/* Cards */}
                <div
                    ref={containerRef}
                    className={`${direction === "vertical" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto" : "flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide"}`}
                    style={{ position: 'relative' }} // Position the container relative to place the buttons absolutely inside it
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
                    onMouseEnter={() => setShowPreviousButton(true)} // Show previous button on hover
                    onMouseLeave={() => setShowPreviousButton(false)} // Hide previous button on hover out
                    onClick={() => scrollBy(-200)} // Adjust scroll amount as per your design
                    className={`absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-2 rounded-md bg-black/50 h-full text-white transition-opacity duration-300 ${showButtons ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
                >
                    <ArrowLeft />
                </button>
                
                {/* Next button */}
                <button 
                    onMouseEnter={() => setShowNextButton(true)} // Show next button on hover
                    onMouseLeave={() => setShowNextButton(false)} // Hide next button on hover out
                    onClick={() => scrollBy(200)} // Adjust scroll amount as per your design
                    className={`absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 rounded-md bg-black/50 h-full text-white transition-opacity duration-300 ${showButtons ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Collection;
