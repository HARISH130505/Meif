
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) return new Response("Unauthorized", { status: 401 });

    const body = await req.json();
    const { title, description, date, images } = body;

    if (!title || !description || !date || !images?.length) {
      return new Response("Missing fields", { status: 400 });
    }

    const eventRef = collection(db, "events");

    await addDoc(eventRef, {
      title,
      description,
      date: Timestamp.fromDate(new Date(date)), // ✅ convert to Firestore Timestamp
      images, // array of image URLs
      createdAt: Timestamp.now(),
      createdBy: user.id,
    });

    return new Response("Event saved", { status: 200 });
  } catch (err) {
    console.error("Error saving event:", err);
    return new Response("Server error", { status: 500 });
  }
}
