import React from 'react'
import { StarFilled } from '@/public/assets/icons/StarFilled';
import Image from 'next/image';
import Link from 'next/link';

const ServiceReviews = ({ service }: { service: any }) => {

    return (
        <section className="wrapper my-8 flex flex-col gap-2 md:gap-12">
            <h2 className="h2-bold">Reviews</h2>
            {Object.keys(service.reviews).map((reviewKey, index) => {
                const review = service.reviews[reviewKey as keyof typeof service.reviews];
                const rating = parseFloat(review.rating);

                return (
                    <div key={index} className="p-4">
                        <div className='flex'>
                            <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center">
                                <Image src={review.user.profileURL} alt="Profile" width={28} height={28} className="rounded-full" />
                            </div>
                            <h3 className="text-lg font-medium">{review.user.firstName} {review.user.lastName}</h3>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            {Array.from({ length: rating }, (_, i) => (
                                <StarFilled key={i} className="w-5 h-5 text-yellow-500" />
                            ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                );
            })}

            {/* Button to All Reviews */}

            <Link href={`/services/${service._id}/reviews`} className="text-primary-foreground/80 flex justify-end p-medium-16 whitespace-nowrap">
                See All Reviews ->
            </Link>
        </section>

    )
}

export default ServiceReviews