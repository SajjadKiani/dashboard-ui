import Toolbar from "@/components/common/Toolbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 h-full">
            <Toolbar title={'Setting'} />

            <Card className="flex-grow">
                <CardContent className=" h-full p-0"> 
                    <Tabs defaultValue="profile" className="w-full h-full grid grid-cols-6">
                        <TabsList className=" bg-inherit col-span-1 justify-start hidden md:flex md:flex-col md:gap-2 py-3 px-2 h-full border-dotted border-r">
                            <TabsTrigger className="w-full" value="profile">Profile</TabsTrigger>
                            <TabsTrigger className="w-full" value="test">test</TabsTrigger>
                        </TabsList>

                        <div className="md:col-span-5 col-span-6 flex flex-col items-start p-10">
                            <TabsContent value="profile">
                                profile
                            </TabsContent>
                            <TabsContent value="test">
                                test
                            </TabsContent>
                        </div>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}