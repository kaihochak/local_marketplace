"use server"

import Stripe from 'stripe';
import { CheckoutReservationParams, CreateReservationParams, GetReservationsByServiceParams, GetReservationsByUserParams } from "@/types"
import { redirect } from 'next/navigation';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import Researvation from '../database/models/reservation.model';
import Service from '../database/models/service.model';
import {ObjectId} from 'mongodb';
import User from '../database/models/user.model';

export const checkoutReservation = async (reservation: CheckoutReservationParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const price = reservation.isFree ? 0 : Number(reservation.price) * 100;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: price,
            product_data: {
              name: reservation.serviceTitle
            }
          },
          quantity: 1
        },
      ],
      metadata: {
        serviceId: reservation.serviceId,
        buyerId: reservation.buyerId,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    redirect(session.url!)
  } catch (error) {
    throw error;
  }
}

export const createReservation = async (reservation: CreateReservationParams) => {
  try {
    await connectToDatabase();
    
    const newReservation = await Reservation.create({
      ...reservation,
      service: reservation.serviceId,
      buyer: reservation.buyerId,
    });

    return JSON.parse(JSON.stringify(newReservation));
  } catch (error) {
    handleError(error);
  }
}

// GET ORDERS BY EVENT
export async function getReservationsByService({ searchString, serviceId }: GetReservationsByServiceParams) {
  try {
    await connectToDatabase()

    if (!serviceId) throw new Error('Service ID is required')
    const serviceObjectId = new ObjectId(serviceId)

    const reservations = await Reservation.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'buyer',
          foreignField: '_id',
          as: 'buyer',
        },
      },
      {
        $unwind: '$buyer',
      },
      {
        $lookup: {
          from: 'services',
          localField: 'service',
          foreignField: '_id',
          as: 'service',
        },
      },
      {
        $unwind: '$service',
      },
      {
        $project: {
          _id: 1,
          totalAmount: 1,
          createdAt: 1,
          serviceTitle: '$service.title',
          serviceId: '$service._id',
          buyer: {
            $concat: ['$buyer.firstName', ' ', '$buyer.lastName'],
          },
        },
      },
      {
        $match: {
          $and: [{ serviceId: serviceObjectId }, { buyer: { $regex: RegExp(searchString, 'i') } }],
        },
      },
    ])

    return JSON.parse(JSON.stringify(reservations))
  } catch (error) {
    handleError(error)
  }
}

// GET ORDERS BY USER
export async function getReservationsByUser({ userId, limit = 3, page }: GetReservationsByUserParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { buyer: userId }

    const reservations = await Reservation.distinct('service._id')
      .find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)
      .populate({
        path: 'service',
        model: Service,
        populate: {
          path: 'organizer',
          model: User,
          select: '_id firstName lastName',
        },
      })

    const reservationsCount = await Reservation.distinct('service._id').countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(reservations)), totalPages: Math.ceil(reservationsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}
