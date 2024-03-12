
import React from 'react'
import Collection from '@/components/shared/Collection'
import CommonHeader from '@/components/shared/CommonHeader'

const Reviews = () => {
    // Client-side back function

    return (
        <section>
            <CommonHeader title='Reviews' />
            <Collection
                direction='vertical'
            />
        </section>
    )
}

export default Reviews
