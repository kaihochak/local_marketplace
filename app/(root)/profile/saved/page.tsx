import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import dummmyServices from '@/constants/dummyServices'

const saved = () => {
  return (
    <div>
        {/* CommonHeader component is used to display the title of the page and back button */}
        <CommonHeader title='Saved Services'/>
        <div className='flex-center pt-8'>
            {/* Collection component to display a list of saved services */}
            <Collection
              direction="vertical"
              itemType='service'
              items={dummmyServices}
            />
        </div>
    </div>
  )
}

export default saved
