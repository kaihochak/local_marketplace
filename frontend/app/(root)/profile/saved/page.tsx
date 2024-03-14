import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/lib/dummyData'

const saved = () => {

  

  return (
    <div>
        <CommonHeader title='Saved Services'/>
        <Collection direction="vertical"/>
    </div>
  )
}

export default saved
