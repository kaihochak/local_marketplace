import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { CiBookmark } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BookmarkEmpty } from '@/public/assets/icons/BookmarkEmpty';
import { Clock } from '@/public/assets/icons/Clock';
import { StarEmpty } from '@/public/assets/icons/StarEmpty';

const Card = () => {

    const description = "I like to work with automobiles, and there are other things that I am";
    // call api: return data and loading state
    const isLoading = false;

    return (
        <div className='flex flex-col gap-y-2 '>
            { isLoading ?
                // Skeleton 
                <div>
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div> :
                // Card content
                <div>
                    {/* Card content */}
                    <div className='bg-primary border border-gray-200 h-[170px] w-[250px] rounded-xl '>
                        <div className='flex flex-col mx-3 my-2 gap-y-1'>
                            <div className="border border-gray-200 rounded-xl overflow-hidden h-[90px] relative">
                                <BookmarkEmpty className="absolute top-1 right-0 text-gray-400 mr-1 w-5 h-5" />
                                <div className='absolute top-1 left-1 flex items-center'>  
                                <p className="flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                                    <Clock className='text-gray-400'/> <div className='text-xs'>Available Tomorrow</div>
                                </p>
                                </div>
                                <img className="mx-auto" />
                            </div>
                            <div className="">
                                <div className='flex justify-between'>
                                    <p className="text-m font-semibold">Auto Mechanic</p>
                                    <div className='flex items-center'>
                                        <p className="text-xs text-gray-300">(12)</p>
                                        <p className="text-xs text-gray-500 mr-2">3.2</p>
                                        <StarEmpty className='w-3 h-3'/>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-5 h-5 rounded-full mr-2"/>
                                    <p className="text-xs text-gray-500">Enya Umanzor</p>
                                </div>
                                <p className="text-[10px] text-gray-500">{description?.length > 45 ? description?.slice(0, 45)+"..." : description}</p>
                            </div>
                        </div>
                    </div>

                    {/* implement */}
                </div>
            }
        </div>
    )
}

export default Card