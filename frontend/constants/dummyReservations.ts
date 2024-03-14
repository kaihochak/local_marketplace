import { ReservationItem } from "@/lib/database/models/reservation.model";

export const dummyReservations: ReservationItem[] = [
    {
        _id: "1",
        createdAt: new Date(),
        stripeId: "stripeId1",
        totalAmount: 100,
        reservationDate: new Date(),
        clientId: { _id: "1", firstName: "Enya", lastName: "Umanzor" },
        service: { 
            _id: "1", 
            title: "Wall Painter",
            image: "https://picsum.photos/id/237/200/300",
            location: "24 whitecres Ave, Calgary AB",
        },
        date: "12:30 PM | 19 Febraury 2024",
        notes: "Notes1",
        status: "pending",
    },
    {
        _id: "2",
        createdAt: new Date(),
        stripeId: "stripeId2",
        totalAmount: 200,
        reservationDate: new Date(),
        clientId: { _id: "2", firstName: "FirstName2", lastName: "LastName2" },
        service: { 
            _id: "2", 
            title: "Service2",
            image: "https://picsum.photos/id/237/200/300",
            location: "Location2",
        },
        date: "12:30 PM | 19 Febraury 2024",
        notes: "Notes2",
        status: "confirmed",
    },
    {
        _id: "3",
        createdAt: new Date(),
        stripeId: "stripeId3",
        totalAmount: 300,
        reservationDate: new Date(),
        clientId: { _id: "3", firstName: "FirstName3", lastName: "LastName3" },
        service: { 
            _id: "3", 
            title: "Service3",
            image: "https://picsum.photos/id/237/200/300",
            location: "Location3",
        },
        date: "12:30 PM | 19 Febraury 2024",
        notes: "Notes3",
        status: "completed",
    },
    {
        _id: "4",
        createdAt: new Date(),
        stripeId: "stripeId4",
        totalAmount: 400,
        reservationDate: new Date(),
        clientId: { _id: "4", firstName: "FirstName4", lastName: "LastName4" },
        service: { 
            _id: "4", 
            title: "Service4",
            image: "https://picsum.photos/id/237/200/300",
            location: "Location4",
        },
        date: "12:30 PM | 19 Febraury 2024",
        notes: "Notes4",
        status: "cancelled",
    },
];