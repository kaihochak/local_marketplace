"use client"

import react, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/createServiceTable"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUploader } from "../../../../components/shared/FileUploader"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serviceFormSchema } from "@/lib/validator"
import { useUploadThing } from '@/lib/uploadthing'
import { serviceDefaultValues } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { IService } from "@/lib/database/models/service.model"
import { createService } from "@/lib/actions/service.actions"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Card from "@/components/shared/Card";
import Dropdown from "@/components/shared/Dropdown";
import Confetti from 'react-confetti';
import dummyServices from "@/constants/dummyServices"
import { ServiceItem } from "@/types";

type ServiceFormProps = {
  userId: string
  type: "Create" | "Update"
  service?: IService,
  serviceId?: string
  serviceItems?: ServiceItem[]
  setIsModalOpen: (isOpen: boolean) => void
}

const ServiceForm = ({ userId, type, service, serviceId, serviceItems: parentServiceItems, setIsModalOpen }: ServiceFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues = service && type === 'Update'
    ? { ...service }
    : serviceDefaultValues;
  const [opened, { open, close }] = useDisclosure(false);
  const { startUpload } = useUploadThing('imageUploader')
  const [newServiceId, setNewServiceId] = useState<string | null>(null)
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>(parentServiceItems || [])

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: initialValues
  })

  // submit form
  async function onSubmit(values: z.infer<typeof serviceFormSchema>) {
    let uploadedImageUrl = values.imageUrl;
    console.log('values', values);


    // if (files.length > 0) {
    //   const uploadedImages = await startUpload(files)
    //   if (!uploadedImages) { return }
    //   uploadedImageUrl = uploadedImages[0].url
    // }

    // if (type === 'Create') {
    //   try {
    //     const newService = await createService({
    //       service: { ...values, imageUrl: uploadedImageUrl },
    //       userId,
    //       path: '/profile'
    //     })

    //     if (newService) {
    //       form.reset();
    //       setNewServiceId(newService._id);
    //       open();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  // if(type === 'Update') {
  //   if(!serviceId) {
  //     router.back()
  //     return;
  //   }

  //   try {
  //     console.log('Update service');

  // const updatedService = await updateService({
  //   userId,
  //   service: { ...values, imageUrl: uploadedImageUrl, _id: serviceId },
  //   path: `/services/${serviceId}`
  // })

  // if(updatedService) {
  //   form.reset();
  //   router.push(`/services/${updatedService._id}`)
  // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const confettiProps = typeof window !== 'undefined' ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {};

  return (
    <section className="px-4 pt-2 md:px-20">
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

          {/* Service Description */}
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-20">
                    <Textarea placeholder="Description" {...field} className="rounded-sm textarea" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Services offered */}
          <div className='p-2 border-1 bg-grey'>
            <Table>
              <TableCaption>
                {/* <ServiceItemModal userId={userId} type="Create"/> */}
                <Button type='button' onClick={() => setIsModalOpen(true)}
                  className='w-full bg-transparent rounded-none hover:bg-grey-50'>+ Add Service</Button>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[30%]'>Service Item</TableHead>
                  <TableHead className='w-[50%]'>Description</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceItems.map((serviceItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{serviceItem.title}</TableCell>
                    <TableCell>{serviceItem.description}</TableCell>
                    <TableCell className="text-right">CA${serviceItem.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Service */}
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
                      <Input
                        type="number"
                        placeholder="Price" {...field}
                        className="border-0 p6-regular bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isFree" className="pr-3 leading-none whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Service</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                  id="isFree" className="w-5 h-5 mr-2 border-2 border-primary-500" />
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
          </div>

          {/* Location & Website */}
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
                        alt="location"
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
                      <Input placeholder="Website" {...field} className="input-field" />
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
            className="w-full col-span-2 button"
          >
            {form.formState.isSubmitting ? (
              'Submitting...'
            ) : `${type} `}
          </Button>

          {/* successful confetti */}
          <Modal
            opened={opened}
            onClose={close}
            title=""
            transitionProps={{ transition: 'fade', duration: 200 }}
          >

            <div className="flex flex-col items-center justify-center">
              <h1 className="mt-5 text-3xl font-semibold text-left">Service Created Successfully!</h1>

              <div className="my-20">
                {/* Display the card of the new service */}
                <Card
                  direction="vertical"
                  itemType="service"
                  item={dummyServices[0]}
                  hasButton={false}
                />
              </div>

              {/* Find the service under profile > services */}
              <h3 className="mt-5 text-3xl font-semibold text-center">
                Find the service under <br />
                <Link href={`/services/${newServiceId}`} className="underline text-accent-light">
                  profile {'>'} services
                </Link>
              </h3>
            </div>

            {/* show confetti */}
            <Confetti
              {...confettiProps}
              numberOfPieces={500}
              recycle={false}
              initialVelocityY={10}
              initialVelocityX={10}
              colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
            />

          </Modal>
        </form>
      </Form>
    </section>
  )
}

export default ServiceForm