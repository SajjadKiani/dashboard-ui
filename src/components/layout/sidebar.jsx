"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Links from "./links";
import Logo from "./Logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import {ArrowLeftToLine} from "lucide-react"

export default function Sidebar ({setOpen}) {

    const isDesktop = useMediaQuery("(min-width: 768px)")
    const pathname = usePathname()  

    return (
        <div className="flex flex-col gap-12">
            <div className="flex justify-between">
                <Logo />
                {!isDesktop && 
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <ArrowLeftToLine /> 
                    </Button>
                }
            </div>
            <nav className="flex-1 flex flex-col gap-2 justify-center">
                {Links.map((link, index) => 
                    <Button key={index} asChild variant={ pathname === link.path ? '' : 'ghost' }>
                        <Link href={link.path} className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md px-3 justify-start">
                            <link.icon className="mr-2 h-4 w-4" />
                            {link.title}
                            <span class="ml-auto dark:text-white">128</span>
                        </Link>
                    </Button>    
                )}
                
            </nav>
        </div>
    )
}