export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function POST() {
  const user = await currentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const email = user.emailAddresses[0]?.emailAddress;
  const uid = user.id;

  try {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email,
        createdAt: new Date().toISOString(),
      });
    }

    return new Response("User stored", { status: 200 });
  } catch (error) {
    console.error("Firestore error:", error);
    return new Response("Server error", { status: 500 });
  }
}
