import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
const reservations = () => {

  return (
    <div className=''>
        {/* CommonHeader component is used to display the title of the page and back button */}
        <CommonHeader title='My Reservations'/>
        <div className='flex-center pt-6'>
          {/* Collection component to display a list of reservations */}
          <Collection 
              direction='vertical' 
              itemType='reservation' 
              items={dummyReservations} 
              hasButton={true}
          />
        </div>
    </div>
  )
}

export default reservations
