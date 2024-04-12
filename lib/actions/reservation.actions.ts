import { Schema, model, models, Document } from 'mongoose'
import { connectToDatabase } from '@/lib/database'
import { handleError } from '../utils'

// populate reservation with event and buyer
const populateReservation = (query: any) => {
  return query
    .populate({ path: 'event', model: 'Event', select: '_id title' })
    .populate({ path: 'buyer', model: 'User', select: '_id firstName lastName' })
}

export interface IReservation extends Document {
  createdAt: Date
  totalAmount: string
  event: {
    _id: string
    title: string
  }
  buyer: {
    _id: string
    firstName: string
    lastName: string
  }
}

export type IReservationItem = {
  _id: string
  totalAmount: string
  createdAt: Date
  eventTitle: string
  eventId: string
  buyer: string
}

const ReservationSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  serviceItems: {
    type: String,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

// get reservation by user id
export async function getReservationsByUser(userId: string) {
  try {
    await connectToDatabase()

    const conditions = { buyer: userId }

    const reservationsQuery = Reservation.find(conditions)
      .sort({ createdAt: 'desc' })

    const reservations = await populateReservation(reservationsQuery)
    const reservationsCount = await Reservation.countDocuments(conditions)

    return { reservations, reservationsCount }
  } catch (error) {
    handleError(error)
  }
}

const Reservation = models.Reservation || model('Reservation', ReservationSchema)

export default Reservation
