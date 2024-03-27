"use client"

import React, { useState, useRef, useEffect, RefObject } from 'react';
import Collection from "@/components/shared/Collection";
import CategoryGroup from "@/components/shared/CategoryFilter";
import { categories } from "@/constants";
import HomeHeader from '@/components/shared/HomeHeader';
import dummyServices from '@/constants/dummyServices';
import { ServiceItem } from '@/lib/database/models/service.model';
import { Filter } from '@/public/assets/icons/Filter';
import Search from '@/components/shared/Search';
import Link from 'next/link';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    setServices(dummyServices);
  });

  // Refs for each category
  type CollectionRefs = {
    [key: string]: RefObject<HTMLDivElement>;
  };

  // Create refs for each category
  const collectionRefs: CollectionRefs = categories.reduce((acc: CollectionRefs, category) => {
    acc[category] = useRef<HTMLDivElement>(null);
    return acc;
  }, {});

  // Scroll to the selected category
  useEffect(() => {
    if (selectedCategory && collectionRefs[selectedCategory]?.current) {
      collectionRefs[selectedCategory]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedCategory, collectionRefs]);


  return (
    <>
      <section className="flex flex-col sticky top-0 bg-white z-50 pb-2 border-b border-gray-200">
        <div className='wrapper'>
          <HomeHeader />
        </div>
        {/* Search */}
        <div className='wrapper pt-3 lg:pt-0 '>
          <div className='flex justify-between pb-4'>
            <Link href={"/search"} className='w-full mx-4'>
              <Search />
            </Link>
          </div>
          <CategoryGroup onCategorySelect={(category: string) => setSelectedCategory(category)} />
        </div>
      </section>

      {/* Collections */}
      <section className="wrapper pl-2 lg:pl-4 lg:pr-0 py-2 lg:py-0">
        <div className="flex flex-col gap-y-4">
          {categories.map((title) => (
            <div
              ref={collectionRefs[title]}
              key={title}
              className='scroll-mt-[280px] lg:scroll-mt-[320px]' // This is a temporary fix for the sticky header
            >
              <Collection
                selectedCategory={selectedCategory}
                title={title}
                direction="horizontal"
                itemType="service"
                items={services}
                nextPrevButton={true}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}