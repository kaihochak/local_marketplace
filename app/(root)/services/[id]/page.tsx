import React, { useEffect, useState } from 'react'
import { dummyServices } from '@/constants/dummyServices';
import { dummyUsers } from '@/constants/dummyUsers';
import { ServiceItem } from '@/lib/database/models/service.model';
import Collection from '@/components/shared/Collection';
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { Globe } from '@/public/assets/icons/Globe';
import ServiceReviews from '@/components/shared/ServiceReviews';
import CommonHeader from '@/components/shared/CommonHeader';
import { getServiceById } from '@/lib/actions/service.actions';
import { DummyServices } from '@/constants/dummyServices';


const ServicePost = async ({ params: { id }, searchParams }: SearchParamProps) => {

  // const service = await getServiceById(id);
  const service = dummyServices.find((service) => service._id === id);

  return (
    <>
      <section className='px-6 '>

        {/* Header */}
        <div>
          <CommonHeader title={service?.title} savedButton={true} />
        </div>

        {/* Provider Info */}
        <div className="wrapper flex justify-center bg-primary-50 bg-dotted-pattern bg-contain pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl gap-y-4 gap-x-4">
            {/* hero image */}
            <div className='w-full h-48 md:h-72 flex items justify-center overflow-hidden'>
              <Image
                src={service.imageUrl}
                alt="hero image"
                width={1000}
                height={1000}
                className='object-cover rounded-md'
              />
            </div>
            {/* Details */}
            <div className="flex flex-col gap-1 mx-2">
              {/* image, name, rating */}
              <div className="flex-between mb-2">
                <div className='flex-between gap-x-3'>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      priority
                      src={service?.provider?.imageUrl ?? ''}
                      alt="Profile"
                      width={500}
                      height={500}
                    />
                  </div>
                  <p className="text-xl text-end">{service.provider.firstName} {service.provider.lastName}</p>
                </div>
                {/* Rating & Reviews */}
                <div className="flex items-center">
                  <StarEmpty className="w-4 h-4 mx-2" />
                  <p className="">{service?.averageRating}</p>
                  <p className="text-gray-500"> ({service?.totalReviews})</p>
                </div>
              </div>
              {/* Contact Info */}  
              <div className='flex flex-col gap-y-2 m-2'>
                <div className="flex items-center gap-x-6">
                  <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href={`tel:$`} className="text-black">{service?.provider?.contactNumber}</a>
                </div>
                <div className="flex items-center gap-x-6">
                  <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href={`mailto:${service?.provider?.email}`} className="text-black">{service?.provider?.email}</a>
                </div>
                <div className="flex items-center gap-x-6">
                  <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                    <LocationPin className="w-5 h-5" />
                  </div>
                  <p className="">{service?.provider?.location}</p>
                </div>
                <div className="flex items-center gap-x-6">
                  <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <a href={'{service?.provider?.website}'} className="text-black" target="_blank" rel="noopener noreferrer">{service?.provider?.website}</a>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className='mx-2 md:my-6'>
              <p className='text-m'>{service?.description}</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="wrapper flex flex-col mt-2 gap-8 md:gap-10 ">
          <h2 className="h3-bold">Services Offered</h2>
          {/* TABLE */}
          <div className="mx-auto w-[200px] overflow-auto rounded-lg shadow-md">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="bg-gray-500 text-gray-100 text-sm font-medium">
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                { service?.servicesOffered && Object.keys(service?.servicesOffered).map((serviceKey, index) => (
                  <tr key={index} className="bg-gray-100 text-gray-600 text-sm">
                    <td className="px-4 py-2">{service?.servicesOffered[serviceKey].title}</td>
                    <td className="px-4 py-2">{service?.servicesOffered[serviceKey].price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviews */}
        <ServiceReviews service={service} />

        {/* Services with the same category */}
        <div className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h3-bold">Related Services</h2>
              <Collection 
                direction="horizontal"
                itemType="service"
                items={dummyServices}
                nextPrevButton={true}
              />
        </div>
      </section>
    </>
  )
}

export default ServicePost