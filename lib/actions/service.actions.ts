'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Service from '@/lib/database/models/service.model'
import User from '@/lib/database/models/user.model'
import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import {
  CreateServiceParams,
  UpdateServiceParams,
  DeleteServiceParams,
  GetAllServicesParams,
  GetServicesByUserParams,
  GetRelatedServicesByCategoryParams,
} from '@/types'

// populate service with provider and category
const populateService = (query: any) => {
  return query
    .populate({ path: 'provider', model: User, select: '_id firstName lastName imageUrl contactNumber email website' })
    .populate({ path: 'category', model: Category, select: '_id name' })
}

// Create a new service
export async function createService({ userId, service, path}: CreateServiceParams) {
  try {
    await connectToDatabase()

    const provider = await User.findById(userId)
    if (!provider) throw new Error('Provider not found')

    const newService = await Service.create({ ...service, category: service.categoryId, provider: userId })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newService))
  } catch (error) {
    console.log(error)
    handleError(error)
  }
}

// Get a service by id
export async function getServiceById(serviceId: string) {
  try {
    await connectToDatabase()

    const service = await populateService(Service.findById(serviceId))
    if (!service) throw new Error('Service not found')

    return JSON.parse(JSON.stringify(service))
  } catch (error) {
    handleError(error)
  }
}