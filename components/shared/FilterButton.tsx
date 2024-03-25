"use client"

import React, { useState } from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Filter } from '@/public/assets/icons/Filter';
import Slider from '@mui/material/Slider';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import dummmyRatingReviews from "@/constants/dummyReviews";
import dummyUsers from "@/constants/dummyUsers";
import { IRatingReview } from '@/lib/database/models/ratingReview.model';
import { reviewDefaultValues } from '@/constants';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { reviewFormSchema } from '@/lib/validator';
import { Button } from '../ui/button';
import { styled } from '@mui/system';

type ReviewFormProps = {
  userId: string
  type: "Create" | "Edit"
  review?: IRatingReview,
  reviewId?: string
}

const FilterButton = ({ userId, type, review, reviewId }: ReviewFormProps) => {

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  const initialValues = review && type === 'Edit'
      ? { ...review }
      : reviewDefaultValues;

  const router = useRouter();

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof reviewFormSchema>>({
      resolver: zodResolver(reviewFormSchema),
      defaultValues: {
          ...initialValues,
      }
  })

  // submit form
  async function onSubmit(values: z.infer<typeof reviewFormSchema>) {

      if (type === 'Create') {
          // try {
          //   const newService = await createService({
          //     service: { ...values, imageUrl: uploadedImageUrl },
          //     userId,
          //     path: '/profile'
          //   })

          //   if(newService) {
          //     form.reset();
          //     router.push(`/services/${newService._id}`)
          //   }
          console.log('Create service');

          // } catch (error) {
          //   console.log(error);
          // }
      }

      if (type === 'Edit') {
          if (!reviewId) {
              router.back()
              return;
          }

          try {
              console.log('Edit review');

              // const editedReview = await editReview({
              //   userId,
              //   review: { ...values, imageUrl: uploadedImageUrl, _id: reviewId },
              //   path: `/reviews/${reviewId}`
              // })

              // if(editedReview) {
              //   form.reset();
              //   router.push(`/services/${editedReview._id}`)
              // }
          } catch (error) {
              console.log(error);
          }
      }
  }

  const user = dummyUsers[0];
  const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

  // State for editable ratings
  const [rating, setRating] = useState(reviews[0]?.rating);

  const handleRatingChange = (event: Event, newValue: number | number[]) => {
      setRating(newValue as number);
  };

  const [reviewText, setReviewText] = useState(reviews[0]?.review);

  // Marks for the rating slider
  const marks = [
      { value: 1, label: '1⭐' },
      { value: 2, label: '2⭐' },
      { value: 3, label: '3⭐' },
      { value: 4, label: '4⭐' },
      { value: 5, label: '5⭐' }
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

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        transitionProps={{ transition: 'fade', duration: 200 }}
        //modal only shows up on bottom 1/2 of the screen using offset
        
        size={isMobile ? 'xl' : 'md'}
        className=''
        centered
        overlayProps={{ opacity: 0.5 }}
      >
        <div className='h-[400px] '>
          {/* Rating Slider */}
          <div>
              <div className="mx-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Rating Slider */}
                    <div>
                        <h3 className="font-medium pb-3">Rating</h3>
                        {/* Display current rating */}
                        <p>{rating}</p>
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
                                              defaultValue={reviews[0]?.rating}
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
                <button className="px-4 py-4 border border-black rounded-md bg-black text-white w-full">
                    Show Results
                </button>
            </div>
              </div>
          </div>
        </div>
      </Modal>
      <div className="bg-primary-foreground p-4 rounded-xl">
        <Filter className="text-white text-xl" onClick={open} />
      </div> 
    </div>

  )
}

export default FilterButton