import { ReservationItem } from "@/lib/database/models/reservation.model";

export const dummyReservations: any[] = [
    {
        _id: "1",
        params:
        {
            reservationDate: new Date(),
            clientId: "1",
            serviceId: "2",
            status: "pending",
            selectedServices: ["1", "2"],
        },
    },
    {
        _id: "2",
        params:
        {
            reservationDate: new Date(),
            clientId: "1",
            serviceId: "3",
            status: "pending",
            selectedServices: ["2", "3"],
        },
    },
    {
        _id: "3",
        params:
        {
            reservationDate: new Date(),
            clientId: "1",
            serviceId: "4",
            status: "pending",
            selectedServices: ["1", "3", "4"],
        },
    },
    {
        _id: "4",
        params:
        {
            reservationDate: new Date(),
            clientId: "2",
            serviceId: "5",
            status: "pending",
            selectedServices: ["1", "2", "3"],
        },
    },
    {
        _id: "5",
        params:
        {
            reservationDate: new Date(),
            clientId: "2",
            serviceId: "6",
            status: "pending",
            selectedServices: ["1", "4"],
        },
    },
    {
        _id: "6",
        params:
        {
            reservationDate: new Date(),
            clientId: "2",
            serviceId: "7",
            status: "pending",
            selectedServices: ["2", "4"],
        },
    },
    {
        _id: "7",
        params:
        {
            reservationDate: new Date(),
            clientId: "3",
            serviceId: "8",
            status: "pending",
            selectedServices: ["1", "2"],
        },
    },
    {
        _id: "8",
        params:
        {
            reservationDate: new Date(),
            clientId: "3",
            serviceId: "9",
            status: "pending",
            selectedServices: ["3", "4"],
        },
    },
    {
        _id: "9",
        params:
        {
            reservationDate: new Date(),
            clientId: "3",
            serviceId: "10",
            status: "pending",
            selectedServices: ["2", "3", "4"],
        },
    },
    {
        _id: "10",
        params:
        {
            reservationDate: new Date(),
            clientId: "4",
            serviceId: "11",
            status: "pending",
            selectedServices: ["1", "2"],
        },
    },
    {
        _id: "11",
        params:
        {
            reservationDate: new Date(),
            clientId: "4",
            serviceId: "12",
            status: "pending",
            selectedServices: ["2", "3"],
        },
    },

];