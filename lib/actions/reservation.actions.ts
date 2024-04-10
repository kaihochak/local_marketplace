import { Schema, model, models, Document } from 'mongoose'

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

const Reservation = models.Reservation || model('Reservation', ReservationSchema)

export default Reservation
