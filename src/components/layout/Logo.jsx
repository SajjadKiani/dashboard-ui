import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {Hexagon} from "lucide-react";

export default function Logo () {
    return (
        <div className="flex items-center">
            <Hexagon />
            <h1 className="font-bold text-xl">
                Dash
            </h1>
        </div>
    )
}