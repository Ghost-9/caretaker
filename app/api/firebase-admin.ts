// eslint-disable-next-line @typescript-eslint/no-explicit-any
import * as admin from "firebase-admin";


const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_JSON || "{}"
);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

 export const adminAuth = admin.auth();