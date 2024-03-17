import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
const reservations = () => {

  return (
    <div>
        <CommonHeader title='My Reservations'/>
        <Collection 
            direction='vertical' 
            itemType='reservation' 
            items={[]} 
            hasButton={true}
        />
    </div>
  )
}

export default reservations
