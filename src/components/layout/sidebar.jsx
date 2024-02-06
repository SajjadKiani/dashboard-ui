"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Links from "./links";
import Logo from "./Logo";

export default function Sidebar () {
    
    const pathname = usePathname()  

    return (
        <div className="flex flex-col gap-12">
            <Logo />
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