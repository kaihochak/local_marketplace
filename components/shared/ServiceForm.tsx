"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { serviceFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { serviceDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import { useUploadThing } from '@/lib/uploadthing'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useRouter } from "next/navigation"
// import { createService, updateService } from "@/lib/actions/service.actions"
import { IService, ServiceItem } from "@/lib/database/models/service.model"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Card from "./Card"
import Link from "next/link"
import Confetti from 'react-confetti';

type ServiceFormProps = {
  userId: string
  type: "Create" | "Update"
  service?: IService,
  serviceId?: string
}

const ServiceForm = ({ userId, type, service, serviceId }: ServiceFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues = service && type === 'Update'
    ? {
      ...service,
      startDateTime: new Date(service.startDateTime),
      endDateTime: new Date(service.endDateTime)
    }
    : serviceDefaultValues;
  const router = useRouter();

  const { startUpload } = useUploadThing('imageUploader')

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      ...initialValues,
      categoryId: initialValues.categoryId.toString(),
      price: initialValues.price.toString() // Convert price to string
    }
  })

  // submit form
  async function onSubmit(values: z.infer<typeof serviceFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)

      if (!uploadedImages) {
        return
      }

      uploadedImageUrl = uploadedImages[0].url
    }

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

    if (type === 'Update') {
      if (!serviceId) {
        router.back()
        return;
      }

      try {
        console.log('Update service');

        // const updatedService = await updateService({
        //   userId,
        //   service: { ...values, imageUrl: uploadedImageUrl, _id: serviceId },
        //   path: `/services/${serviceId}`
        // })

        // if(updatedService) {
        //   form.reset();
        //   router.push(`/services/${updatedService._id}`)
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  //newly created service
  const newlyCreatedService: ServiceItem = {
    _id: '1',
    title: 'New Service',
    description: 'This is a new service',
    location: 'New York, USA',
    image: ['https://picsum.photos/seed/picsum/200/300'], // Ensure 'image' is an array of strings
    averageRating: 0, // Set initial average rating
    totalReviews: 0, // Set initial total reviews
    serviceProvider: [
      {
        userId: '1',
        name: 'Provider Name',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300' // Assuming 'imageUrl' is provided
      }
    ],
    servicesOffered: {}, // Initialize servicesOffered as an empty object
    ratingReviewIDs: [] // Initialize ratingReviewIDs as an empty array
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        {/* Service Image */}
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className="flex flex-col gap-5 md:flex-row">

          {/* Service Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Service title" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Category */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {/* Service Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea placeholder="Description" {...field} className="textarea rounded-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {/* Service Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                    />
                    <Input placeholder="Service location or Online" {...field} className="input-field" />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {/* Service Date and Time */}
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">Start Date:</p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service End Date and Time */}
          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">End Date:</p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Service Price */}
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="dollar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <Input type="number" placeholder="Price" {...field} className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Service</label>
                              <Checkbox
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                            </div>

                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Url */}
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/link.svg"
                      alt="link"
                      width={24}
                      height={24}
                    />

                    <Input placeholder="Url" {...field} className="input-field" />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ) : `${type} `}</Button>

        <Modal
          opened={opened}
          onClose={close}
          title=""
          fullScreen={isMobile}
          transitionProps={{ transition: 'fade', duration: 200 }}
        >

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mt-5 text-left">Service Created Successfully!</h1>

            <div className="my-20">
              {/* Display the card of the new service */}
              <Card
                direction="vertical"
                itemType="service"
                item={newlyCreatedService}
                hasButton={false}
              />
            </div>

            {/* Find the service under profile > services */}
            <h3 className="text-3xl font-semibold text-center mt-5">
              Find the service under <br />
              <Link href="/profile/services" className="text-accent-light underline">
                profile {'>'} services
              </Link>
            </h3>
          </div>

          {/* show confetti */}
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            recycle={false}
            initialVelocityY={10}
            initialVelocityX={10}
            colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
          /> 

        </Modal>

        <Button onClick={open}>Open Modal</Button>
      </form>
    </Form>
  )
}

export default ServiceForm