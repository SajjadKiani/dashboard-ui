'use client'

import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Button } from '@/components/ui/button'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <>
      {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="px-3 py-2 border border-1 rounded-lg bg-secondary flex gap-4">
          <Button
            className=" h-4 w-4"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            variant={editor.isActive('heading', { level: 1 }) ? '' : 'ghost'}
          >
            H1
          </Button>
          <Button
            className=" h-4 w-4 px-1"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            variant={editor.isActive('heading', { level: 2 }) ? '' : 'ghost'}
          >
            H2
          </Button>
          <Button
            className=" h-4 w-4"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            variant={editor.isActive('bulletList') ? '' : 'ghost'}
          >
            Bullet list
          </Button>
        </div>
      </FloatingMenu>}
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap