import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { adminAuth } from "../app/api/firebase-admin"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        token: { label: "Firebase ID Token", type: "text" },
      },
      async authorize(credentials) {
        try {
          const decodedToken = await adminAuth.verifyIdToken(credentials?.token || "")
          return {
            id: decodedToken.uid,
            email: decodedToken.email,
              name: decodedToken.name || "",
     
          }
        } catch (error) {
          console.error("Failed to verify Firebase token", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
          token.uid = user.id
          token.email = user.email
          token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      session.user.uid = token.uid
      session.user.email = token.email
      session.user.name = token.name
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}