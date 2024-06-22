"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

export default function AddMailModal () {

    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (value) => {
        console.log(value);
    }
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Send Mail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Mail</DialogTitle>
          <DialogDescription>
            select contacts and send mail.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="mail title" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <div className="">
                <Label htmlFor="username" className="text-right">
                Address
                </Label>
                <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-1"
                />
            </div>
            <Textarea 
                rows="4"
                placeholder="Content"
            />
            </div>
            <DialogFooter>
                <Button type="submit">Confirm</Button>
            </DialogFooter>
        </form>
        </Form>
        
      </DialogContent>
    </Dialog>
  )
}

const formSchema = z.object({
    title: z.string(),
    content: z.string(),
    receiverMail: z.string()
})