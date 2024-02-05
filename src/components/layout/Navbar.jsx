import Logo from "./Logo";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ModeToggle from "../common/ModeToggle";

export default function Navbar () {

    return (
        <header className="flex justify-between items-center">
            <Logo />

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