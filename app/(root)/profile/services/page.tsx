import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'

const services = () => {
  return (
    <div className=''>
        {/* CommonHeader component is used to display the title of the page and back button */}
        <CommonHeader title='My Services'/>
        <div className='flex-center pt-6'>
          {/* Collection component to display a list services */}
          <Collection 
            direction="vertical"
            itemType='service'
            items={dummyServices}
            hasButton={true}
            hasViewMore={true}
          />
        </div>
    </div>
  )
}

export default services
