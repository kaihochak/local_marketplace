import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import dummmyServices from '@/constants/dummyServices'

const saved = () => {
  return (
    <div>
        <CommonHeader title='Saved Services'/>
        <div className='flex justify-center items-center'>
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
