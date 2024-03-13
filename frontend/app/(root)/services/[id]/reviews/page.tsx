
import React from 'react'
import Collection from '@/components/shared/Collection'
import CommonHeader from '@/components/shared/CommonHeader'

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Felix Catton',
            date: '2021-09-01',
            rating: 5,
            review: `
                I had a great experience with this service. I would recommend it to anyone.
            `,
        },
        {
            id: 2,
            name: 'Felix Catton',
            date: '2021-09-01',
            rating: 5,
            review: `
                I had a great experience with this service. I would recommend it to anyone.
            `,
        },
        {
            id: 3,
            name: 'Felix Catton',
            date: '2021-09-01',
            rating: 5,
            review: `
                I had a great experience with this service. I would recommend it to anyone.
            `,
        },
        {
            id: 4,
            name: 'Felix Catton',
            date: '2021-09-01',
            rating: 5,
            review: `
                I had a great experience with this service. I would recommend it to anyone.
            `,
        },
    ]

    return (
        <section>
            <CommonHeader title='Reviews' />
        </section>
    )
}

export default Reviews
