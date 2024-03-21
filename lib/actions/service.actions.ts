'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Service from '@/lib/database/models/service.model'
import User from '@/lib/database/models/user.model'
// import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import {
  CreateServiceParams,
  UpdateServiceParams,
  DeleteServiceParams,
  GetAllServicesParams,
  GetServicesByUserParams,
  GetRelatedServicesByCategoryParams,
} from '@/types'

// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: 'i' } })
// }

// const populateService = (query: any) => {
//   return query
//     .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: Category, select: '_id name' })
// }

// CREATE
// export async function createService({ userId, service, path }: CreateServiceParams) {
//   try {
//     await connectToDatabase()

//     const provider = await User.findById(userId)
//     if (!provider) throw new Error('Provider not found')

//     const newService = await Service.create({ ...service, category: service.categoryId, provider: userId })
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(newService))
//   } catch (error) {
//     handleError(error)
//   }
// }

export async function createService(service: CreateServiceParams) {
  try {
    await connectToDatabase()

    const newService = await Service.create(service)
    return JSON.parse(JSON.stringify(newService))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE SERVICE BY ID
// export async function getServiceById(serviceId: string) {
//   try {
//     await connectToDatabase()

//     const service = await populateService(Service.findById(serviceId))

//     if (!service) throw new Error('Service not found')

//     return JSON.parse(JSON.stringify(service))
//   } catch (error) {
//     handleError(error)
//   }
// }

// UPDATE
// export async function updateService({ userId, service, path }: UpdateServiceParams) {
//   try {
//     await connectToDatabase()

//     const serviceToUpdate = await Service.findById(service._id)
//     if (!serviceToUpdate || serviceToUpdate.organizer.toHexString() !== userId) {
//       throw new Error('Unauthorized or service not found')
//     }

//     const updatedService = await Service.findByIdAndUpdate(
//       service._id,
//       { ...service, category: service.categoryId },
//       { new: true }
//     )
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(updatedService))
//   } catch (error) {
//     handleError(error)
//   }
// }

// DELETE
// export async function deleteService({ serviceId, path }: DeleteServiceParams) {
//   try {
//     await connectToDatabase()

//     const deletedService = await Service.findByIdAndDelete(serviceId)
//     if (deletedService) revalidatePath(path)
//   } catch (error) {
//     handleError(error)
//   }
// }

// GET ALL SERVICES
// export async function getAllServices({ query, limit = 6, page, category }: GetAllServicesParams) {
//   try {
//     await connectToDatabase()

//     const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
//     const categoryCondition = category ? await getCategoryByName(category) : null
//     const conditions = {
//       $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
//     }

//     const skipAmount = (Number(page) - 1) * limit
//     const servicesQuery = Service.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const services = await populateService(servicesQuery)
//     const servicesCount = await Service.countDocuments(conditions)

//     return {
//       data: JSON.parse(JSON.stringify(services)),
//       totalPages: Math.ceil(servicesCount / limit),
//     }
//   } catch (error) {
//     handleError(error)
//   }
// }

// GET SERVICES BY ORGANIZER
// export async function getServicesByUser({ userId, limit = 6, page }: GetServicesByUserParams) {
//   try {
//     await connectToDatabase()

//     const conditions = { organizer: userId }
//     const skipAmount = (page - 1) * limit

//     const servicesQuery = Service.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const services = await populateService(servicesQuery)
//     const servicesCount = await Service.countDocuments(conditions)

//     return { data: JSON.parse(JSON.stringify(services)), totalPages: Math.ceil(servicesCount / limit) }
//   } catch (error) {
//     handleError(error)
//   }
// }

// GET RELATED SERVICES: SERVICES WITH SAME CATEGORY
// export async function getRelatedServicesByCategory({
//   categoryId,
//   serviceId,
//   limit = 3,
//   page = 1,
// }: GetRelatedServicesByCategoryParams) {
//   try {
//     await connectToDatabase()

//     const skipAmount = (Number(page) - 1) * limit
//     const conditions = { $and: [{ category: categoryId }, { _id: { $ne: serviceId } }] }

//     const servicesQuery = Service.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const services = await populateService(servicesQuery)
//     const servicesCount = await Service.countDocuments(conditions)

//     return { data: JSON.parse(JSON.stringify(services)), totalPages: Math.ceil(servicesCount / limit) }
//   } catch (error) {
//     handleError(error)
//   }
// }
