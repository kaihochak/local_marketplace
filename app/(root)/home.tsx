"use client"

import React, { useState, useRef, useEffect, RefObject } from 'react';
import Collection from "@/components/shared/Collection";
import CategoryGroup from "@/components/shared/CategoryFilter";
import { categories } from "@/constants";
import HomeHeader from '@/components/shared/HomeHeader';
import dummyServices from '@/constants/dummyServices';
import { ServiceItem } from '@/lib/database/models/service.model';
import Search from '@/components/shared/Search';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [opened, { open, close }] = useDisclosure(true);

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
      {/* <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="lg"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <div className='flex flex-col gap-y-4 p-4'>
          <div className='flex-center'>
            <div className='h3-bold'>Thank you so much for visiting!</div>
          </div>
          <div className='p2-regular'>
            I am currently in the process of building this site but feel free to browse around and let me know if you have any feedback or suggestions! 🚀
          </div>
          <Button onClick={close} className='mx-auto p-10'>
            <div className='h4-bold'>Browse around</div>
          </Button>
        </div>
      </Modal> */}

      <section className="flex flex-col sticky top-0 bg-white z-50 md:pb-2 border-b border-gray-200">
        <div className='wrapper'>
          <HomeHeader />
        </div>
        {/* Search */}
        <div className='wrapper pt-4 lg:pt-0 '>
          <div className='flex justify-between md:pb-2'>
            <Link href={"/search"} className='w-full mx-4 '>
              <Search disabled={true} />
            </Link>
          </div>
          <CategoryGroup onCategorySelect={(category: string) => setSelectedCategory(category)} />
        </div>
      </section>

      {/* Collections */}
      <section className="wrapper pt-4 pb-2 lg:pr-0 lg:pb-0">
        <div className="flex flex-col gap-y-0">
          {categories.map((title) => (
            <div
              ref={collectionRefs[title]}
              key={title}
              className='scroll-mt-[280px] md:scroll-mt-[320px] lg:scroll-mt-[320px]' // This is a temporary fix for the sticky header
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



