import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices: any[] = [
    {
        _id: "65ffcac921567b16cf8e0a0b",
        title: "123",
        description: "123",
        imageUrl: "https://utfs.io/f/10e17672-4064-441d-a5c1-7527fe2d34b6-5482fr.jpg",
        url: "https://www.jacobchak.com",
        location: "123",
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Jacob",
            lastName: "Chak",
        },
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "123" },
    },

    {
        _id: "1",
        title: "Wall Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        image: [
            "https://picsum.photos/seed/picsum/700/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        categoryIDs: ["1", "2", "3"],
    },
    {
        _id: "2",
        title: "Service2",
        description: "Description2",
        image: [
            "https://picsum.photos/seed/picsum/500/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
        servicesOffered: {
            service1: {
                title: "Service2",
                price: "100",
            },
            service2: {
                title: "Service2",
                price: "200",
            },
            service3: {
                title: "Service2",
                price: "300",
            },
            service4: {
                title: "Service2",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        categoryIDs: ["1", "2", "3"],
    },
    {
        _id: "3",
        title: "Ass Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        categoryIDs: ["1", "2", "3"],

    },
    {
        _id: "4",
        title: "Me Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageUrl: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        categoryIDs: ["1", "2", "3"],
    }
];

export default dummyServices; // Export 'dummyServices' as the default export
