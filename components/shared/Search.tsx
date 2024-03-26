"use client"

import { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from '@/public/assets/icons/SearchIcon'
import { initialFilterSettings } from '@/constants';
import Link from 'next/link';
import FilterButton from './FilterButton';
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft'

const Search = ({ placeholder = 'Search services...', isHome }:
  { placeholder?: string, isHome: boolean }) => {

  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterSettings, setFilterSettings] = useState(initialFilterSettings);

  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      // for updating the query params
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, { scroll: false });
    }, 300)
    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router])

  return (
    <div className="flex px-4 lg:px-4 items-center w-full gap-x-2">
      {/* Back Button */}
      {!isHome &&
        <button onClick={goBack} className='text-black text-lg font-semibold'>
          <ArrowLeft className='text-[30px]' />
        </button>
      }

      {/* Search */}
      <Link
        href={"/search"}
        className="flex-grow">
        <div className="rounded-lg flex-center min-h-[54px] w-full overflow-hidden bg-background-light px-4 py-2">
          <SearchIcon className="w-5 h-5 text-grey-500" />
          <Input
            type="text"
            placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}
            className="p-regular-16 border-0 bg-background-light outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </Link>

      {/* Filter */}
      {!isHome &&
        <FilterButton filterSettings={filterSettings} setFilterSettings={setFilterSettings} />}
    </div>

  )
}

export default Search