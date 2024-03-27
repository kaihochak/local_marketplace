"use client"

import React from 'react'
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft'

const BackButton = () => {

    const goBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    return (
        <div>
            <button onClick={goBack} className='text-black text-lg font-semibold'>
                <ArrowLeft className='text-[30px]' />
            </button>
        </div>
    )
}

export default BackButton