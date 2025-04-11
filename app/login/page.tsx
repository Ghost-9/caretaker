"use client"

import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import { signIn } from "next-auth/react"
export const dynamic = "force-dynamic";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
    const userCredetial =  await signInWithEmailAndPassword(auth, email, password)
      const token = await userCredetial.user.getIdToken()
      const result = await signIn("credentials", {
        redirect: false,
        token, 
        callbackUrl: "/admin",
      })
      if (result?.ok) {
        toast.success("Welcome back! ✨")
        window.location.href = result.url || "/admin"
      } else {
        throw new Error("NextAuth login failed")
      }
    } catch (err) {
      toast.error("Invalid credentials ❌")
      console.error("Login error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Login to Admin</h2>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </>
  )
}