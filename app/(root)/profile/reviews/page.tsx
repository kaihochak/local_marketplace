import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import DummyUsers from '@/constants/dummyUsers'
import {dummmyRatingReviews} from '@/constants/dummyReviews'

const ProfileReviews = () => {

  const user = DummyUsers[0];
  const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

  return (
    <div>
        <CommonHeader title='My Reviews'/>
        <Collection 
          direction="vertical"
          itemType='review'
          items={reviews}
          direction='vertical'
        />
    </div>
  )
}

export default ProfileReviews
