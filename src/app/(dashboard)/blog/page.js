import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardDescription, CardHeader, CardFooter } from "@/components/ui/card"
import { Pencil, Trash, Settings } from "lucide-react"
import Toolbar from "@/components/common/Toolbar"
import moment from "moment"
import Link from "next/link"

export default function Page() {

    const date = Date.now()
    
    const posts = [
        {title: 'Post Title 1', description: 'descrption', shortContent: 'short Content', content: 'content', slug: 'test1', date},
        {title: 'Post Title 2', description: 'descrption', shortContent: 'short Content', content: 'content', slug: 'test2', date},
        {title: 'Post Title 3', description: 'descrption', shortContent: 'short Content', content: 'content', slug: 'test3', date},
    ]

    return (
        <div className="flex flex-col gap-4">
            <Toolbar title={'Blog'} />

            <div className="grid grid-cols-2 gap-4 justify-center">
                {posts.map((post, index) => 
                
                
                    <div key={index}>
                        <Card className="">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.description} - {moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {post.shortContent}
                            </CardContent>
                            <CardFooter className="flex justify-end gap-3">
                                <Button size="sm" className="rounded-full" variant='outline'><Settings /></Button>
                                <Button size="sm" className="rounded-full" variant="destructive"><Trash /></Button>
                                <Button size="sm" className="rounded-full" asChild>
                                    <Link href={`/blog/${post.slug}`}>
                                        <Pencil />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}