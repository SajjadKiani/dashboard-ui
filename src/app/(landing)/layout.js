import { Navbar } from "@/components/layout/landing";
// import Navbar from "@/components/layout/Navbar"

export default function Layout ({children}) {
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">

            </div>
            {children}
        </div>
    )
}