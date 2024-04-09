"use client";

import React, { useEffect } from 'react'
import ServiceForm from "./ServiceForm"
import ServiceItemModal from "./ServiceItemModal";
import { ServiceItem } from "@/types";
  
const CreateService = ({ userId } : { userId: string }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [serviceItems, setServiceItems] = React.useState<ServiceItem[]>([])

    useEffect(() => {
        console.log('serviceItems', serviceItems);
    }, [serviceItems])


    return (
        <div>
            <div className="wrapper md:py-2">
                <ServiceForm
                    userId={userId}
                    type="Create"
                    setIsModalOpen={setIsModalOpen}
                    serviceItems={serviceItems}
                />
            </div>
{/*             
            <ServiceItemModal
                userId={userId}
                type="Create"
                serviceItems={serviceItems}
                setServiceItems={setServiceItems}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            /> */}
        </div>
    )
}

export default CreateService