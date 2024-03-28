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
        <button onClick={goBack} className='hover:bg-accent-light/50 hover-scale p-2 rounded-full text-lg font-semibold items-center'>
            <ArrowLeft className='text-[30px]' />
        </button>
    )
}

export default BackButton