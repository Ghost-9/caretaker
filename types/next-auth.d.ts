import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      uid: string // ✅ our custom field (Firebase UID)
    }
  }

  interface User {
    id: string // ✅ comes from authorize() return value
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string // ✅ store Firebase UID in the token
  }
}