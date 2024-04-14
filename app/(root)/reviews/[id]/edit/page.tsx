import CommonHeader from "@/components/shared/CommonHeader"
import ReviewForm from "@/components/shared/ReviewForm";
import { auth } from "@clerk/nextjs";

const EditReview = () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    return (
        <div>
            {/* CommonHeader component is used to display the title of the page and back button */}
            <CommonHeader title='Edit Review' />
            {/* display review form  */}
            <ReviewForm 
                userId={userId} 
                type="Edit" 
            />
        </div>
    )
}

export default EditReview;
