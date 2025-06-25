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
        try {
          const res = await fetch('/api/store-user', { method: 'POST' });

          if (res.ok) {
            router.push('/admin/post');
          } else {
            console.error('User storage failed:', await res.text());
          }
        } catch (error) {
          console.error('Network or server error:', error);
        }
      }
    };

    saveUser();
  }, [isSignedIn, user, router]);

  if (!isSignedIn || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SignIn routing="hash" />
      </div>
    );
  }

  return null;
}