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

// Create a new service
export async function createService({ userId, service, path}: CreateServiceParams) {
  try {
    await connectToDatabase()

    console.log("service actions: ", userId);
    

    const provider = await User.findById(userId)
    if (!provider) throw new Error('Provider not found')


    console.log({
      ...service,
      category: service.categoryId,
      organizer: userId
    });
    

    const newService = await Service.create({ ...service, category: service.categoryId, organizer: userId })
    // revalidatePath(path)

    return JSON.parse(JSON.stringify(newService))
  } catch (error) {
    console.log(error)
    handleError(error)
  }
}