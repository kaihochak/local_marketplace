"use client"

import React, { useState } from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Filter } from '@/public/assets/icons/Filter';
import Slider from '@mui/material/Slider';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { filterFormSchema } from '@/lib/validator';
import { styled } from '@mui/system';

const FilterButton = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof filterFormSchema>>({
    resolver: zodResolver(filterFormSchema)
  })

  const rate = [{ rating:4 }];

  // State for editable ratings
  const [rating, setRating] = useState(rate[0]?.rating);

  const handleRatingChange = (event: Event, newValue: number | number[]) => {
    setRating(newValue as number);
  };

  const distanceData = [{ distance: 20 }];

  // State for editable Distance
  const [distance, setDistance] = useState(distanceData[0]?.distance);

  const handleDistanceChange = (event: Event, newValue: number | number[]) => {
    setDistance(newValue as number);
  };


  // Marks for the rating slider
  const marks = [
    { value: 1, label: '1⭐' },
    { value: 2, label: '2⭐' },
    { value: 3, label: '3⭐' },
    { value: 4, label: '4⭐' },
    { value: 5, label: '5⭐' }
  ];

  const distanceMarks = [
    { value: 10, label: '10km' },
    { value: 20, label: '20km' },
    { value: 30, label: '30km' },
    { value: 40, label: '40km' },
    { value: 50, label: '50km' }
  ];

  const CustomSlider = styled(Slider)({
    color: 'black',
    '& .MuiSlider-track': {
      color: 'black',
    },
    '& .MuiSlider-rail': {
      color: 'black',
    },
    '& .MuiSlider-thumb': {
      color: 'black',
    },
  });

  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Home & Repair', 'Personal', 'Technical', 'Professional', 'Creative', 'Logistic', 'Collaboratory'];

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title=""
        transitionProps={{ transition: 'fade', duration: 200 }}
        //modal only shows up on bottom 1/2 of the screen using offset
        size={isMobile ? 'xl' : 'md'}
        centered
        overlayProps={{ opacity: 0.5 }}
      >
        <div className='h-[550px]'>
          <div>
            <div className="mx-2">
              <Form {...form}>
                <form className="flex flex-col gap-5">

                  {/* Rating Slider */}
                  <div>
                    <div className='flex justify-between'>
                      <h3 className="font-medium pb-3">Rating</h3>
                      {/* Display current distance */}
                      <p className='text-accent'>{rating}</p>
                    </div>
                    {/* Slider for editing rating */}
                    <div className="mx-2">

                      <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl className="h-72">
                              <Slider
                                aria-label="Custom marks"
                                defaultValue={rate[0]?.rating}
                                value={rating}
                                onChange={handleRatingChange}
                                step={1}
                                valueLabelDisplay="auto"
                                marks={marks}
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
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* category selector */}
                  <div>
                    <h3 className="font-medium pb-3">Category</h3>
                    <div className="flex flex-wrap gap-2"> {/* You can adjust the gap and flex properties as per your design needs */}
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={(event) => {
                            event.preventDefault(); // This will prevent the button from submitting the form
                            event.stopPropagation();
                            setSelectedCategory(category);
                          }}
                          className={`px-4 py-2 border border-primary rounded-md transition duration-300 ${selectedCategory === category
                            ? 'bg-primary text-secondary-light' // Active button style
                            : 'bg-white text-black hover:bg-gray-100' // Inactive button style
                            }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* distance slider */}
                  <div>
                    <div className='flex justify-between'>
                      <h3 className="font-medium pb-3">Distance</h3>
                      {/* Display current distance */}
                      <p className='text-accent'>{distance}</p>
                    </div>
                    {/* Slider for editing distance */}
                    <div className="mx-2">

                      <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl className="h-72">
                              <Slider
                                aria-label="Custom marks"
                                defaultValue={distanceData[0]?.distance}
                                value={distance}
                                onChange={handleDistanceChange}
                                step={10}
                                valueLabelDisplay="auto"
                                marks={distanceMarks}
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
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>


                  {/* Submit Button
                    <Button
                        type="submit"
                        size="lg"
                        disabled={form.formState.isSubmitting}
                        className="button col-span-2 w-full"
                    >
                        {form.formState.isSubmitting ? (
                            'Submitting...'
                        ) : `${type} `}</Button> */}
                </form>
              </Form>

              <div className="flex justify-center items-center mt-2 mb-5">
                <button className="px-4 py-4 border border-secondary rounded-md bg-secondary text-secondary-light w-full">
                  Show Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="bg-accent text-primary-foreground p-4 rounded-xl cursor-pointer">
        <Filter className="text-xl" onClick={open} />
      </div>
    </div>

  )
}

export default FilterButton