"use client";

import React from 'react'
import ServiceForm from "./ServiceForm"
import ServiceItemModal from "./ServiceItemModal";

const CreateServiceWithModal = ({ userId } : { userId: string }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
        <div>
            <div className="wrapper md:py-2">
                <ServiceForm
                    userId={userId}
                    type="Create"
                    setIsModalOpen={setIsModalOpen}
                />
            </div>

            <ServiceItemModal
                userId={userId}
                type="Create"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}

export default CreateServiceWithModal