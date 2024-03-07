import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const Card = () => {

    // call api: return data and loading state
    const isLoading = false;

    return (
        <div className='flex flex-col gap-y-2'>
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
                    {/* implement */}
                </div>
            }
        </div>
    )
}

export default Card