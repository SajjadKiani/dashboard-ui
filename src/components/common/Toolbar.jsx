"use client"
import { CalendarIcon, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useForm } from "react-hook-form"

export default function Toolbar({title}) {

    return (
        <div className="grid justify-between grid-cols-2 items-center gap-3">
            <div className="md:col-span-1 col-span-2">
                <h1 className="font-bold text-xl">
                    {title}
                </h1>
            </div>
            <div className="md:col-span-1 col-span-2 flex gap-3 justify-end">
                <CalendarForm />
                <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </Button>
            </div>
        </div>
    )
    
}
 
function CalendarForm() {

    const form = useForm()

  return (
    <Form {...form}>
      <form className="">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "md:w-[300px] w-[183px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        field.value
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
