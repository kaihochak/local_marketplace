"use client"

import react, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { serviceItemDefaultValues } from "@/constants"
import { serviceItemSchema } from "@/lib/validator"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface IServiceItem {
    title: string
    description: string
    price: string
}

type ServiceFormProps = {
    userId: string
    type: "Create" | "Update"
    serviceItem?: IServiceItem,
    serviceItemId?: string
    isModalOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
}

const ServiceItemModal = ({ userId, type, serviceItem, serviceItemId, isModalOpen, setIsModalOpen }: ServiceFormProps) => {
    const initialValues = serviceItem && type === 'Update'
        ? { ...serviceItem }
        : serviceItemDefaultValues;

    // form setup with react-hook-form and zod
    const form = useForm<z.infer<typeof serviceItemSchema>>({
        resolver: zodResolver(serviceItemSchema),
        defaultValues: initialValues,
    })

    // submit handler
    async function onSubmit(values: z.infer<typeof serviceItemSchema>) {
        console.log("test123")
    }

    return (
        <section className="px-4 md:px-20 pt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {/* Service Image */}
  
            {/* Service Description */}
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="h-20">
                      <Textarea placeholder="Description" {...field} className="textarea rounded-sm" />
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
              ) : `${type} `}
            </Button>
          </form>
        </Form>
      </section>

        // <Form {...form}>
        //     <form onSubmit={form.handleSubmit(onSubmit)}>
        //         <div className="grid gap-4 py-4">
        //             {/* title */}
        //             <div className="grid grid-cols-4 items-center gap-4">
        //                 <Label htmlFor="service-item" className="text-right">
        //                     Service
        //                 </Label>
        //                 <FormField
        //                     control={form.control}
        //                     name="title"
        //                     render={({ field }) => (
        //                         <FormItem className="w-full col-span-3">
        //                             <FormControl>
        //                                 <Input {...field} />
        //                             </FormControl>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>
        //             {/* description */}
        //             <div className="grid grid-cols-4 items-center gap-4">
        //                 <Label htmlFor="description" className="text-right">
        //                     Description
        //                 </Label>
        //                 <FormField
        //                     control={form.control}
        //                     name="description"
        //                     render={({ field }) => (
        //                         <FormItem className="w-full col-span-3">
        //                             <FormControl>
        //                                 <Textarea placeholder="Description" {...field} />
        //                             </FormControl>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>
        //             {/* price */}
        //             <div className="grid grid-cols-4 items-center gap-4">
        //                 <Label htmlFor="price" className="text-right">
        //                     CA$
        //                 </Label>
        //                 <FormField
        //                     control={form.control}
        //                     name="price"
        //                     render={({ field }) => (
        //                         <FormItem className="w-full col-span-3">
        //                             <FormControl>
        //                                 <Input {...field} type="number" />
        //                             </FormControl>
        //                         </FormItem>
        //                     )}
        //                 />
        //             </div>
        //         </div>


        //         {/* Submit */}
        //         <Button
        //             type="submit"
        //             size="lg"
        //             disabled={form.formState.isSubmitting}
        //             className="button col-span-2 w-full"
        //         >
        //             {form.formState.isSubmitting ? (
        //                 'Submitting...'
        //             ) : `${type} `}
        //         </Button>
        //     </form>
        // </Form>


        // <div className='border-y hover:bg-grey-50 cursor-pointer'>
        //     <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        //         {/* Content */}
        //         <DialogContent className="sm:max-w-[425px] bg-primary">
        //             <DialogHeader>
        //                 <DialogTitle>Add a service item</DialogTitle>
        //             </DialogHeader>




        //         </DialogContent>
        //     </Dialog>
        // </div>
    )
}

export default ServiceItemModal