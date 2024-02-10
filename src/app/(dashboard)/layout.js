"use client"
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar";
import { useState, useEffect } from "react";

export default function Layout ({children}) {

  const [open, setOpen] = useState(true)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    setOpen(!isMobile)

    const handleResize = () => {
      const isMobileNow = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile !== isMobileNow)
        setOpen(isMobileNow ? false : open)
      
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

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
