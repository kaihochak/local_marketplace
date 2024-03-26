"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from '@/public/assets/icons/SearchIcon'
import { Filter } from '@/public/assets/icons/Filter';
import Link from 'next/link';
import FilterButton from './FilterButton';

const Search = ({ placeholder = 'Search services...', isHome }:
  { placeholder?: string, isHome: boolean }) => {

  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

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
      {/* Search */}
      <Link
        href={"/search"}
        className="flex-grow">
          <div className="rounded-md flex-center min-h-[54px] w-full overflow-hidden bg-background-light px-4 py-2">
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
      {!isHome && <FilterButton />}
    </div>

  )
}

export default Search