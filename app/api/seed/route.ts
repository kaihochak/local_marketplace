import { createUser, deleteUser } from '@/lib/actions/user.actions';
import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/models/user.model';
import { dummyUsers } from '@/constants/dummyUsersSeeding';
import { dummyServices } from '@/constants/dummyServicesSeeding';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    console.log('Seeding database');

    // delete all users
    await deleteAllUsers();

    // create users
    await createAllUsers(dummyUsers);    

    return NextResponse.json({ message: 'OK' });
}

const createAllUsers = async (dummyUsers: any[]) => {

    console.log('Creating all users');

    // create users
    for (let i = 0; i < dummyUsers.length; i++) {
        const user = dummyUsers[i];
        await createUser(user);
    }

    
    return NextResponse.json({ message: 'OK', user: dummyUsers });
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