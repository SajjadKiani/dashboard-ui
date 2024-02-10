import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ModeToggle from "../common/ModeToggle";
import { Menu } from "lucide-react";

export default function Navbar ({setOpen}) {

    return (
        <header className="flex mx-3 justify-between items-center">

            <Button variant="ghost" onClick={() => setOpen(state => !state)} >
                <Menu />
            </Button>

            <div className="flex gap-3">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/78721995?v=4" alt="@shadcn" />
                    <AvatarFallback>SK</AvatarFallback>
                </Avatar>

                <ModeToggle />
            </div>
        </header>
    )
}