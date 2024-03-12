import React from 'react'
import Collection from '@/components/shared/Collection';
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { Globe } from '@/public/assets/icons/Globe';
import { StarFilled } from '@/public/assets/icons/StarFilled';

const ServicePost = async ({ params: { id }, searchParams }: SearchParamProps) => {

    // const service = await getServiceById(id);
    
    const service = {
       _id: "1",
       title: "Wall Painter",
       description: "Service Description",
       image: {
          url1: "http://example.com/image/service3.jpg",
          url2: "http://example.com/image/service3.jpg",
          url3: "http://example.com/image/service3.jpg",
        },
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: {
          _id: "1",
          profileURL: "http://example.com/profile",
          firstName: "Enya",
          lastName: "Umanzor",
          email: "enya.umanzor@gmail.com",
          phone: "587 966 5002",
          location: "24 whitecres Ave, Calgary AB",
          website: "enyaumanzor.com",
        },
        servicesOffered: {
          service1: {
            title: "Service 1",
            price: "100",
          },
          service2: {
            title: "Service 2",
            price: "200",
          },
          service3: {
            title: "Service 3",
            price: "300",
          },
          service4: {
            title: "Service 4",
            price: "400",
          },
        },
        reviews: {
          review1: {
            user: {
              _id: "1",
              profileURL: "http://example.com/profile",
              firstName: "Drew",
              lastName: "Phillips",
            },
            rating: "3",
            comment: "Hey, I like that...",
          },
          review2: {
            user: {
              _id: "2",
              profileURL: "http://example.com/profile",
              firstName: "Ky",
              lastName: "Newman",
            },
            rating: "5",
            comment: "Enya let's record a podcast together without drew...",
          },
          review3: {
            user: {
              _id: "3",
              profileURL: "http://example.com/profile",
              firstName: "Josiah",
              lastName: "",
            },
            rating: "2",
            comment: "Find yourself a real job",
          },
        }
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
                        src={service.image.url1}
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
                <Image src={service.serviceProvider.profileURL} alt="Profile" width={28} height={28} className="rounded-full" />
                </div>
                <p className="">{service.serviceProvider.firstName} {service.serviceProvider.lastName}</p>
              </div>
              <section>
                <div className="flex items-center gap-2">
                  <StarEmpty className="w-5 h-5" />
                  <p className="">{service.averageRating}</p>
                  <p className="text-gray-500">{service.totalReviews}</p>
                </div>
              </section>
              <div className="flex items-center gap-2">
              <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
                <a href={`tel:$`} className="text-blue-500 underline">{service.serviceProvider.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <a href={`mailto:${service.serviceProvider.email}`} className="text-blue-500 underline">{service.serviceProvider.email}</a> {/* Link email for email */}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <LocationPin className="w-5 h-5" />
                </div>
                <p className="">{service.serviceProvider.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <a href={'{service.serviceProvider.website}'} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{service.serviceProvider.website}</a> {/* Link website and open in new tab */}
              </div>
        </div>

        <div className='my-7'>
          <p>{service.description}</p>
        </div>
        </section>

        {/* Services Offered */}
        <section className="wrapper flex flex-col gap-8 md:gap-10">
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
                {Object.keys(service.servicesOffered).map((serviceKey, index) => (
                  <tr key={index} className="bg-gray-100 text-gray-600 text-sm">
                    <td className="px-4 py-2">{service.servicesOffered[serviceKey as keyof typeof service.servicesOffered].title}</td>
                    <td className="px-4 py-2">${service.servicesOffered[serviceKey as keyof typeof service.servicesOffered].price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Reviews */}
        <section className="wrapper my-8 flex flex-col gap-2 md:gap-12">
          <h2 className="h2-bold">Reviews</h2>
          {Object.keys(service.reviews).map((reviewKey, index) => {
            const review = service.reviews[reviewKey as keyof typeof service.reviews];
            const rating = parseFloat(review.rating);

            return (
              <div key={index} className="p-4">
                <div className='flex'>
                  <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center">
                    <Image src={review.user.profileURL} alt="Profile" width={28} height={28} className="rounded-full" />
                  </div>
                  <h3 className="text-lg font-medium">{review.user.firstName} {review.user.lastName}</h3>
                </div>
                <div className="flex items-center gap-2 my-2">
                  {Array.from({ length: rating }, (_, i) => (
                    <StarFilled key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            );
          })}
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