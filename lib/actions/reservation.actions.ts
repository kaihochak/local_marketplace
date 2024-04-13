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
