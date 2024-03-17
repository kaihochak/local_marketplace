import ServiceForm from "@/components/shared/ServiceForm"
import { getServiceById } from "@/lib/actions/service.actions"
import { auth } from "@clerk/nextjs";

type UpdateServiceProps = {
  params: {
    id: string
  }
}

const UpdateService = async ({ params: { id } }: UpdateServiceProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const service = await getServiceById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Service</h3>
      </section>

      <div className="wrapper my-8">
        <ServiceForm 
          type="Update" 
          service={service} 
          serviceId={service._id} 
          userId={userId} 
        />
      </div>
    </>
  )
}

export default UpdateService