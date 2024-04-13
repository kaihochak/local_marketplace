"use server"

import { CreateReservationParams } from "@/types"
import { redirect } from 'next/navigation';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import Reservation from '../database/models/reservation.model';
import User from '../database/models/user.model';
import { revalidatePath } from "next/cache";

// Get all reservations for a service
export async function createReservation({ userId, serviceId, reservation, path}: CreateReservationParams) {
  try {
    await connectToDatabase();

    const client = await User.findById(userId);
    if (!client) throw new Error('Client not found');

    const newReservation = await Reservation.create({
      ...reservation,
      serviceId: serviceId,
      clientId: userId
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newReservation));
  } catch (error) {
    handleError(error);
  }
}

// get re


// have something like service ids for hihijojo in reservation id
// route delete all reservatiton ()
  // creaate admin reservation 
// create 101 dummy reservatiojn for hihijojo
  // also for reviews ??

  //when no selected reservatrion, no modal popup
  // fix total price when no price is given 
  // make paypal and stripe unavailable, cannot be picked 
  // chnage payemnt to pending for approval
  // upom payment picked  link to their profile to show reservation - reservation ?? 