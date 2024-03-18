import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import dummyData from '@/constants/dummydata'; // Adjust the import path according to your project structure

const page = () => {
    const { users, categories, services, ratingReviews, reservations } = dummyData;

    return (
        <div className="px-4">
            Message

        </div>
    );
}

export default page