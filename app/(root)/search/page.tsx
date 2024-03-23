import { Filter } from '@/public/assets/icons/Filter'
import { SearchIcon } from '@/public/assets/icons/SearchIcon'
import React from 'react'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'
import FilterButton from '@/components/shared/FilterButton'


const page = () => {

  return (
    <>

      {/* Search & Filter */}
      <div className="flex w-full p-4">
        {/* Search icon inside the search bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 mr-8 rounded-full w-full">
          <SearchIcon className="text-gray-500 mr-4" />
          <input type="text" placeholder="Search title..." className="bg-transparent focus:outline-none" />
        </div>
        {/* Filter icon */}

        <FilterButton />
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