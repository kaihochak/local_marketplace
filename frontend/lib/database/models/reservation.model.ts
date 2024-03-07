import { Schema, model, models, Document } from 'mongoose'

export interface IReservation extends Document {
  createdAt: Date
  stripeId: string
  totalAmount: string
  service: {
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
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Reservation = models.Reservation || model('Reservation', ReservationSchema)

export default Reservation
