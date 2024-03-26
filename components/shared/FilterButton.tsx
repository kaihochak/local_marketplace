"use client"

import React, { useState } from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Filter } from '@/public/assets/icons/Filter';
import Slider from '@mui/material/Slider';
import { ratings, distances, filterCategories } from '@/constants';

type FilterSettingsProps = {
  rating: number,
  category: string,
  distance: number
}

const FilterButton = ({
  filterSettings: parentFilterSettings, 
  setFilterSettings: parentSetParentFilterSettings
}: {filterSettings: FilterSettingsProps, 
    setFilterSettings: (filterSettings: FilterSettingsProps) => void
}) => {

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');
  const [filters, setFilters] = useState(parentFilterSettings);

  const handleRatingChange = (event: Event, newValue: number | number[]) => {
    setFilters({ ...filters, rating: newValue as number });
  };

  const handleDistanceChange = (event: Event, newValue: number | number[]) => {
    setFilters({ ...filters, distance: newValue as number })
  };

  const handleCategoryChange = (category: string) => {
    setFilters({ ...filters, category });
  };

  const handleApplyFilters = () => {
    close();
    parentSetParentFilterSettings(filters);
  }

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title=""
        transitionProps={{ transition: 'fade', duration: 300 }}
        //modal only shows up on bottom 1/2 of the screen using offset
        size={isMobile ? 'xl' : 'md'}
        centered
        overlayProps={{ opacity: 0.5 }}
      >
        <div className='flex-between flex-col h-[550px] px-6'>
          {/* Form */}
          <form className="flex flex-col gap-5">
            {/* Rating Slider */}
            <div>
              <h3 className="font-medium pb-3">Rating</h3>
              {/* Slider for editing rating */}
              <div className="mx-2">
                <Slider
                  aria-label="Custom marks"
                  defaultValue={filters.rating}
                  value={filters.rating}
                  onChange={handleRatingChange}
                  step={1}
                  valueLabelDisplay="auto"
                  marks={ratings}
                  min={1}
                  max={5}
                  sx={{
                    color: 'black', // Set the color to black
                    '& .MuiSlider-track': {
                      color: 'black', // Set the track color to black
                    },
                    '& .MuiSlider-rail': {
                      color: 'black', // Set the rail color to black
                    },
                    '& .MuiSlider-thumb': {
                      color: 'black', // Set the thumb color to black
                    },
                  }}
                />
              </div>
            </div>

            {/* category selector */}
            <div>
              <h3 className="font-medium pb-3">Category</h3>
              <div className="flex flex-wrap gap-2"> {/* You can adjust the gap and flex properties as per your design needs */}
                {filterCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={(event) => {
                      event.preventDefault(); // This will prevent the button from submitting the form
                      event.stopPropagation();
                      handleCategoryChange(category);
                    }}
                    className={`px-4 py-2 border border-primary rounded-md transition duration-300 ${filters.category === category
                      ? 'bg-primary text-primary-foreground' // Active button style
                      : ' hover:bg-background-light' // Inactive button style
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* distance slider */}
            <div>
              <h3 className="font-medium pb-3">Distance</h3>
              {/* Slider for editing distance */}
              <div className="mx-2">
                <Slider
                  aria-label="Custom marks"
                  defaultValue={filters.distance}
                  value={filters.distance}
                  onChange={handleDistanceChange}
                  step={10}
                  valueLabelDisplay="auto"
                  marks={distances}
                  min={10}
                  max={50}
                  sx={{
                    color: 'black', // Set the color to black
                    '& .MuiSlider-track': {
                      color: 'black', // Set the track color to black
                    },
                    '& .MuiSlider-rail': {
                      color: 'black', // Set the rail color to black
                    },
                    '& .MuiSlider-thumb': {
                      color: 'black', // Set the thumb color to black
                    },
                  }}
                />
              </div>
            </div>

          </form>
          {/* Button */}
          <div className="flex-center mt-2 mb-5 w-full">
            <button 
              onClick={handleApplyFilters}
              className="px-4 py-4 rounded-lg bg-secondary text-secondary-foreground w-full"
            >
              Show Results
            </button>
          </div>
        </div>
      </Modal>

      {/* button to open the model */}
      <button className="border-2 border-grey-300 hover:bg-background-light text-primary-foreground p-4 rounded-xl cursor-pointer">
        <Filter className="text-xl" onClick={open} />
      </button>
    </div>
  )
}

export default FilterButton