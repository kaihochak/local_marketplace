import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
// import { getEventsByUser } from '@/lib/actions/event.actions'
// import { getOrdersByUser } from '@/lib/actions/order.actions'
// import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  // const orders = await getOrdersByUser({ userId, page: ordersPage})

  // const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  // const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

  return (
    <>
      <section className='flex justify-end p-6'>
        <UserButton afterSignOutUrl="/" />
      </section>

      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex flex-col items-center justify-center sm:justify-between">
          {/* profile image */}
          <Image 
            src='/images/profile-placeholder.png'
            alt='profile image'
            width={150}
            height={150}
            className='rounded-full'
          />
          {/* name */}
          <h3 className='h3-bold text-center sm:text-left'>My Name</h3>
        </div>
      </section>

      <section className="wrapper my-8 flex gap-x-2 mx-auto">
        {/* Reserved */}
        <Link href="/profile/reserved">
          <h4 className="">Reserved</h4>
        </Link>

        {/* Saved */}
        <Link href="/profile/saved">
          <h4 className="">Saved</h4>
        </Link>
      </section>

      <section className="wrapper my-8">
        <Collection 
          selectedCategory=''
          title='My Posts'
        />
      </section>

      <section className="wrapper my-8">
        <Collection 
          selectedCategory=''
          title='My Reviews'
        />
      </section>
    </>
  )
}

export default ProfilePage