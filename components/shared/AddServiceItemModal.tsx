"use client"

import React from 'react'
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'

const AddServiceItemModal = () => {



    return (
        <div className='border-y hover:bg-grey-50 cursor-pointer'>
            <Dialog>
                {/* Button */}
                <DialogTrigger asChild>
                    <Button type='button' className='w-full bg-transparent rounded-none hover:bg-grey-50'>+ Add Service</Button>
                </DialogTrigger>
                {/* Content */}
                <DialogContent className="sm:max-w-[425px] bg-primary">
                    <DialogHeader>
                        <DialogTitle>Add a service item</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="service-item" className="text-right">
                                Service
                            </Label>
                            <Input id="service-item" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                CA$
                            </Label>
                            <Input
                                id="price"
                                type="number"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddServiceItemModal