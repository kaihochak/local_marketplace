import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
import dummyServices from '@/constants/dummyServices'
const reservations = () => {

  return (
    <div className=''>
        <CommonHeader title='Home'/>
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

export default reservations