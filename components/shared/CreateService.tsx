"use client";

import React, { useEffect } from 'react'
import ServiceForm from "./ServiceForm"
import ServiceItemModal from "./ServiceItemModal";
import { IService } from "@/lib/database/models/service.model";
  
const CreateService = ({ userId } : { userId: string }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [serviceItems, setServiceItems] = React.useState<IService[]>([])
    const [updateItem, setUpdateItem] = React.useState<IService | null>(null)
    
    return (
        <div>
            <div className="wrapper md:py-2">
                <ServiceForm
                    userId={userId}
                    type="Create"
                    setIsModalOpen={setIsModalOpen}
                    serviceItem={updateItem}
                    serviceItems={serviceItems}
                    setServiceItems={setServiceItems}
                />
            </div>
            
            <ServiceItemModal
                type="Create"
                serviceItem={updateItem}
                serviceItems={serviceItems}
                setServiceItems={setServiceItems}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}

export default CreateService