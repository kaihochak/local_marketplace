import Reservation from "@/lib/database/models/reservation.model"
import { ServiceOffered, columns } from "./columns"
import { ServiceTable } from "./serviceTable"

async function getData(): Promise<ServiceOffered[]> {
  // Fetch data from API here.
  return [
    {
      id: "728ed52x",
      service: "Wall Painting",
      rating: 4.5,
      comments: 100,
      availability: "Today",
      price: 100,
    },
    {
      id: "728ed52f",
      service: "Premium Wall Painting",
      rating: 4.8,
      comments: 20,
      availability: "Today",
      price: 300,
    },
    {
      id: "728ed52A",
      service: "Quick & Dirty",
      rating: 2.3,
      comments: 200,
      availability: "Today",
      price: 60,
    },
  ]
}

export default async function ServiceAndReservation() {
  const data = await getData()

  return (
    <div className="pt-6 pb-3">
      <ServiceTable columns={columns} data={data} />
    </div>
  )
}