import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices: any[] = [

    // Home
    // ASAP Plumbers
    {
        _id: "1",
        title: "ASAP Plumbers",
        description: "Experienced plumber providing reliable plumbing services for residential and commercial properties. We've got you covered.",
        imageUrl: "https://source.unsplash.com/plumber-fixing-pipe-AGYCFDdheQI",
        url: "https://www.plumbingforyou.com",
        location: "123 Elm Street, Anycity, USA",
        provider: "65fe9a5396346912b7163240",
        servicesOffered: [
            {
                title: "Leaky Faucet Repair",
                description: "Repairing leaks in faucets to prevent water wastage.",
                price: "80",
                id: "1"
            },
            {
                title: "Pipe Installation",
                description: "Installing new pipes or replacing old ones to ensure proper water flow.",
                price: "100",
                id: "2"
            },
            {
                title: "Drain Cleaning",
                description: "Clearing clogged drains to prevent water backup and damage.",
                price: "120",
                id: "3"
            },
            {
                title: "Water Heater Replacement",
                description: "Replacing old or malfunctioning water heaters with new ones for efficient hot water supply.",
                price: "150",
                id: "4"
            }
        ],
        averageRating: 4.8,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1c",
        bookmarked: true,
    },
    // Soph Cleaning
    {
        _id: "2",
        title: "Soph Cleaning",
        description: "Professional house cleaning services to keep your home spotless and tidy. We offer regular cleaning, deep cleaning, and move-in/move-out cleaning services.",
        imageUrl: "https://source.unsplash.com/house-cleaning-services-NI8AefHBKbY",
        url: "https://www.cleaningforyou.com",
        location: "789 Pine Street, Anycity, USA",
        provider: "65fe9a5396346912b7163242",
        servicesOffered: [
            {
                title: "Regular Cleaning",
                price: "80",
                id: "1"
            },
            {
                title: "Deep Cleaning",
                price: "100",
                id: "2"
            },
            {
                title: "Move-in/Move-out Cleaning",
                price: "120",
                id: "3"
            },
            {
                title: "Specialized Cleaning Services",
                price: "150",
                id: "4"
            }
        ],
        averageRating: 4.7,
        totalReviews: 36,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1c",
        bookmarked: true,
    },
    // Noah Lawns
    {
        _id: "3",
        title: "Noah Lawns",
        description: "Professional lawn care services including mowing, edging, weed control, and fertilization. Let us take care of your lawn so you can enjoy your outdoor space.",
        imageUrl: "https://source.unsplash.com/lawn-mowing-services-nzj3vSnjJnM",
        url: "https://www.lawnforyou.com",
        location: "123 Maple Street, Anycity, USA",
        provider: "65fe9a5396346912b7163243",
        servicesOffered: [
            {
                title: "Lawn Mowing",
                price: "60",
                id: "1"
            },
            {
                title: "Weed Control",
                price: "70",
                id: "2"
            },
            {
                title: "Fertilization",
                price: "80",
                id: "3"
            },
            {
                title: "Lawn Aeration",
                price: "90",
                id: "4"
            }
        ],
        averageRating: 4.6,
        totalReviews: 32,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1c",
        bookmarked: false,
    },
    // Home Security System
    {
        _id: "4",
        title: "Home Security System",
        description: "Protect your home with professional security system installation services. We offer customized solutions to keep your home safe and secure.",
        imageUrl: "https://source.unsplash.com/home-security-system-installation-MNzO4aDZPd4",
        url: "https://www.securityforyou.com",
        location: "456 Cedar Street, Anycity, USA",
        provider: "65fe9a5396346912b7163244",
        servicesOffered: {
            service1: {
                title: "Security System Installation",
                price: "200",
            },
            service2: {
                title: "Camera Installation",
                price: "150",
            },
            service3: {
                title: "Alarm System Setup",
                price: "180",
            },
            service4: {
                title: "Smart Home Integration",
                price: "250",
            },
        },
        averageRating: 4.9,
        totalReviews: 45,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1c",
        bookmarked: true,
    },
    // Home Organizer
    {
        _id: "5",
        title: "Home Organizer",
        description: "Professional home organizing services to declutter and organize your living spaces. From closets to kitchens, we'll help you create a space you'll love.",
        imageUrl: "https://source.unsplash.com/home-organizing-services-3XyZxQ3V9gY",
        url: "https://www.organizingforyou.com",
        location: "789 Walnut Street, Anycity, USA",
        provider: "65fe9a5396346912b7163245",
        servicesOffered: {
            service1: {
                title: "Closet Organization",
                price: "90",
            },
            service2: {
                title: "Kitchen Organization",
                price: "100",
            },
            service3: {
                title: "Home Office Setup",
                price: "110",
            },
            service4: {
                title: "Garage Organization",
                price: "120",
            },
        },
        averageRating: 4.8,
        totalReviews: 38,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1c",
        bookmarked: false,
    },

    // Personal
    // Personal Trainer
    {
        _id: "6",
        title: "Personal Trainer",
        description: "Certified personal trainer offering customized workout plans and one-on-one training sessions to help you achieve your fitness goals.",
        imageUrl: "https://source.unsplash.com/woman-in-black-tank-top-and-black-leggings-doing-yoga-E8VOttj22s4",
        url: "https://www.fitforyou.com",
        location: "456 Pine Street, Anycity, USA",
        provider: "65fe9a5396346912b7163255",
        servicesOffered: {
            lesson1: {
                title: "Strength Training",
                price: "70",
            },
            lesson2: {
                title: "HIIT Workouts",
                price: "75",
            },
            lesson3: {
                title: "Weight Loss Programs",
                price: "80",
            },
            lesson4: {
                title: "Functional Fitness Training",
                price: "85",
            },
        },
        averageRating: 4.7,
        totalReviews: 28,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: true,
    },
    // Yoga Instructor
    {
        _id: "7",
        title: "Yoga Instructor",
        description: "Experienced yoga instructor providing personalized yoga sessions tailored to your needs, whether you're a beginner or an advanced practitioner.",
        imageUrl: "https://source.unsplash.com/woman-practicing-yoga-by-the-sea-VASp8nTavz0",
        url: "https://www.yogaforyou.com",
        location: "789 Oak Avenue, Anytown, USA",
        provider: "65fe9a5396346912b7163256",
        servicesOffered: {
            lesson1: {
                title: "Beginner's Yoga",
                price: "60",
            },
            lesson2: {
                title: "Vinyasa Flow",
                price: "65",
            },
            lesson3: {
                title: "Yoga for Stress Relief",
                price: "70",
            },
            lesson4: {
                title: "Advanced Asanas",
                price: "75",
            },
        },
        averageRating: 4.9,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: false,
    },
    // Personal Nutritionist
    {
        _id: "8",
        title: "Personal Nutritionist",
        description: "Certified nutritionist offering personalized diet plans and nutritional counseling to help you achieve your health and wellness goals.",
        imageUrl: "https://source.unsplash.com/nutritionist-giving-advice-on-healthy-eating-to-client-yOd9LE2V0l8",
        url: "https://www.nutritionforyou.com",
        location: "123 Maple Street, Anycity, USA",
        provider: "65fe9a5396346912b7163257",
        servicesOffered: {
            consultation: {
                title: "Nutritional Consultation",
                price: "90",
            },
            mealPlan: {
                title: "Custom Meal Plans",
                price: "100",
            },
            groceryList: {
                title: "Grocery Shopping Lists",
                price: "110",
            },
            followup: {
                title: "Follow-up Sessions",
                price: "120",
            },
        },
        averageRating: 4.8,
        totalReviews: 42,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: true,
    },
    // Life Coach
    {
        _id: "9",
        title: "Life Coach",
        description: "Experienced life coach providing personalized coaching sessions to help you navigate life's challenges, set goals, and achieve personal growth.",
        imageUrl: "https://source.unsplash.com/life-coach-meeting-with-client-and-discussing-personal-goals-xPhrjfMPFuE",
        url: "https://www.lifecoaching.com",
        location: "456 Cedar Street, Anycity, USA",
        provider: "65fe9a5396346912b7163258",
        servicesOffered: {
            session1: {
                title: "Goal Setting",
                price: "80",
            },
            session2: {
                title: "Career Coaching",
                price: "85",
            },
            session3: {
                title: "Relationship Counseling",
                price: "90",
            },
            session4: {
                title: "Personal Development",
                price: "95",
            },
        },
        averageRating: 4.6,
        totalReviews: 38,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: false,
    },
    // Beauty Consultant
    {
        _id: "10",
        title: "Beauty Consultant",
        description: "Professional beauty consultant offering personalized beauty tips, skincare routines, and makeup advice to enhance your natural beauty.",
        imageUrl: "https://source.unsplash.com/beauty-consultant-applying-makeup-on-client-P2a8iNf79Ts",
        url: "https://www.beautyforyou.com",
        location: "789 Elm Street, Anycity, USA",
        provider: "65fe9a5396346912b7163259",
        servicesOffered: {
            consultation: {
                title: "Beauty Consultation",
                price: "70",
            },
            skincare: {
                title: "Skincare Routine",
                price: "75",
            },
            makeup: {
                title: "Makeup Tips",
                price: "80",
            },
            haircare: {
                title: "Hair Care Advice",
                price: "85",
            },
        },
        averageRating: 4.9,
        totalReviews: 45,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: true,
    },
    // Finance Advisor
    {
        _id: "11",
        title: "Finance Advisor",
        description: "Qualified financial advisor offering personalized financial planning services, budgeting advice, and investment strategies to help you achieve financial success.",
        imageUrl: "https://source.unsplash.com/financial-advisor-explaining-investment-plans-to-client-vFs5MsbXyNk",
        url: "https://www.financeforyou.com",
        location: "123 Oak Street, Anycity, USA",
        provider: "65fe9a5396346912b7163260",
        servicesOffered: {
            consultation: {
                title: "Financial Consultation",
                price: "100",
            },
            budgeting: {
                title: "Budget Planning",
                price: "110",
            },
            investment: {
                title: "Investment Strategies",
                price: "120",
            },
            retirement: {
                title: "Retirement Planning",
                price: "130",
            },
        },
        averageRating: 4.7,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d1e",
        bookmarked: false,
    },

    // Tech
    // Emily Types
    {
        _id: "12",
        title: "Emily Types",
        description: "Professional editing services for all your written content. From articles to manuscripts, we'll help you refine your writing and polish it to perfection.",
        imageUrl: "https://source.unsplash.com/editor-editing-texts-on-laptop-gfSUSlVmtC8",
        url: "https://www.editingforyou.com",
        location: "123 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163290",
        servicesOffered: {
            service1: {
                title: "Copy Editing",
                price: "50",
            },
            service2: {
                title: "Proofreading",
                price: "40",
            },
            service3: {
                title: "Manuscript Evaluation",
                price: "100",
            },
            service4: {
                title: "Content Development",
                price: "80",
            },
        },
        averageRating: 4.9,
        totalReviews: 42,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: true,
    },
    // IT Support by David
    {
        _id: "13",
        title: "IT Support by David",
        description: "Reliable IT support services to keep your systems running smoothly. From troubleshooting to system maintenance, we've got your back.",
        imageUrl: "https://source.unsplash.com/it-support-specialist-at-work-37Y2h5kQxXg",
        url: "https://www.itsupportforyou.com",
        location: "456 Oak Street, Anytown, USA",
        provider: "65fe9a5396346912b7163291",
        servicesOffered: {
            service1: {
                title: "Troubleshooting",
                price: "80",
            },
            service2: {
                title: "Network Setup",
                price: "100",
            },
            service3: {
                title: "Data Backup",
                price: "120",
            },
            service4: {
                title: "Software Installation",
                price: "70",
            },
        },
        averageRating: 4.7,
        totalReviews: 36,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: false,
    },
    // Michael Developments
    {
        _id: "14",
        title: "Michael Developments",
        description: "Experienced web and software developers to bring your ideas to life. From websites to applications, we'll build solutions tailored to your needs.",
        imageUrl: "https://source.unsplash.com/developer-at-work-PrwC08Um7X4",
        url: "https://www.developmentforyou.com",
        location: "789 Pine Street, Anytown, USA",
        provider: "65fe9a5396346912b7163292",
        servicesOffered: {
            service1: {
                title: "Website Development",
                price: "150",
            },
            service2: {
                title: "Mobile App Development",
                price: "200",
            },
            service3: {
                title: "Custom Software Solutions",
                price: "250",
            },
            service4: {
                title: "E-commerce Platforms",
                price: "180",
            },
        },
        averageRating: 4.8,
        totalReviews: 38,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: true,
    },
    // Ethan Cyber Consultancy
    {
        _id: "15",
        title: "Ethan Cyber Consultancy",
        description: "Protect your digital assets with expert cybersecurity consulting services. From risk assessments to security audits, we'll safeguard your business.",
        imageUrl: "https://source.unsplash.com/cybersecurity-consultant-at-work-wbuM2D2YBSw",
        url: "https://www.cybersecurityforyou.com",
        location: "456 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163294",
        servicesOffered: {
            service1: {
                title: "Security Assessments",
                price: "180",
            },
            service2: {
                title: "Penetration Testing",
                price: "200",
            },
            service3: {
                title: "Incident Response",
                price: "220",
            },
            service4: {
                title: "Security Training",
                price: "160",
            },
        },
        averageRating: 4.9,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: true,
    },
    // Cloud Solutions and Aid
    {
        _id: "16",
        title: "Cloud Solutions and Aid",
        description: "Customized cloud solutions to optimize your infrastructure. From architecture design to implementation, we'll help you leverage the power of the cloud.",
        imageUrl: "https://source.unsplash.com/cloud-solutions-architecture-f8l4VCfCQ3c",
        url: "https://www.cloudsolutionsforyou.com",
        location: "789 Cedar Street, Anytown, USA",
        provider: "65fe9a5396346912b7163295",
        servicesOffered: {
            service1: {
                title: "Cloud Migration",
                price: "250",
            },
            service2: {
                title: "Infrastructure Design",
                price: "300",
            },
            service3: {
                title: "Cost Optimization",
                price: "200",
            },
            service4: {
                title: "Disaster Recovery Planning",
                price: "280",
            },
        },
        averageRating: 4.8,
        totalReviews: 36,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: false,
    },
    // Analysis Freelance Soph
    {
        _id: "17",
        title: "Analysis Freelance Soph",
        description: "Data analysis services to help you make informed decisions. From data visualization to predictive analytics, we'll uncover insights from your data.",
        imageUrl: "https://source.unsplash.com/data-analysis-mltF7xsLvAI",
        url: "https://www.dataanalysisforyou.com",
        location: "123 Elm Street, Anytown, USA",
        provider: "65fe9a5396346912b7163293",
        servicesOffered: {
            service1: {
                title: "Data Visualization",
                price: "120",
            },
            service2: {
                title: "Statistical Analysis",
                price: "140",
            },
            service3: {
                title: "Predictive Modeling",
                price: "160",
            },
            service4: {
                title: "Data Cleaning",
                price: "100",
            },
        },
        averageRating: 4.6,
        totalReviews: 34,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d20",
        bookmarked: false,
    },

    // Advisory
    // Liv Leagal
    {
        _id: "65fe8fbcfb55d63b100a4d22",
        title: "Liv Leagal",
        description: "Expert legal advice and consultation for all your legal needs. From contract review to litigation support, we'll guide you through the legal complexities.",
        imageUrl: "https://source.unsplash.com/lawyer-legal-advice-Xp5gUHjTprg",
        url: "https://www.legaladviceforyou.com",
        location: "123 Oak Street, Anytown, USA",
        provider: "65fe9a5396346912b7163296",
        servicesOffered: {
            service1: {
                title: "Contract Review",
                price: "200",
            },
            service2: {
                title: "Legal Consultation",
                price: "250",
            },
            service3: {
                title: "Litigation Support",
                price: "300",
            },
            service4: {
                title: "Intellectual Property Advice",
                price: "280",
            },
        },
        averageRating: 4.9,
        totalReviews: 42,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d22",
        bookmarked: true,
    },
    // Elijah Business
    {
        _id: "19",
        title: "Elijah Business",
        description: "Strategic business consulting services to help you achieve your business objectives. From market analysis to growth strategies, we'll drive your success.",
        imageUrl: "https://source.unsplash.com/business-consulting-at-work-I4I-M8P56e8",
        url: "https://www.businessconsultingforyou.com",
        location: "456 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163297",
        servicesOffered: {
            service1: {
                title: "Strategic Planning",
                price: "300",
            },
            service2: {
                title: "Market Research",
                price: "250",
            },
            service3: {
                title: "Financial Analysis",
                price: "280",
            },
            service4: {
                title: "Business Process Optimization",
                price: "320",
            },
        },
        averageRating: 4.7,
        totalReviews: 36,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d22", name: "Advisory" },
        bookmarked: false,
    },
    // Ava Fiscal
    {
        _id: "20",
        title: "Ava Fiscal",
        description: "Comprehensive financial planning and investment management services to secure your financial future. From retirement planning to wealth management, we'll help you achieve your financial goals.",
        imageUrl: "https://source.unsplash.com/financial-advisor-talking-to-client-Ox1Hc4-0twM",
        url: "https://www.financialadvisorforyou.com",
        location: "789 Elm Street, Anytown, USA",
        provider: "65fe9a5396346912b7163298",
        servicesOffered: {
            service1: {
                title: "Retirement Planning",
                price: "350",
            },
            service2: {
                title: "Investment Portfolio Management",
                price: "400",
            },
            service3: {
                title: "Tax Planning",
                price: "320",
            },
            service4: {
                title: "Estate Planning",
                price: "380",
            },
        },
        averageRating: 4.8,
        totalReviews: 38,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d22",
        bookmarked: true,
    },
    // Marketing by Liam
    {
        _id: "21",
        title: "Marketing by Liam",
        description: "Strategic marketing consulting services to elevate your brand and drive growth. From market analysis to campaign management, we'll help you reach your target audience.",
        imageUrl: "https://source.unsplash.com/marketing-consulting-at-work-ZdplXik2dpo",
        url: "https://www.marketingconsultingforyou.com",
        location: "123 Pine Street, Anytown, USA",
        provider: "65fe9a5396346912b7163299",
        servicesOffered: {
            service1: {
                title: "Brand Strategy",
                price: "280",
            },
            service2: {
                title: "Digital Marketing Campaigns",
                price: "320",
            },
            service3: {
                title: "Social Media Management",
                price: "300",
            },
            service4: {
                title: "Content Marketing",
                price: "270",
            },
        },
        averageRating: 4.6,
        totalReviews: 34,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d22",
        bookmarked: false,
    },
    // Mia's Advisory  
    {
        _id: "22",
        title: "Mia's Advisory",
        description: "Expert investment advice and portfolio management services to grow your wealth. From asset allocation to risk management, we'll help you make informed investment decisions.",
        imageUrl: "https://source.unsplash.com/investment-advisor-at-work-XkwF7y-LH38",
        url: "https://www.investmentadvisorforyou.com",
        location: "456 Cedar Street, Anytown, USA",
        provider: "65fe9a5396346912b7163300",
        servicesOffered: {
            service1: {
                title: "Portfolio Management",
                price: "400",
            },
            service2: {
                title: "Wealth Planning",
                price: "380",
            },
            service3: {
                title: "Risk Assessment",
                price: "350",
            },
            service4: {
                title: "Retirement Planning",
                price: "360",
            },
        },
        averageRating: 4.9,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d22",
        bookmarked: true,
    },
    // HR Consultancy  
    {
        _id: "23",
        title: "HR Consultancy",
        description: "Strategic human resources consulting services to optimize your workforce. From talent acquisition to performance management, we'll help you build a high-performing team.",
        imageUrl: "https://source.unsplash.com/human-resources-consulting-at-work-41mBBXyr9Xo",
        url: "https://www.hrconsultingforyou.com",
        location: "789 Elm Street, Anytown, USA",
        provider: "65fe9a5396346912b7163301",
        servicesOffered: {
            service1: {
                title: "Talent Acquisition",
                price: "320",
            },
            service2: {
                title: "Employee Relations",
                price: "280",
            },
            service3: {
                title: "Performance Management",
                price: "300",
            },
            service4: {
                title: "HR Compliance",
                price: "340",
            },
        },
        averageRating: 4.7,
        totalReviews: 38,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d22",
        bookmarked: false,
    },

    // Creative
    // Fine Art Painting
    {
        _id: "24",
        title: "Fine Art Painting",
        description: "Original fine art paintings created with passion and creativity. Transform your space with unique artwork that reflects your style and personality.",
        imageUrl: "https://source.unsplash.com/painting-1",
        url: "https://www.example.com/fineartpainting",
        location: "123 Main Street, Anytown, USA",
        provider: "65fe9a5396346912b7163302",
        servicesOffered: [
            {
                title: "Oil Painting",
                price: "500",
                id: "1"
            },
            {
                title: "Watercolor Painting",
                price: "450",
                id: "2"
            },
            {
                title: "Portrait Painting",
                price: "600",
                id: "3"
            },
            {
                title: "Landscape Painting",
                price: "550",
                id: "4"
            }
        ],
        averageRating: 4.9,
        totalReviews: 45,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },
    // Professional Photography
    {
        _id: "25",
        title: "Professional Photography",
        description: "Capture memorable moments with stunning photography services. From weddings to corporate events, I provide high-quality images that tell your story.",
        imageUrl: "https://source.unsplash.com/photography-1",
        url: "https://www.example.com/professionalphotography",
        location: "456 Oak Avenue, Anytown, USA",
        provider: "65fe9a5396346912b7163303",
        servicesOffered: [
            {
                title: "Wedding Photography",
                price: "1200",
                id: "1"
            },
            {
                title: "Portrait Photography",
                price: "800",
                id: "2"
            },
            {
                title: "Event Photography",
                price: "1000",
                id: "3"
            },
            {
                title: "Product Photography",
                price: "900",
                id: "4"
            }
        ],
        averageRating: 4.8,
        totalReviews: 50,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },
    // Sculpture Art
    {
        _id: "26",
        title: "Sculpture Art",
        description: "Unique sculpture art pieces crafted with precision and creativity. Elevate your space with stunning sculptures that capture attention and inspire awe.",
        imageUrl: "https://source.unsplash.com/sculpture-1",
        url: "https://www.example.com/sculptureart",
        location: "789 Elm Street, Anytown, USA",
        provider: "65fe9a5396346912b7163304",
        servicesOffered: [
            {
                title: "Bronze Sculptures",
                price: "800",
                id: "1"
            },
            {
                title: "Abstract Sculptures",
                price: "750",
                id: "2"
            },
            {
                title: "Figurative Sculptures",
                price: "850",
                id: "3"
            },
            {
                title: "Outdoor Sculptures",
                price: "900",
                id: "4"
            }
        ],
        averageRating: 4.6,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },
    // Nature Photography 
    {
        _id: "27",
        title: "Nature Photography",
        description: "Capture the beauty of nature with breathtaking photography services. From landscapes to wildlife, I specialize in capturing nature's wonders.",
        imageUrl: "https://source.unsplash.com/nature-photography-1",
        url: "https://www.example.com/naturephotography",
        location: "123 Pine Street, Anytown, USA",
        provider: "65fe9a5396346912b7163305",
        servicesOffered: [
            {
                title: "Landscape Photography",
                price: "700",
                id: "1"
            },
            {
                title: "Wildlife Photography",
                price: "750",
                id: "2"
            },
            {
                title: "Nature Portraits",
                price: "650",
                id: "3"
            },
            {
                title: "Macro Photography",
                price: "800",
                id: "4"
            }
        ],
        averageRating: 4.9,
        totalReviews: 42,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },
    // Graphic Design
    {
        _id: "28",
        title: "Graphic Design",
        description: "High-quality graphic design services tailored to your needs. From logos to branding materials, I'll help bring your vision to life with creativity and precision.",
        imageUrl: "https://source.unsplash.com/graphic-design-1",
        url: "https://www.example.com/graphicdesign",
        location: "456 Oak Street, Anytown, USA",
        provider: "65fe9a5396346912b7163306",
        servicesOffered: [
            {
                title: "Logo Design",
                price: "500",
                id: "1"
            },
            {
                title: "Branding Materials",
                price: "600",
                id: "2"
            },
            {
                title: "Packaging Design",
                price: "700",
                id: "3"
            },
            {
                title: "Digital Illustrations",
                price: "550",
                id: "4"
            }
        ],
        averageRating: 4.8,
        totalReviews: 39,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },
    // Music Lessons  
    {
        _id: "29",
        title: "Music Lessons",
        description: "Professional music lessons tailored to your skill level and musical interests. Whether you're a beginner or an advanced player, I'll help you develop your musical talents.",
        imageUrl: "https://source.unsplash.com/music-lessons-1",
        url: "https://www.example.com/musiclessons",
        location: "789 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163307",
        servicesOffered: [
            {
                title: "Piano Lessons",
                price: "60",
                id: "1"
            },
            {
                title: "Guitar Lessons",
                price: "65",
                id: "2"
            },
            {
                title: "Violin Lessons",
                price: "70",
                id: "3"
            },
            {
                title: "Vocal Coaching",
                price: "55",
                id: "4"
            }
        ],
        averageRating: 4.5,
        totalReviews: 32,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d24",
        bookmarked: false
    },

    // Logistic
    // Moving Services
    {
        _id: "30",
        title: "Moving Services",
        description: "Professional moving services to make your relocation hassle-free. From packing and loading to transportation and unpacking, we'll handle every aspect of your move with care and efficiency.",
        imageUrl: "https://source.unsplash.com/moving-services-1",
        url: "https://www.example.com/movingservices",
        location: "123 Elm Street, Anytown, USA",
        provider: "65fe9a5396346912b7163308",
        servicesOffered: [
            {
                title: "Local Moving",
                description: "Moving within the same city or area.",
                price: "",
                id: "1"
            },
            {
                title: "Long Distance Moving",
                description: "Moving to a different city or state.",
                price: "",
                id: "2"
            },
            {
                title: "Packing and Unpacking",
                description: "Professional packing and unpacking services.",
                price: "",
                id: "3"
            },
            {
                title: "Furniture Assembly",
                description: "Assembly of furniture at your new location.",
                price: "",
                id: "4"
            }
        ],
        averageRating: 4.6,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },
    // Courier Services
    {
        _id: "31",
        title: "Courier Services",
        description: "Reliable courier services for fast and secure delivery of your packages and documents. Whether it's local or international, we'll ensure your items reach their destination safely and on time.",
        imageUrl: "https://source.unsplash.com/courier-services-1",
        url: "https://www.example.com/courierservices",
        location: "456 Oak Street, Anytown, USA",
        provider: "65fe9a5396346912b7163309",
        servicesOffered: [
            {
                title: "Same-day Delivery",
                description: "Fast delivery within the same day.",
                price: "",
                id: "1"
            },
            {
                title: "Express Delivery",
                description: "Priority delivery for urgent packages.",
                price: "",
                id: "2"
            },
            {
                title: "International Shipping",
                description: "Shipping packages to international destinations.",
                price: "",
                id: "3"
            },
            {
                title: "Document Delivery",
                description: "Secure delivery of important documents.",
                price: "",
                id: "4"
            }
        ],
        averageRating: 4.7,
        totalReviews: 42,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },
    // Equipment Rental
    {
        _id: "32",
        title: "Equipment Rental",
        description: "Flexible equipment rental services for your short-term and long-term needs. From construction equipment to party supplies, we have everything you need for your project or event.",
        imageUrl: "https://source.unsplash.com/equipment-rental-1",
        url: "https://www.example.com/equipmentrental",
        location: "789 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163310",
        servicesOffered: [
            {
                title: "Construction Equipment Rental",
                description: "Rental of heavy machinery and equipment.",
                price: "",
                id: "1"
            },
            {
                title: "Event Equipment Rental",
                description: "Rental of party supplies and equipment.",
                price: "",
                id: "2"
            },
            {
                title: "Tool Rental",
                description: "Rental of tools for various tasks and projects.",
                price: "",
                id: "3"
            },
            {
                title: "Vehicle Rental",
                description: "Rental of cars, trucks, and other vehicles.",
                price: "",
                id: "4"
            }
        ],
        averageRating: 4.9,
        totalReviews: 37,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },
    // Driver Services
    {
        _id: "33",
        title: "Driver Services",
        description: "Professional driver services for all your transportation needs. Whether it's a ride to the airport or a chauffeur for an event, our drivers provide safe and reliable transportation.",
        imageUrl: "https://source.unsplash.com/driver-services-1",
        url: "https://www.example.com/driverservices",
        location: "1010 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163313",
        servicesOffered: [
            {
                title: "Airport Transfers",
                price: "40",
                id: "1"
            },
            {
                title: "Event Chauffeur",
                price: "60",
                id: "2"
            },
            {
                title: "City Tours",
                price: "50",
                id: "3"
            },
            {
                title: "Corporate Transportation",
                price: "70",
                id: "4"
            }
        ],
        averageRating: 4.5,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },
    // Catering Service
    {
        _id: "34",
        title: "Catering Service",
        description: "Professional catering service providing delicious and customized menus for all your events. From corporate lunches to weddings, our experienced chefs will delight your guests with gourmet cuisine.",
        imageUrl: "https://source.unsplash.com/catering-service-1",
        url: "https://www.example.com/cateringservice",
        location: "456 Oak Street, Anytown, USA",
        provider: "65fe9a5396346912b7163319",
        servicesOffered: [
            {
                title: "Corporate Events",
                description: "Customized menus for business meetings and conferences.",
                price: "",
                id: "1"
            },
            {
                title: "Weddings",
                description: "Elegant and flavorful dishes for wedding receptions.",
                price: "",
                id: "2"
            },
            {
                title: "Private Parties",
                description: "Tailored menus for intimate gatherings and celebrations.",
                price: "",
                id: "3"
            },
            {
                title: "Special Occasions",
                description: "Unique menus for birthdays, anniversaries, and other events.",
                price: "",
                id: "4"
            }
        ],
        averageRating: 4.7,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },
    // Pet Sitting Service
    {
        _id: "35",
        title: "Pet Sitting Service",
        description: "Professional pet sitting service offering reliable care for your furry friends while you're away. Our experienced pet sitters provide personalized attention and ensure your pets are happy and comfortable in their own home.",
        imageUrl: "https://source.unsplash.com/pet-sitting-service-1",
        url: "https://www.example.com/petsittingservice",
        location: "789 Cedar Street, Anytown, USA",
        provider: "65fe9a5396346912b7163320",
        servicesOffered: [
            {
                title: "Dog Walking",
                description: "Regular walks to keep your dog healthy and active.",
                price: "30",
                id: "1"
            },
            {
                title: "Pet Feeding",
                description: "Scheduled feeding times to ensure your pets receive proper nutrition.",
                price: "20",
                id: "2"
            },
            {
                title: "Playtime",
                description: "Interactive play sessions to keep your pets entertained and stimulated.",
                price: "25",
                id: "3"
            },
            {
                title: "Overnight Pet Sitting",
                description: "Overnight stays for extra comfort and companionship for your pets.",
                price: "60",
                id: "4"
            }
        ],
        averageRating: 4.8,
        totalReviews: 50,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d26",
        bookmarked: false
    },

    // Collab
    // Application Development
    {
        _id: "36",
        title: "Application Development",
        description: "Custom application development services tailored to your business needs. From mobile apps to web applications, we help bring your ideas to life with cutting-edge technology.",
        imageUrl: "https://source.unsplash.com/application-development",
        url: "https://www.example.com/applicationdevelopment",
        location: "123 Oak Street, Anycity, USA",
        provider: "65fe9a5396346912b7163328",
        servicesOffered: [
            {
                title: "iOS App Development",
                description: "Expertise in building native iOS applications for iPhones and iPads.",
                price: "2000",
                id: "1"
            },
            {
                title: "Android App Development",
                description: "Proficient in creating high-quality Android apps for various devices.",
                price: "1800",
                id: "2"
            },
            {
                title: "Web Application Development",
                description: "Design and development of responsive web applications for diverse business needs.",
                price: "2500",
                id: "3"
            }
        ],
        averageRating: 4.9,
        totalReviews: 65,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },
    // Cake Baking Workshop
    {
        _id: "37",
        title: "Cake Baking Workshop",
        description: "Fun and interactive cake baking workshops for beginners and enthusiasts. Learn essential baking techniques, decorate cakes like a pro, and unleash your creativity!",
        imageUrl: "https://source.unsplash.com/cake-baking-workshop",
        url: "https://www.example.com/cakebakingworkshop",
        location: "456 Maple Avenue, Anycity, USA",
        provider: "65fe9a5396346912b7163329",
        servicesOffered: [
            {
                title: "Basic Cake Baking",
                description: "Hands-on training in baking delicious cakes from scratch.",
                price: "100",
                id: "1"
            },
            {
                title: "Cake Decorating",
                description: "Master the art of cake decorating techniques, including frosting, piping, and fondant.",
                price: "120",
                id: "2"
            },
            {
                title: "Advanced Cake Design",
                description: "Explore advanced cake design concepts and create stunning cake masterpieces.",
                price: "150",
                id: "3"
            }
        ],
        averageRating: 4.7,
        totalReviews: 50,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },
    // Data Science Bootcamp
    {
        _id: "38",
        title: "Data Science Bootcamp",
        description: "Join our intensive data science bootcamp and become proficient in Python, machine learning, data visualization, and more. Gain hands-on experience through real-world projects and launch your career in data science.",
        imageUrl: "https://source.unsplash.com/data-science-bootcamp",
        url: "https://www.example.com/datasciencebootcamp",
        location: "789 Oak Lane, Anycity, USA",
        provider: "65fe9a5396346912b7163327",
        servicesOffered: [
            {
                title: "Python Fundamentals",
                description: "Learn the basics of Python programming language.",
                price: "1200",
                id: "1"
            },
            {
                title: "Machine Learning",
                description: "Master machine learning algorithms and techniques.",
                price: "1500",
                id: "2"
            },
            {
                title: "Data Visualization",
                description: "Explore data visualization libraries and tools.",
                price: "1000",
                id: "3"
            }
        ],
        averageRating: 4.8,
        totalReviews: 55,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },
    // Photography Workshop
    {
        _id: "39",
        title: "Photography Workshop",
        description: "Join our photography workshop and unleash your creativity behind the lens. Learn photography techniques, composition, lighting, and post-processing to capture stunning images.",
        imageUrl: "https://source.unsplash.com/photography-workshop",
        url: "https://www.example.com/photographyworkshop",
        location: "456 Elm Street, Anycity, USA",
        provider: "65fe9a5396346912b7163326",
        servicesOffered: [
            {
                title: "Basic Photography Skills",
                description: "Master the fundamentals of photography, including exposure, composition, and camera settings.",
                price: "150",
                id: "1"
            },
            {
                title: "Advanced Lighting Techniques",
                description: "Explore advanced lighting techniques to enhance your photographs.",
                price: "180",
                id: "2"
            },
            {
                title: "Portrait Photography",
                description: "Learn the art of capturing compelling portraits, including posing and directing subjects.",
                price: "200",
                id: "3"
            }
        ],
        averageRating: 4.6,
        totalReviews: 48,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },
    // Web Development Bootcamp
    {
        _id: "40",
        title: "Web Development Bootcamp",
        description: "Embark on a journey to become a proficient web developer. Our bootcamp covers HTML, CSS, JavaScript, and frameworks like React and Node.js. Build real-world projects and launch your career in web development.",
        imageUrl: "https://source.unsplash.com/web-development-bootcamp",
        url: "https://www.example.com/webdevelopmentbootcamp",
        location: "123 Maple Avenue, Anycity, USA",
        provider: "65fe9a5396346912b7163325",
        servicesOffered: [
            {
                title: "HTML & CSS Fundamentals",
                description: "Learn the basics of HTML and CSS for web development.",
                price: "1000",
                id: "1"
            },
            {
                title: "JavaScript Essentials",
                description: "Master JavaScript programming language for building interactive web applications.",
                price: "1200",
                id: "2"
            },
            {
                title: "React.js Development",
                description: "Explore React.js framework for building dynamic user interfaces.",
                price: "1500",
                id: "3"
            }
        ],
        averageRating: 4.9,
        totalReviews: 60,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },
    // Graphic Design Workshop
    {
        _id: "41",
        title: "Graphic Design Workshop",
        description: "Unlock your creativity with our graphic design workshop. Learn graphic design principles, typography, color theory, and use industry-standard tools like Adobe Photoshop and Illustrator.",
        imageUrl: "https://source.unsplash.com/graphic-design-workshop",
        url: "https://www.example.com/graphicdesignworkshop",
        location: "789 Pine Street, Anycity, USA",
        provider: "65fe9a5396346912b7163324",
        servicesOffered: [
            {
                title: "Graphic Design Fundamentals",
                description: "Master the basics of graphic design, including layout, typography, and composition.",
                price: "120",
                id: "1"
            },
            {
                title: "Logo Design",
                description: "Learn logo design principles and techniques to create memorable brand identities.",
                price: "150",
                id: "2"
            },
            {
                title: "Illustration",
                description: "Explore digital illustration techniques and unleash your creativity.",
                price: "180",
                id: "3"
            }
        ],
        averageRating: 4.7,
        totalReviews: 52,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d28",
        bookmarked: false
    },

    // Health
    // General Physician
    {
        _id: "42",
        title: "General Physician",
        description: "Comprehensive medical care provided by board-certified general physicians. We offer diagnosis, treatment, and preventive care for a wide range of health conditions.",
        imageUrl: "https://source.unsplash.com/general-physician",
        url: "https://www.example.com/generalphysician",
        location: "123 Elm Street, Anycity, USA",
        provider: "65fe9a5396346912b716332a",
        servicesOffered: [
            {
                title: "Routine Checkup",
                description: "Annual physical examination to assess overall health and detect any potential health issues.",
                price: "100",
                id: "1"
            },
            {
                title: "Medical Consultation",
                description: "Consultation for diagnosis, treatment, and management of various health conditions.",
                price: "150",
                id: "2"
            },
            {
                title: "Chronic Disease Management",
                description: "Ongoing care and treatment for chronic health conditions such as diabetes, hypertension, and asthma.",
                price: "200",
                id: "3"
            }
        ],
        averageRating: 4.8,
        totalReviews: 70,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },
    // Dentist
    {
        _id: "43",
        title: "Dentist",
        description: "Comprehensive dental care provided by experienced dentists. We offer preventive, restorative, and cosmetic dental treatments to maintain your oral health.",
        imageUrl: "https://source.unsplash.com/dentist",
        url: "https://www.example.com/dentist",
        location: "456 Oak Lane, Anycity, USA",
        provider: "65fe9a5396346912b716332b",
        servicesOffered: [
            {
                title: "Dental Cleaning",
                description: "Professional dental cleaning to remove plaque, tartar, and stains from your teeth.",
                price: "80",
                id: "1"
            },
            {
                title: "Cavity Filling",
                description: "Treatment for dental cavities using tooth-colored composite fillings.",
                price: "120",
                id: "2"
            },
            {
                title: "Teeth Whitening",
                description: "Professional teeth whitening treatment to brighten and enhance your smile.",
                price: "200",
                id: "3"
            }
        ],
        averageRating: 4.7,
        totalReviews: 65,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },
    // Pediatrician 
    {
        _id: "44",
        title: "Pediatrician",
        description: "Specialized medical care for infants, children, and adolescents provided by pediatricians. We focus on promoting children's health, growth, and development.",
        imageUrl: "https://source.unsplash.com/pediatrician",
        url: "https://www.example.com/pediatrician",
        location: "789 Pine Street, Anycity, USA",
        provider: "65fe9a5396346912b716332c",
        servicesOffered: [
            {
                title: "Well-Child Visits",
                description: "Regular checkups to monitor growth, development, and overall health of children.",
                price: "120",
                id: "1"
            },
            {
                title: "Immunizations",
                description: "Vaccination services to protect children against various infectious diseases.",
                price: "80",
                id: "2"
            },
            {
                title: "Childhood Illness Management",
                description: "Diagnosis and treatment of common childhood illnesses such as cold, flu, and ear infections.",
                price: "150",
                id: "3"
            }
        ],
        averageRating: 4.9,
        totalReviews: 80,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },
    // Optometrist
    {
        _id: "45",
        title: "Optometrist",
        description: "Comprehensive eye care provided by licensed optometrists. We offer vision testing, prescription eyewear, and management of various eye conditions.",
        imageUrl: "https://source.unsplash.com/optometrist",
        url: "https://www.example.com/optometrist",
        location: "123 Maple Avenue, Anycity, USA",
        provider: "65fe9a5396346912b716332d",
        servicesOffered: [
            {
                title: "Comprehensive Eye Exam",
                description: "Thorough evaluation of vision and eye health to detect refractive errors and eye diseases.",
                price: "100",
                id: "1"
            },
            {
                title: "Contact Lens Fitting",
                description: "Custom fitting and prescription of contact lenses for clear and comfortable vision.",
                price: "120",
                id: "2"
            },
            {
                title: "Treatment of Eye Conditions",
                description: "Management and treatment of common eye conditions such as dry eyes, allergies, and infections.",
                price: "150",
                id: "3"
            }
        ],
        averageRating: 4.6,
        totalReviews: 60,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },
    // Dermatologist
    {
        _id: "46",
        title: "Dermatologist",
        description: "Specialized skin care provided by dermatologists. We offer diagnosis, treatment, and management of various skin conditions and diseases.",
        imageUrl: "https://source.unsplash.com/dermatologist",
        url: "https://www.example.com/dermatologist",
        location: "456 Elm Street, Anycity, USA",
        provider: "65fe9a5396346912b716332e",
        servicesOffered: [
            {
                title: "Acne Treatment",
                description: "Customized treatment plans for acne breakouts and acne-related skin issues.",
                price: "120",
                id: "1"
            },
            {
                title: "Skin Cancer Screening",
                description: "Early detection and screening for skin cancer using advanced dermatoscopic techniques.",
                price: "150",
                id: "2"
            },
            {
                title: "Cosmetic Dermatology",
                description: "Cosmetic procedures to improve skin appearance and address aesthetic concerns.",
                price: "200",
                id: "3"
            }
        ],
        averageRating: 4.8,
        totalReviews: 75,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },
    // Chiropractor
    {
        _id: "47",
        title: "Chiropractor",
        description: "Holistic chiropractic care focused on spinal health and overall wellness. We offer adjustments, therapies, and lifestyle recommendations to alleviate pain and improve mobility.",
        imageUrl: "https://source.unsplash.com/chiropractor",
        url: "https://www.example.com/chiropractor",
        location: "789 Oak Lane, Anycity, USA",
        provider: "65fe9a5396346912b716332f",
        servicesOffered: [
            {
                title: "Spinal Adjustment",
                description: "Manual manipulation of the spine to restore proper alignment and function.",
                price: "80",
                id: "1"
            },
            {
                title: "Therapeutic Massage",
                description: "Targeted massage therapy to reduce muscle tension and improve circulation.",
                price: "100",
                id: "2"
            },
            {
                title: "Wellness Counseling",
                description: "Lifestyle counseling and recommendations for promoting overall health and well-being.",
                price: "120",
                id: "3"
            }
        ],
        averageRating: 4.7,
        totalReviews: 70,
        ratingReviewIDs: [],
        category: "65fe8fbcfb55d63b100a4d2a",
        bookmarked: false
    },


    // Tutor
    // Guitar Tutor
    {
        _id: "48",
        title: "Guitar Tutor",
        description: "I am a guitar tutor and I teach guitar to people who want to learn guitar",
        imageUrl: "https://source.unsplash.com/person-playing-guitar-fCEJGBzAkrU",
        url: "https://www.chrisdlake.com",
        location: "123",
        provider: "65fe9a5396346912b7163251",
        servicesOffered: {
            lesson1: {
                title: "Guitar Tutor",
                price: "100",
            },
            lesson2: {
                title: "Guitar Tutor",
                price: "200",
            },
            lesson3: {
                title: "Guitar Tutor",
                price: "300",
            },
            lesson4: {
                title: "Guitar Tutor",
                price: "400",
            },
        },
        averageRating: 3.2,
        totalReviews: 12,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true,
    },
    // Cooking Classes
    {
        _id: "49",
        title: "Cooking Classes",
        description: "Join our cooking classes to learn delicious recipes from around the world, taught by professional chefs.",
        imageUrl: "https://source.unsplash.com/woman-in-black-and-white-striped-long-sleeve-shirt-holding-stainless-steel-bowl-UyEmagArOLY",
        url: "https://www.culinarydelights.com",
        location: "321 Elm Avenue, Anycity, USA",
        provider: "65fe9a5396346912b7163254",
        servicesOffered: {
            lesson1: {
                title: "Italian Cuisine Masterclass",
                price: "80",
            },
            lesson2: {
                title: "Asian Fusion Cooking",
                price: "85",
            },
            lesson3: {
                title: "French Pastry Workshop",
                price: "90",
            },
            lesson4: {
                title: "Vegetarian Cooking Essentials",
                price: "75",
            },
        },
        averageRating: 4.9,
        totalReviews: 30,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true,
    },
    // Language Tutor
    {
        _id: "50",
        title: "Language Tutor",
        description: "Experienced language tutor offering personalized lessons in Spanish, French, and German.",
        imageUrl: "https://source.unsplash.com/woman-in-black-sleeveless-top-h6gCRTCxM7o",
        url: "https://www.languagemasters.com",
        location: "789 Maple Street, Anytown, USA",
        provider: "65fe9a5396346912b7163256",
        servicesOffered: {
            lesson1: {
                title: "Beginner Spanish",
                price: "40",
            },
            lesson2: {
                title: "Intermediate French",
                price: "50",
            },
            lesson3: {
                title: "Advanced German",
                price: "60",
            },
            lesson4: {
                title: "Conversation Practice",
                price: "45",
            },
        },
        averageRating: 4.6,
        totalReviews: 22,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true,
    },
    // Photography Lessons
    {
        _id: "51",
        title: "Photography Lessons",
        description: "Professional photography lessons tailored to your skill level, covering everything from basic camera techniques to advanced composition.",
        imageUrl: "https://source.unsplash.com/man-on-top-of-mountain-taking-pictures-jg-6ARMiaPM",
        url: "https://www.shuttermasters.com",
        location: "123 Main Street, Anytown, USA",
        provider: "65fe9a5396346912b7163257",
        servicesOffered: {
            lesson1: {
                title: "Introduction to Photography",
                price: "60",
            },
            lesson2: {
                title: "Portrait Photography",
                price: "70",
            },
            lesson3: {
                title: "Landscape Photography",
                price: "75",
            },
            lesson4: {
                title: "Photo Editing Techniques",
                price: "80",
            },
        },
        averageRating: 4.9,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true,
    },
    // Yoga Instructor
    {
        _id: "52",
        title: "Yoga Instructor",
        description: "Certified yoga instructor offering personalized yoga sessions tailored to individual needs and goals.",
        imageUrl: "https://source.unsplash.com/yoga-instructor",
        url: "https://www.yogamasters.com",
        location: "456 Oak Street, Anycity, USA",
        provider: "65fe9a5396346912b7163258",
        servicesOffered: {
            lesson1: {
                title: "Hatha Yoga Basics",
                price: "50"
            },
            lesson2: {
                title: "Vinyasa Flow",
                price: "60"
            },
            lesson3: {
                title: "Yin Yoga",
                price: "55"
            },
            lesson4: {
                title: "Meditation Techniques",
                price: "45"
            }
        },
        averageRating: 4.8,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true
    },
    // Math Tutor
    {
        _id: "52",
        title: "Yoga Instructor",
        description: "Certified yoga instructor offering personalized yoga sessions tailored to individual needs and goals.",
        imageUrl: "https://source.unsplash.com/yoga-instructor",
        url: "https://www.yogamasters.com",
        location: "456 Oak Street, Anycity, USA",
        provider: "65fe9a5396346912b7163258",
        servicesOffered: {
            lesson1: {
                title: "Hatha Yoga Basics",
                price: "50"
            },
            lesson2: {
                title: "Vinyasa Flow",
                price: "60"
            },
            lesson3: {
                title: "Yin Yoga",
                price: "55"
            },
            lesson4: {
                title: "Meditation Techniques",
                price: "45"
            }
        },
        averageRating: 4.8,
        totalReviews: 40,
        ratingReviewIDs: [],
        category: "66139dbbef3d91706ad1d17e",
        bookmarked: true
    },

];

export default dummyServices; // Export 'dummyServices' as the default export
