
import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "../firebase-admin"; 

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { uid, role } = body;

  if (!uid || !role) {
    return new NextResponse("Missing uid or role", { status: 400 });
  }
  try {
    await adminAuth.setCustomUserClaims(uid, { role });
    return NextResponse.json({ message: `Role '${role}' set for user ${uid}` });
  } catch (error) {
    console.error("Failed to set custom claims:", error);
    return new NextResponse("Error setting role", { status: 500 });
  }
}