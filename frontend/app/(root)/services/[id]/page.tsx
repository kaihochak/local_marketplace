import React from 'react'
import Collection from '@/components/shared/Collection';
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { Globe } from '@/public/assets/icons/Globe';
import { StarFilled } from '@/public/assets/icons/StarFilled';

// import Slider  from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ServicePost = async ({ params: { id }, searchParams }: SearchParamProps) => {

    // const service = await getServiceById(id);
    const service = {
        _id: "1",
        title: "Service Title",
        description: "Service Description",
        category: {
            _id: "1",
            name: "Category Name"
        },
        imageUrl: "https://picsum.photos/id/237/200/300",
        price: "100",
        isFree: false,
        url: "http://example.com/service",
        organizer: {
            _id: "1",
            firstName: "FName",
            lastName: "LName"
        },
        location: "Location",
        startDateTime: new Date(),
        endDateTime: new Date(),
    }

    // const relatedServices = await getRelatedServicesByCategory({
    //     categoryId: service.category._id,
    //     serviceId: service._id,
    //     page: searchParams.page as string,
    // })
    const relatedServices = [
        {
            _id: "2",
            title: "Service Title 2",
            description: "Service Description 2",
            category: {
                _id: "1",
                name: "Category Name"
            },
            imageUrl: "http://example.com/image/service2.jpg",
            price: "200",
            isFree: false,
            url: "http://example.com/service2"
        },
        {
            _id: "3",
            title: "Service Title 3",
            description: "Service Description 3",
            category: {
                _id: "1",
                name: "Category Name"
            },
            imageUrl: "http://example.com/image/service3.jpg",
            price: "300",
            isFree: false,
            url: "http://example.com/service3"
        },
        {
            _id: "4",
            title: "Service Title 4",
            description: "Service Description 4",
            category: {
                _id: "1",
                name: "Category Name"
            },
            imageUrl: "http://example.com/image/service4.jpg",
            price: "400",
            isFree: false,
            url: "http://example.com/service4"
        }
    ]

    return (
        <>
        <section className="justify-center mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">

            <h2 className='h2-bold'>{service.title}</h2>
            <div className='h-48 overflow-auto my-4 relative rounded-lg'>
                <div className="absolute inset-0 bg-white">
                    <Image 
                        src={service.imageUrl}
                        alt="hero image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-4"> {/* Add gap-4 for spacing between items */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                <Image/>
                </div>
                <p className="">{service.organizer.firstName} {service.organizer.lastName}</p>
              </div>
              <div className="flex items-center gap-2">
                <StarEmpty className="w-5 h-5" />
                <p className="">3.2</p>
                <p className="text-gray-500">(12)</p>
              </div>
              <div className="flex items-center gap-2">
              <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
                <a href={`tel:$`} className="text-blue-500 underline">587 966 5002</a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <a href={`mailto:$`} className="text-blue-500 underline">enya.umanzor@gmail.com</a> {/* Link email for email */}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <LocationPin className="w-5 h-5" />
                </div>
                <p className="">24 Whitecres Ave, Calgary AB</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <a href={service.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">enyaumanzor.com</a> {/* Link website and open in new tab */}
              </div>
        </div>

        <div className='my-7'>
          <p>{service.description}</p>
        </div>
        </section>

        {/* Services Offered */}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Services Offered</h2>
          <div className="w-full overflow-auto rounded-lg shadow-md">
            <table className="w-full min-w-full text-left table-auto">
              <thead>
                <tr className="bg-gray-500 text-gray-100 text-sm font-medium">
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <td className="px-4 py-2">Service 1</td>
                  <td className="px-4 py-2">$100</td>
                </tr>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <td className="px-4 py-2">Service 2</td>
                  <td className="px-4 py-2">$200</td>
                </tr>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <td className="px-4 py-2">Service 3</td>
                  <td className="px-4 py-2">$300</td>
                </tr>
                <tr className="bg-gray-100 text-gray-600 text-sm">
                  <td className="px-4 py-2">Service 4</td>
                  <td className="px-4 py-2">$400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Reviews */}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
            <h2 className="h2-bold">Reviews</h2>

            <div className="p-4 ">
              <div className='flex '>
                <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center">
                  <Image/>
                </div>
                <h3 className="text-lg font-medium">Felix Catton</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <StarFilled className="w-5 h-5" />
              </div>
              <p className="text-gray-700">Hey, I like that...</p>
            </div>

        </section>
    
        {/* Services with the same category */}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Related Services</h2>
    
          <Collection 
            selectedCategory={"All_Services"}
            title={""}
            //   data={relatedServices?.data}
            //   emptyTitle="No Events Found"
            //   emptyStateSubtext="Come back later"
            //   collectionType="All_Events"
            //   limit={3}
            //   page={searchParams.page as string}
            //   totalPages={relatedServices?.totalPages}
            />
        </section>
        </>
      )
}

export default ServicePost;