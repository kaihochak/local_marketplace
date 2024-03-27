"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import { BookmarkEmpty } from '@/public/assets/icons/BookmarkEmpty';
import { Clock } from '@/public/assets/icons/Clock';
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { ServiceItem } from '@/lib/database/models/service.model';
import Link from 'next/link';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import dummyUsers from '@/constants/dummyUsers';
import dummyServices from '@/constants/dummyServices';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled';

type CardProps = {
    direction?: 'horizontal' | 'vertical'
    itemType?: 'service' | 'reservation' | 'review'
    item?: ServiceItem | RatingReviewItem | ReservationItem
    hasButton?: boolean
    bookmarked?: boolean
};

const Card = ({
    direction,
    itemType,
    item,
    hasButton,
    bookmarked,
}: CardProps) => {

    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     if (item) setLoading(false);
    // }, [item]);



    let service = itemType === "service" ? item as ServiceItem : null;
    let reservation = itemType === "reservation" ? item as ReservationItem : null;
    let review = itemType === "review" ? item as RatingReviewItem : null;
    let bookmarkedItem = itemType === "service" ? service?.bookmarked : null;

    const ImageBanner = () => {
        // for reservation
        if (itemType === "reservation") {
            return (
                <div className="border border-gray-200 rounded-lg overflow-hidden h-[120px] sm:h-[120px] m:h-[130px] lg:h-[180px] relative">
                    {reservation?.status === "confirmed" ?
                        <div className="absolute top-1 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='text-xs'>{reservation?.date}</div>
                        </div> :
                        <div className="absolute top-1 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='text-xs'>{reservation?.status}</div>
                        </div>
                    }
                    <BookmarkEmpty className="absolute top-1 right-0 text-gray-400 mr-1 w-5 h-5" />
                    <Image priority className="w-full h-full object-cover"
                        width={5000} height={5000}
                        src={reservation?.service.image ?? ''} alt={reservation?.service.title ?? ''}
                    />
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div className="border border-gray-200 rounded-lg overflow-hidden 
                    h-[120px] sm:h-[120px] m:h-[130px] lg:h-[250px] relative">
                    {/* label */}
                    <div className="absolute top-1 lg:top-2 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 lg:px-3 rounded-xl">
                        <Clock className='text-gray-400' />
                        <div className='p-medium-14 lg:p-medium-18'>Avaliable Today</div>
                    </div>
                    {/* bookmark */}
                    {/* check if bookmarked is true or else empty*/}
                    {bookmarkedItem ?
                        <BookmarkFilled className="absolute top-1 right-0 text-background-dark font-extrabold mr-1 w-5 h-5 lg:w-10 lg:h-10" /> :
                        <BookmarkEmpty className="absolute top-1 right-0 text-background-dark font-extrabold mr-1 w-5 h-5 lg:w-10 lg:h-10" />
                    }
                    {service &&  (
                        <Image priority className="w-full h-full object-cover"
                            width={5000} height={5000}
                            src={service?.imageUrl ?? ''} alt={service?.title}
                        />
                    )}
                </div>
            )
        }
    }

    const CardInfo = () => {
        // for reservation
        if (itemType === "reservation") {
            return (
                <div className=''>
                    <div className='flex justify-between'>
                        {/* Titile */}
                        <p className="p-bold-14 lg:p-bold-20 tracking-wide">{reservation?.service?.title}</p>
                        <StarEmpty className='w-3 h-3' />
                    </div>
                    <div className='flex justify-start gap-x-1'>
                        <LocationPin />
                        <p className="text-xs text-gray-500">{reservation?.service.location}</p>
                    </div>
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div className='flex flex-col gap-y-1 lg:gap-y-2'>
                    {/* Service Titile */}
                    <div className='flex justify-between'>
                        <p className="p-bold-14 lg:p-bold-20 tracking-wide">{service?.title}</p>
                        <div className='flex flex-center text-xs text-gray-500 gap-x-1 mr-2'>
                            <p>(12)</p>
                            <p>3.2</p>
                            <StarEmpty className='w-3 h-3' />
                        </div>
                    </div>
                    {/* Provider */}
                    <div className="flex items-center gap-x-2 ml-1 ">
                        <div className='w-5 h-5 lg:w-7 lg:h-7 overflow-hidden'>
                            <Image priority className="w-full h-full rounded-full mr-2 object-cover"
                                src={service?.provider?.imageUrl ?? ''}
                                alt={service?.provider?.name ?? ''}
                                width={5000} height={5000}
                            />
                        </div>
                        <p className="p-medium-12 lg:p-medium-16">
                            {service?.provider?.firstName ?? ''} {service?.provider?.lastName ?? ''}
                        </p>
                    </div>
                    {/* description */}
                    <p className="p-medium-10 lg:p-medium-14 text-background-foreground/80">
                        {service?.description?.length ?? 0 > 45 ? service?.description?.slice(0, 45) + "..." : service?.description}
                    </p>
                </div>
            )
        }
        // for review
        else if (itemType === "review") {
            return (
                <div className='h-48'>
                    <div className='flex flex-col gap-y-2'>
                        {/* title */}
                        <p className="p-bold-14 lg:p-bold-20 tracking-wide">{review?.service?.title ?? "" }</p>
                        {/* user */}
                        <div className='flex '>
                            <Image priority className="w-5 h-5 rounded-full mr-2"
                                src={review?.service?.imageUrl ?? ''}
                                alt={review?.service?.title ?? ''}
                                width={5000} height={5000}
                            />
                            <p className="p-bold-14 lg:p-bold-20 tracking-wide">{dummyUsers[0].firstName} {dummyUsers[0].lastName}  </p>
                        </div>
                        {/* rating */}
                        <div className='flex text-xs text-gray-500 gap-x-1 mr-2'>
                            {review?.rating && Array.from({ length: review?.rating }, (_, index) => (
                                <StarEmpty key={index} className='w-3 h-3' />
                            ))}
                        </div>
                        {/* description */}
                        <p className="text-[10px] text-gray-500">{review?.review}</p>
                        {/* Response */}
                        {review?.providerResponse &&
                            <div className='flex flex-col gap-y-2'>
                                <p className="text-s font-semibold">Provider's response</p>
                                <div className='flex '>
                                    <Image priority className="w-5 h-5 rounded-full mr-2"
                                        src={review?.service?.imageUrl ?? ''}
                                        alt={review?.service?.title ?? ''}
                                        width={5000} height={5000}
                                    />
                                    <p className="p-bold-14 lg:p-bold-20 tracking-wide">{review?.service?.provider}</p>
                                </div>
                                <p className="text-[10px] text-gray-500">{review?.providerResponse.response}</p>
                            </div>
                        }

                    </div>
                </div>
            )
        }
    }

    const ButtonOption = () => {
        // for reservation
        if (itemType === 'reservation') {
            return (
                <div className=''>
                    {reservation?.status === "pending" || reservation?.status === "confirmed" ?
                        <div className='flex flex-center border-t-[1.5px] border-primary-dark text-primary-foreground'>
                            <button className="w-full text-xs md:text-s border-r-[1.5px] border-primary-dark py-2">Cancel</button>
                            <button className="w-full text-xs md:text-s py-2">Reshedule</button>
                        </div> :
                        <div className='flex flex-center'>
                            <button className="w-full text-xs md:text-s py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">
                                Review
                            </button>
                        </div>
                    }
                </div>
            )
        }

        // for service 
        else if (itemType === 'service') {
            return (
                <button className="text-xs md:text-s py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Edit</button>
            )
        }

        // for review 
        else if (itemType === 'review') {
            return (
                <button className="text-xs md:text-s py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Edit</button>
            )
        }
    }

    return (
        <div className='flex flex-col'>
            <div className={`flex flex-col bg-primary-light rounded-md border border-gray-200 
                                ${direction === "vertical" ? "w-[300px]" :
                    "w-[250px] sm:w-[280px] md:w-[300px] lg:w-[400px] lg:h-[270px]"}`}> {/* horizontal */}
                {/* Card content */}
                <Link href={`/${itemType + "s"}/${item?._id.toString()}`}
                    className={`h-[170px] lg:h-[240px] flex flex-col mx-3 my-2 lg:m-2 gap-y-1 
                                ${itemType === "review" ? "h-auto" : ""}`}>
                    <ImageBanner />
                    <div className='mx-2'>
                        <CardInfo />
                    </div>
                </Link>
                {/* optional button */}
                {hasButton && <ButtonOption />}
            </div>
        </div>
    )
}

export default Card