import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import dummyData from '@/constants/dummydata'; // Adjust the import path according to your project structure

const page = () => {
    const { users, categories, services, ratingReviews, reservations } = dummyData;

    return (
        <div className="px-4">
            {/* for users */}
            <Table>
                <TableCaption>Users</TableCaption>
                <TableHeader>
                    {/* map columns */}
                    <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>Service IDs</TableHead>
                        <TableHead>Rating Review IDs</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow>
                            <TableCell key={index}>{user.username}</TableCell>
                            <TableCell key={index}>{user.email}</TableCell>
                            <TableCell key={index}>{user.firstName} {user.lastName}</TableCell>
                            <TableCell key={index}>{user.photo}</TableCell>
                            <TableCell key={index}>{user.contactNumber}</TableCell>
                            <TableCell key={index}>{user.serviceIDs.join(', ')}</TableCell>
                            <TableCell key={index}>{user.ratingReviewIDs.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* for categories */}
            <Table>
                <TableCaption>Categories</TableCaption>
                <TableHeader>
                    {/* map columns */}
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Parent Category ID</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category, index) => (
                        <TableRow>
                            <TableCell key={index}>{category.name}</TableCell>
                            <TableCell key={index}>{category.description}</TableCell>
                            <TableCell key={index}>{category.parentCategoryId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* for services */}
            <Table>
                <TableCaption>Services</TableCaption>
                <TableHeader>
                    {/* map columns */}
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Image URL</TableHead>
                        <TableHead>Start Date Time</TableHead>
                        <TableHead>End Date Time</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Is Free</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead>Category ID</TableHead>
                        <TableHead>Provider ID</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service, index) => (
                        <TableRow>
                            <TableCell key={index}>{service.title}</TableCell>
                            <TableCell key={index}>{service.description}</TableCell>
                            <TableCell key={index}>{service.location}</TableCell>
                            <TableCell key={index}>{service.imageUrl}</TableCell>
                            <TableCell key={index}>{service.startDateTime.toString()}</TableCell> // Convert to string
                            <TableCell key={index}>{service.endDateTime.toString()}</TableCell>
                            <TableCell key={index}>{service.price}</TableCell>
                            <TableCell key={index}>{service.isFree}</TableCell>
                            <TableCell key={index}>{service.url}</TableCell>
                            <TableCell key={index}>{service.categoryId}</TableCell>
                            <TableCell key={index}>{service.providerId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* for rating reviews */}
            <Table>
                <TableCaption>Rating Reviews</TableCaption>
                <TableHeader>
                    {/* map columns */}
                    <TableRow>
                        <TableHead>Service ID</TableHead>
                        <TableHead>Client ID</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Review</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Helpful Count</TableHead>
                        <TableHead>Verified Purchase</TableHead>
                        <TableHead>Provider Response</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ratingReviews.map((ratingReview, index) => (
                        <TableRow>
                            <TableCell key={index}>{ratingReview.serviceID}</TableCell>
                            <TableCell key={index}>{ratingReview.clientID}</TableCell>
                            <TableCell key={index}>{ratingReview.rating}</TableCell>
                            <TableCell key={index}>{ratingReview.review}</TableCell>
                            <TableCell key={index}>{ratingReview.createdAt.toString()}</TableCell>
                            <TableCell key={index}>{ratingReview.helpfulCount}</TableCell>
                            <TableCell key={index}>{ratingReview.verifiedPurchase}</TableCell>
                            <TableCell key={index}>{ratingReview.providerResponse?.response}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* for reservations */}
            <Table>
                <TableCaption>Reservations</TableCaption>
                <TableHeader>
                    {/* map columns */}
                    <TableRow>
                        <TableHead>Stripe ID</TableHead>
                        <TableHead>Total Amount</TableHead>
                        <TableHead>Reservation Date</TableHead>
                        <TableHead>Client ID</TableHead>
                        <TableHead>Service ID</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reservations.map((reservation, index) => (
                        <TableRow>
                            <TableCell key={index}>{reservation.stripeId}</TableCell>
                            <TableCell key={index}>{reservation.totalAmount}</TableCell>
                            <TableCell key={index}>{reservation.reservationDate.toString()}</TableCell>
                            <TableCell key={index}>{reservation.clientId._id}</TableCell>
                            <TableCell key={index}>{reservation.serviceId._id}</TableCell>
                            <TableCell key={index}>{reservation.notes}</TableCell>
                            <TableCell key={index}>{reservation.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    );
}

export default page