"use client"

import { BookmarkEmpty } from "@/public/assets/icons/BookmarkEmpty";
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled';
import { useState } from "react";
import BackButton from "./BackButton";

const CommonHeader = ({ title, savedButton }: { title: string, savedButton?: boolean }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <section className='border-b border-gray-300'>
            <div className='big-wrapper flex-between py-4'>
                {/* Back Button */}
                <BackButton/>

                {/* Title */}
                <div className="flex-grow flex justify-center">
                    <h2 className='text-primary-foreground text-xl font-semibold'>{title}</h2> {/* Removed absolute positioning */}
                </div>
                {/* Bookmark */}
                {savedButton ?
                    <button onClick={() => setIsBookmarked(!isBookmarked)} className='text-primary-foreground text-lg font-semibold pr'>
                        { isBookmarked ?
                            <BookmarkFilled className="text-background-dark font-extrabold w-5 h-5 lg:w-10 lg:h-10" /> 
                            :<BookmarkEmpty className="text-background-dark font-extrabold w-5 h-5 lg:w-10 lg:h-10" />
                        }
                    </button>
                    : <div className="w-8"></div> /* This is a temporary fix for the sticky header */
                }
            </div>
        </section>

    );
};

export default CommonHeader;
