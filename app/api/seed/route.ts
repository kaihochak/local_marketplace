import { createUser, deleteUser } from '@/lib/actions/user.actions';
import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/models/user.model';
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

const dummyUser = {
    clerkId: "clerkId1",
    email: "chak@yahoo.com",
    username: "enyaumanzor",
    firstName: "Enya",
    lastName: "Umanzor",
    imageUrl: "https://picsum.photos/id/237/200/300",
};

export async function POST(req: Request) {

    console.log('Seeding database');

    // delete all users
    deleteAllUsers();

    // create users
    createAllUsers(dummyUser);    

    // let newUsers: typeof User[] = [];

    // // seed users
    // dummyUsers.forEach(async (user) => {
    //     const newUser = await User.create(user);
    //     if (!newUser) {
    //         throw new Error('Failed to create user');
    //     }
    //     console.log('Created user', newUser);
    //     newUsers.push(newUser);
    // });

    return NextResponse.json({ message: 'OK' });

}

const createAllUsers = async (dummyUser: any) => {
    const newUser = await createUser(dummyUser);
    if(newUser) {
        console.log('Created user', newUser);
    }
    return NextResponse.json({ message: 'OK', user: newUser })
}

const deleteAllUsers = async () => {

    console.log('Deleting all users');
    try {
        await connectToDatabase();
        const deleted = await User.deleteMany({});
        if (deleted) {
            console.log('Deleted all users', deleted);
        }
        return NextResponse.json({ message: 'OK', user: deleted })
    } catch (error) {
        console.error('Error deleting all users:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}