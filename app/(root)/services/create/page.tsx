import React from "react";
import CommonHeader from "@/components/shared/CommonHeader";
import { auth } from "@clerk/nextjs";
import CreateService from "@/components/shared/CreateService";

const page = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section >
      {/* CommonHeader component is used to display the title of the page and back button */}
      <CommonHeader title="Create New Service" />
      {/* CreateService form is used to create a new service */}
      <CreateService userId={userId}/>
    </section>
  )
}

export default page