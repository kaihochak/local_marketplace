import { UserItem } from '@/lib/database/models/user.model';
import { CategoryItem } from '@/lib/database/models/category.model';
import { ServiceItem } from '@/lib/database/models/service.model';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';

// Mock Users
export const users: UserItem[] = Array.from({ length: 10 }).map((_, index) => ({
    _id: `user${index}`,
    clerkId: `clerkId${index}`,
    email: `user${index}@example.com`,
    username: `user${index}`,
    firstName: `FirstName${index}`,
    lastName: `LastName${index}`,
    photo: `http://example.com/photo/user${index}.jpg`,
    contactNumber: `123456789${index}`,
    serviceIDs: [],
    ratingReviewIDs: [],
}));

// Mock Categories
export const categories: CategoryItem[] = Array.from({ length: 10 }).map((_, index) => ({
    _id: `category${index}`,
    name: `Category${index}`,
    description: `Description for Category${index}`,
    parentCategoryId: index > 0 ? `category${index - 1}` : undefined,
}));

// Mock Services
export const services: ServiceItem[] = Array.from({ length: 10 }).map((_, index) => ({
    _id: `service${index}`,
    title: `Service Title ${index}`,
    description: `Service Description ${index}`,
    location: `Location ${index}`,
    imageUrl: `http://example.com/image/service${index}.jpg`,
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: index * 100,
    isFree: index % 2 === 0,
    url: `http://example.com/service/${index}`,
    categoryId: `category${index % categories.length}`,
    providerId: `user${index % users.length}`,
}));

// Mock RatingReviews
export const ratingReviews: RatingReviewItem[] = Array.from({ length: 10 }).map((_, index) => ({
    _id: `ratingReview${index}`,
    serviceID: `service${index % services.length}`,
    clientID: `user${index % users.length}`,
    rating: (index % 5) + 1,
    review: `This is review ${index}`,
    createdAt: new Date(),
    helpfulCount: index * 2,
    verifiedPurchase: index % 2 === 0,
    providerResponse: index % 2 === 0 ? {
        response: `Response from provider for review ${index}`,
        respondedAt: new Date(),
    } : undefined,
}));

// Mock Reservations
export const reservations: ReservationItem[] = Array.from({ length: 10 }).map((_, index) => ({
    _id: `reservation${index}`,
    createdAt: new Date(),
    stripeId: `stripe-${index}`,
    totalAmount: index * 1000,
    reservationDate: new Date(),
    clientId: users[index % users.length],
    serviceId: services[index % services.length],
    notes: `Notes for reservation ${index}`,
    status: ['pending', 'confirmed', 'completed', 'cancelled'][index % 4],
}));


// Dummy data export
export const dummyData = {
    users,
    categories,
    services,
    ratingReviews,
    reservations,
};

export default dummyData;
