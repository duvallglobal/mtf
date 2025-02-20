"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calendar, ClipboardList, Home, MessageSquare, Settings } from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/client-portal",
    icon: Home,
  },
  {
    name: "Bookings",
    href: "/client-portal/bookings",
    icon: Calendar,
  },
  {
    name: "History",
    href: "/client-portal/history",
    icon: ClipboardList,
  },
  {
    name: "Messages",
    href: "/client-portal/messages",
    icon: MessageSquare,
  },
  {
    name: "Profile",
    href: "/client-portal/profile",
    icon: Settings,
  },
]

export function ClientPortalNav() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/client-portal" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>Client Portal</span>
        </Link>
        <div className="ml-8 hidden md:block">
          <div className="flex gap-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    pathname === item.href ? "bg-muted" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

