import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'

const services = () => {
  return (
    <div className='wrapper'>
        <CommonHeader title='My Services'/>
        <Collection 
          direction="vertical"
          itemType='service'
          items={dummyServices}
          hasButton={true}
          hasViewMore={true}
        />
    </div>
  )
}

export default services
