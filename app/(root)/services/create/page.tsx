import React from "react";
import CommonHeader from "@/components/shared/CommonHeader";
import { auth } from "@clerk/nextjs";
import CreateServiceWithModal from "./CreateServiceWithModal";

const CreateService = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section >
      <CommonHeader title="Create New Service" />
      <CreateServiceWithModal userId={userId}/>
    </section>
  )
}

export default CreateService