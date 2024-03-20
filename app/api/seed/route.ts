import { connectToDatabase } from '@/lib/database';
import User, { IUser } from '@/lib/database/models/user.model';
// import { dummyUsers } from '@/constants/dummyUsers';
import { NextResponse } from 'next/server';


const dummyUsers = [
    {
        clerkId: "clerkId1",
        imageURL: "https://picsum.photos/id/237/200/300",
        email: "chak@yahoo.com",
        website: "enyaumanzor.com",
        username: "enyaumanzor",
        firstName: "Enya",
        lastName: "Umanzor",
        location: "24 whitecres Ave, Calgary AB",
        contactNumber: "587 946 5892",
        serviceIDs: ["1", "2"],
        ratingReviewIDs: ["1", "2"],
    },
];

export async function POST(req: Request) {

    console.log('Seeding database');
    
    let newUsers: IUser[] = [];

    // seed users
    dummyUsers.forEach(async (user) => {
        const newUser = await User.create(user);
        if (!newUser) {
            throw new Error('Failed to create user');
        }
        console.log('Created user', newUser);
        newUsers.push(newUser);
    });

    // return response
    return NextResponse.json({ message: 'OK', user: newUsers })

}


// // Define a function to seed the database
// async function seedDatabase() {

//     try {
//         // Connect to the database
//         const db = await connectToDatabase();
//         if (!db) {
//             throw new Error('Failed to connect to database');
//         }
//         console.log('Connected to database:', db.connection.name);

//         // Seed the database with dummy data
//         await seedUsers();

//         console.log('Database seeding successful');
//     } catch (error) {
//         console.error('Error seeding database:', error);
//     } finally {
//         // Close database connection
//         await mongoose.connection.close();
//     }
// }

// async function seedUsers() {
//     // Delete existing users
//     console.log('Deleting existing users');
//     const deletedUsers = await User.deleteMany({});
//     if (deletedUsers.deletedCount === 0) {
//         throw new Error('Failed to delete users');
//     }
//     console.log('Deleted', deletedUsers.deletedCount, 'users');

//     // Insert dummy users into the database
//     console.log('Seeding database with dummy users');
//     const insertedUsers = await User.insertMany(dummyUsers as IUser[]);
//     if (insertedUsers.length === 0) {
//         throw new Error('Failed to insert users');
//     }
//     console.log('Inserted', insertedUsers.length, 'users');

//     return insertedUsers;
// }



// // Define the API route handler
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//     console.log('Seeding database');

//     if (req.method === 'POST') {
//         try {
//             // Call the seeding function
//             await seedDatabase();
//             res.status(200).json({ message: 'Database seeded successfully' });
//         } catch (error) {
//             console.error('Error seeding database:', error);
//             res.status(500).json({ error: 'An error occurred while seeding database' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }