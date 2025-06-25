import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query } from 'firebase/firestore';

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const { title, content } = await req.json();
  if (!title || !content) return new Response('Missing fields', { status: 400 });

  await addDoc(collection(db, 'blogs'), {
    title,
    content,
    authorId: user.id,
    createdAt: serverTimestamp(),
  });

  return new Response('Blog saved', { status: 200 });
}

export async function GET() {
  try {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    const blogs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return new Response('Failed to fetch blogs', { status: 500 });
  }
}
