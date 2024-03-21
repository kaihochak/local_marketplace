import React from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const ProfileButton = () => {
  const { user } = useUser();
  
  if (!user) {
    return null; // or a placeholder avatar
  }

  return (
    <Link href="/profile">
        <Image
            src={user.imageUrl || '/avatar.png'}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-full"
        />
    </Link>
  );
};

export default ProfileButton
