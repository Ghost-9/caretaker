'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

export function AuthBroadcastProvider() {
  useEffect(() => {
    const channel = new BroadcastChannel('auth')

    channel.onmessage = (event) => {
      if (event.data?.type === 'LOGOUT') {
        // Trigger local logout
        signOut({ callbackUrl: '/' })
      }
    }

    return () => channel.close()
  }, [])

  return null // This component doesn't render anything
}