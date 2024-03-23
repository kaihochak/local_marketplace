"use client"

import React from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Filter } from '@/public/assets/icons/Filter';

const FilterButton = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        transitionProps={{ transition: 'fade', duration: 200 }}
        //modal only shows up on bottom 1/2 of the screen using offset
        xOffset={0}
        yOffset={350}
      >
        The Modal will be full screen only on mobile
      </Modal>
      <div className="bg-primary-foreground p-4 rounded-xl">
        <Filter className="text-white text-xl" onClick={open} />
      </div> 
    </div>

  )
}

export default FilterButton