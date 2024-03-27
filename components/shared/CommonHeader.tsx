"use client"

import { ArrowLeft } from "@/public/assets/icons/ArrowLeft";
import { BookmarkEmpty } from "@/public/assets/icons/BookmarkEmpty";
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled';
import { useState } from "react";

const CommonHeader = ({ title, savedButton }: { title: string, savedButton?: boolean }) => {
    const goBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <section className='top-0 z-50'>
            <div className='flex justify-between items-center py-6'>
                {/* Back Button */}
                <button onClick={goBack} className='text-black text-lg font-semibold'>
                    <ArrowLeft className='text-[30px]' />
                </button>
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
