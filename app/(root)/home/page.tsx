"use client"

import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
import dummyServices from '@/constants/dummyServices'
import { useRouter } from 'next/router'

const home = () => {

    // const router = useRouter();
    // const selectedTitle  = router.query.title as string;

    return (
        <div className=''>
            <CommonHeader title= 'All' />
            <div className='flex-center pt-6'>
                <Collection
                    direction='vertical'
                    itemType='service'
                    items={dummyServices}
                    hasButton={true}
                />
            </div>
        </div>
    )
}

export default home