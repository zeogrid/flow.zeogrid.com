import type React from "react"
import NavBar from "@/components/nav-bar"
import NotificationBar from "@/components/notification-bar"


export default function WebSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">

      <div className="sticky top-0 z-40 bg-background">
        <NotificationBar/>
        <NavBar />
      </div>
      <main className="max-lg:p-4 h-full py-4 flex-1 overflow-y-auto transition-all ease-in-out duration-300">
        {children}
      </main>
    </div>
  )
}
