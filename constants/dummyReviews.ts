import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';

export const dummmyRatingReviews: RatingReviewItem[] = [
    {
        _id: "1",
        service: {
            _id: "1",
            title: "House Cleaning",
            provider: "Emily Smith",
            imageUrl: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-blue-denim-jeans-standing-beside-white-wooden-framed-glass-VRpjDw3WqqI"
        },
        clientID: "1",
        rating: 5,
        review: "Emily did an excellent job cleaning my house. It's spotless! Highly recommend her services.",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: { 
            response: "Thank you for the wonderful feedback! It was a pleasure working with you.",
            respondedAt: new Date(),
        },
    },
    {
        _id: "2",
        service: {
            _id: "2",
            title: "Plumbing Services",
            provider: "Michael Johnson",
            imageUrl: "https://source.unsplash.com/man-holding-orange-angle-grinder-UuW4psOb388"
        },
        clientID: "1",
        rating: 2,
        review: "I was not satisfied with the plumbing services provided. The issue was not fully resolved.",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "We apologize for any inconvenience caused. Please contact us directly so we can address your concerns.",
            respondedAt: new Date(),
        },
    },
    {
        _id: "3",
        service: {
            _id: "3",
            title: "Painting Services",
            provider: "David Smith",
            imageUrl: "https://source.unsplash.com/person-pressing-white-wall-c2thq3SXJiA"
        },
        clientID: "1",
        rating: 5,
        review: "David did an exceptional job with the painting services. The attention to detail was impressive.",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "Thank you so much for your kind words! It was a pleasure working on your project.",
            respondedAt: new Date(),
        },
    },
    {
        _id: "4",
        service: {
            _id: "1",
            title: "Electrical Services",
            provider: "Sarah Johnson",
            imageUrl: "https://source.unsplash.com/a-man-wearing-a-red-hard-hat-and-jacket-K9T9hdf4PmI"
        },
        clientID: "1",
        rating: 2,
        review: "The electrical services were satisfactory, but there were delays in scheduling the appointment.",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "We apologize for the scheduling inconvenience. We're continuously improving our processes to better serve our customers.",
            respondedAt: new Date(),
        },
    }
];

export default dummmyRatingReviews;
