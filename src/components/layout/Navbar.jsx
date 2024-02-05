import Logo from "./Logo";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar () {

    return (
        <header className="flex justify-between items-center">
            <Logo />

            <div>
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/78721995?v=4" alt="@shadcn" />
                    <AvatarFallback>SK</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}