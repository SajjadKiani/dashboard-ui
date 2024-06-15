"use client"

import { Textarea } from "@/components/ui/textarea"
import TextToolbar from "./TextToolbar"

export default function TextEditorInput () {
    

    return (
        <div className="flex flex-col">
            {/* <TextToolbar /> */}
            <Textarea className="border-none bg-inherit text-[24px] focus-visible:ring-0  focus-visible:ring-offset-0"
              placeholder="write..." 
            />
        </div>
    )
}