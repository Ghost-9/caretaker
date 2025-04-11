import { signOut as firebaseSignOut } from 'firebase/auth'
import { signOut as nextAuthSignOut } from 'next-auth/react'
import { auth as firebaseAuth } from './firebase'
import toast from 'react-hot-toast'

const channel = new BroadcastChannel('auth')

export const logout = async () => {
  try {
    // 1. Firebase logout
    await firebaseSignOut(firebaseAuth)

    // 2. Broadcast logout event to other tabs
    channel.postMessage({ type: 'LOGOUT' })

    // 3. NextAuth logout with redirect
      await nextAuthSignOut({ callbackUrl: '/' })
      toast.success("Logged out!") 
  } catch (error) {
    console.error('Logout failed:', error)
  }
}