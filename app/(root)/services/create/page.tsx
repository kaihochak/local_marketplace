import CommonHeader from "@/components/shared/CommonHeader";
import ServiceForm from "@/components/shared/ServiceForm"
import { auth } from "@clerk/nextjs";

const CreateService = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
      <section className="wrapper md:py-10">
        <CommonHeader 
          title="Create New Service"
        />
        <ServiceForm 
          userId={userId} 
          type="Create" 
        />
      </section>
  )
}

export default CreateService