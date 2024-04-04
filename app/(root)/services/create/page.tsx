import CommonHeader from "@/components/shared/CommonHeader";
import ServiceForm from "@/components/shared/ServiceForm"
import { auth } from "@clerk/nextjs";

const CreateService = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
      <section >
        <CommonHeader 
          title="Create New Service"
        />
        <div className="wrapper md:py-2">
          <ServiceForm 
            userId={userId} 
            type="Create" 
          />
        </div>
      </section>
  )
}

export default CreateService