"use client"
import React, { useState, useRef, useEffect, RefObject } from 'react';
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import FilterButton from "@/components/shared/FilterButton";
import CategoryGroup from "@/components/shared/CategoryFilter";
import { categories } from "@/constants";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");

  // Refs for each category
  type CollectionRefs = {
    [key: string]: RefObject<HTMLDivElement>;
  };

  // Create refs for each category
  const collectionRefs: CollectionRefs = categories.reduce((acc: CollectionRefs, category) => {
    acc[category] = useRef<HTMLDivElement>(null);
    return acc;
  }, {});


  useEffect(() => {
    if (selectedCategory && collectionRefs[selectedCategory]?.current) {

      console.log(collectionRefs[selectedCategory]?.current);
      

      collectionRefs[selectedCategory]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedCategory, collectionRefs]);


  return (
    <>
      <section className="flex flex-col px-6 pt-6 sticky top-0 bg-secondary z-50 ">
        <div className='flex justify-between pb-4'>
          <Search />
          <FilterButton />
        </div>
        <CategoryGroup onCategorySelect={(category: string) => setSelectedCategory(category)} />
      </section>

      {/* Collections */}
      <section className="pl-6 py-4">
        <div className="flex flex-col gap-y-4">
          {categories.map((title) => (
            <div ref={collectionRefs[title]} key={title} className='scroll-mt-[200px]'>
              <Collection selectedCategory={selectedCategory} title={title} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}