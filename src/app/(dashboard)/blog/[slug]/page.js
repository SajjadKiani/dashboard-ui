import { TextEditor } from "@/components/common/TextEditor";



export default function Page ({params}) {
    

    const {slug} = params;

    return (
        <div>
            <TextEditor />
        </div>
    )
}