import { Schema, model, models, Document } from 'mongoose'
import { connectToDatabase } from '@/lib/database'
import { handleError } from '../utils'
import User from '../database/models/user.model'
import Reservation from '../database/models/reservation.model'
import { revalidatePath } from 'next/cache'
import { ReservationParams } from '@/types'

// populate reservation with reservation and buyer
const populateReservation = (query: any) => {
  return query
    .populate({ path: 'event', model: Reservation , select: '_id title' })
    .populate({ path: 'buyer', model: User , select: '_id firstName lastName' })
}

// get reservation by reservation id
export async function getReservationById(reservationId: string) {
  try {
    await connectToDatabase()

    const reservation = await populateReservation(Reservation.findById(reservationId))

    if (!reservation) throw new Error('Reservation not found')

    return JSON.parse(JSON.stringify(reservation))
  } catch (error) {
    handleError(error)
  }
}

// get reservation by user id
export async function getReservationsByUser(userId: string) {
  try {
    await connectToDatabase()

    const conditions = { buyer: userId }

    const reservationsQuery = Reservation.find(conditions)
      .sort({ createdAt: 'desc' })

    const reservations = await populateReservation(reservationsQuery)
    const reservationsCount = await Reservation.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(reservations)), count: reservationsCount}
  } catch (error) {
    handleError(error)
  }
}

// create a new reservation
export async function createReservation(reservationData: ReservationParams) {
  try {
    await connectToDatabase()

    const newReservation = await Reservation.create(reservationData)

    console.log('New reservation created:', newReservation)

    return JSON.parse(JSON.stringify(newReservation))
  } catch (error) {
    handleError(error)
  }
}