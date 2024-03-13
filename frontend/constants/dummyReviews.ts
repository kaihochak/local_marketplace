import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';

export const dummmyRatingReviews: RatingReviewItem[] = [
    {
        _id: "1",
        serviceID: "1",
        clientID: "1",
        rating: 3,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "Find yourself a real job",
            respondedAt: new Date(),
        },
    },
    {
        _id: "2",
        serviceID: "2",
        clientID: "2",
        rating: 5,
        review: "Enya let's record a podcast together without drew...",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
    },
    {
        _id: "3",
        serviceID: "3",
        clientID: "3",
        rating: 4,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
    },
    {
        _id: "4",
        serviceID: "1",
        clientID: "4",
        rating: 2,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
    }
];

export default dummmyRatingReviews;
