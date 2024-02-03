"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Links from "./links";

export default function Sidebar () {
    
    const pathname = usePathname()  

    return (
        <nav className="flex flex-col gap-3">
            {Links.map((link, index) => 
                <Button key={index} asChild variant={ pathname === link.path ? '' : 'ghost' }>
                    <Link href={link.path}>
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.title}
                    </Link>
                </Button>    
            )}
            
        </nav>
    )
}