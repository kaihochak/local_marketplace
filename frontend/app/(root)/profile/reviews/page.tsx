import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'

const ProfileReviews = () => {
  return (
    <div>
        <CommonHeader title='My Reviews'/>
        <Collection direction="vertical"/>
    </div>
  )
}

export default ProfileReviews
