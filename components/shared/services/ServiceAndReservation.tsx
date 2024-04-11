import { ServiceOffered, columns } from "./columns"
import { ServiceTable } from "./serviceTable"
import { ServiceItem } from "@/types"

async function getData(): Promise<ServiceOffered[]> {
  // Fetch data from API here.
  return [
    {
      id: "728ed52x",
      title: "Wall Painting",
      // rating: 4.5,
      description: "100",
      // availability: "Today",
      price: 100,
    },
    {
      id: "728ed52f",
      title: "Premium Wall Painting",
      // rating: 4.8,
      description: "20",
      // availability: "Today",
      price: 300,
    },
    {
      id: "728ed52A",
      title: "Quick & Dirty",
      // rating: 2.3,
      description: "200",
      // availability: "Today",
      price: 60,
    },
  ]
}

export default async function ServiceAndReservation({ servicesOffered }: { servicesOffered: ServiceOffered[] }) {
  // const data = await getData(serviceItems)

  console.log(servicesOffered);
  

  return (
    <div className="pt-6 pb-3">
      <ServiceTable columns={columns} data={servicesOffered} />
    </div>
  )
}