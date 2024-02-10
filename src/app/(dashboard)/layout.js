"use client"
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Layout ({children}) {

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [open, setOpen] = useState(isDesktop)

  useEffect(() => {
    setOpen(isDesktop)
  },[isDesktop])

  return (
    <main className="flex min-h-screen bg-secondary/30">
      <aside className={`px-4 py-5 min-w-[250px] transition-all duration-300 ${!open && '-ml-64'}`}>
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">

          <div className="pr-8 pl-1 py-5">
            <Navbar setOpen={setOpen} />
          </div>

          <div className="flex-1 container">
            {children}
          </div>

      </div>
    </main>
  );
}
