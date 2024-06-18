import Tiptap from "@/components/common/Tiptap";

export default function Page ({params}) {
    

    const {slug} = params;

    return (
        <div>
            <Tiptap />
        </div>
    )
}