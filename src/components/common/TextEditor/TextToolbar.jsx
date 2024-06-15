import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    AlignCenter, AlignLeft, AlignRight, AlignJustify, Baseline, Bold, Italic
} from "lucide-react"

export default function TextToolbar () {
    

    return (
        <div className="flex justify-start border items-center border-1 px-2 py-1 bg-white rounded-t-lg gap-2">
            <div className="">
                <Button size="sm" variant="ghost" > <AlignLeft size={16} /> </Button>
                <Button size="sm" variant="ghost" > <AlignCenter size={16} /> </Button>
                <Button size="sm" variant="ghost" > <AlignRight size={16} /> </Button>
                <Button size="sm" variant="ghost" > <AlignJustify size={16} /> </Button>
            </div>
            <div className="border-r-2 mx-1 border-black w-1 h-[100px]" orientation="vertical" />
            <p>
                test
            </p>
        </div>
    )
}