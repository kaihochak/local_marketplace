import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'

const services = () => {
  return (
    <div>
        <CommonHeader title='My Services'/>
        <Collection direction="vertical"/>
    </div>
  )
}

export default services
