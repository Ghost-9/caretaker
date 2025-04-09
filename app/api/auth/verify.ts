import { adminAuth } from "../firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string; status?: string; role?: string }>
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") 
    ? authHeader.split("Bearer ")[1] 
    : req.cookies["__session"];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    const role = (decodedToken as { role?: string }).role;

    if (role && ["admin", "editor"].includes(role)) {
      return res.status(200).json({ status: "authorized", role });
    } else {
      return res.status(403).json({ error: "Forbidden" });
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
}