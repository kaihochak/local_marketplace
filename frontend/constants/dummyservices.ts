import { ServiceItem } from '@/lib/database/models/service.model';

export const services: ServiceItem[] = [
    {
        _id: "1",
        title: "Wall Painter",
        description: "Service Description",
        image: [
            "http://example.com/image/service3.jpg",
            "http://example.com/image/service3.jpg",
            "http://example.com/image/service3.jpg",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: {
            _id: "1",
            profileURL: "http://example.com/profile",
            firstName: "Enya",
            lastName: "Umanzor",
            email: "enya.umanzor@gmail.com",
            phone: "587 946 5892",
            location: "24 whitecres Ave, Calgary AB",
            website: "enyaumanzor.com",
        },
        servicesOffered: {
            service1: {
                title: "Service 1",
                price: "100",
            },
            service2: {
                title: "Service 2",
                price: "200",
            },
            service3: {
                title: "Service 3",
                price: "300",
            },
            service4: {
                title: "Service 4",
                price: "400",
            },
        },
        reviews: {
            review1: {
                user: {
                    _id: "1",
                    profileURL: "http://example.com/profile",
                    firstName: "Drew",
                    lastName: "Phillips",
                },
                rating: "3",
                comment: "Hey, I like that...",
            },
            review2: {
                user: {
                    _id: "2",
                    profileURL: "http://example.com/profile",
                    firstName: "Ky",
                    lastName: "Newman",
                },
                rating: "5",
                comment: "Enya let's record a podcast together without drew...",
            },
            review3: {
                user: {
                    _id: "3",
                    profileURL: "http://example.com/profile",
                    firstName: "Josiah",
                    lastName: "",
                },
                rating: "2",
                comment: "Find yourself a real job",
            },
        }
    },
    {
        _id: "2",
        title: "Wall Painter",
        description: "Service Description",
        image: {
            url1: "http://example.com/image/service3.jpg",
            url2: "http://example.com/image/service3.jpg",
            url3: "http://example.com/image/service3.jpg",
        },
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: {
            _id: "1",
            profileURL: "http://example.com/profile",
            firstName: "Enya",
            lastName: "Umanzor",
            email: "
