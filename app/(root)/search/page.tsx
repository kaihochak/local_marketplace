import { Filter } from '@/public/assets/icons/Filter'
import { SearchIcon } from '@/public/assets/icons/SearchIcon'
import React from 'react'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'
import FilterButton from '@/components/shared/FilterButton'
import Search from '@/components/shared/Search'

const page = () => {


  return (
    <>
      {/* Search & Filter */}
      <div className="flex w-full p-4">
        <Search isHome={false} />
      </div>

      {/* print result collection */}
      <div className='flex-center'>
        <Collection
          direction="vertical"
          itemType='service'
          items={dummyServices}
          hasViewMore={true}
        />
      </div>



    </>
  )
}

export default page