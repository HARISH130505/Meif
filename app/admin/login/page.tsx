'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const saveUser = async () => {
      if (isSignedIn && user) {
        await fetch('/api/store-user', { method: 'POST' });
        router.push('/admin/post');
      }
    };

    saveUser();
  }, [isSignedIn, user, router]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn routing="hash" />
    </div>
  );
}
