"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface Client {
  id: number
  name: string
  email: string
}

interface ClientAuthContextType {
  client: Client | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const ClientAuthContext = createContext<ClientAuthContextType | undefined>(undefined)

export function ClientAuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [client, setClient] = useState<Client | null>(null)

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    setClient({
      id: 1,
      name: "Sarah Thompson",
      email: email,
    })
  }

  const logout = () => {
    setClient(null)
  }

  return <ClientAuthContext.Provider value={{ client, login, logout }}>{children}</ClientAuthContext.Provider>
}

export function useClientAuth() {
  const context = useContext(ClientAuthContext)
  if (context === undefined) {
    throw new Error("useClientAuth must be used within a ClientAuthProvider")
  }
  return context
}

