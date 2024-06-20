import MyBarChart from "@/components/common/MyBarChart";
import Toolbar from "@/components/common/Toolbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";


function CardComponent (params) {

    const { title, number, description } = params;
    
    return (
        <Card className="">
            <CardHeader className="pb-2">
                <div className="flex justify-between">
                    {title}
                    <params.icon className="h-5 w-5" />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-3xl font-bold mb-2">{number}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default function Page () {

    return (
        <div className="flex flex-col gap-5">
            <Toolbar title={'Dashboard'} />

            <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-3 gap-5">
                <div className="col-span-1">
                    <CardComponent
                        title="Sales"
                        description="+20.1% from last month"
                        icon={ShoppingCart}
                        number="$120,000"
                    />
                </div>

                <div className="col-span-1">
                    <CardComponent
                        title="Income"
                        description="+20.1% from last month"
                        icon={DollarSign}
                        number="$125,000"
                    />
                </div>

                <div className="col-span-1 ">
                    <CardComponent
                        title="Users"
                        description="+20.1% from last month"
                        icon={Users}
                        number="+1,200"
                    />
                </div>

                <div className="col-span-1">
                    <CardComponent
                        title="Active Now"
                        description="+20.1% from last month"
                        icon={Activity}
                        number="+10"
                    />
                </div>

                <div className="md:col-span-2 col-span-1 md:row-span-2">
                    <Card className="py-3 h-full">
                        <CardContent className="h-full">
                            <MyBarChart />
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 md:row-span-2">
                    <Card className="">
                        <CardHeader className="pb-1">
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>
                                You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-3">
                                {[...Array(5).keys()].map(index =>
                                <>
                                    <div key={index} className="flex justify-between items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="@shadcn" />
                                            <AvatarFallback>SK</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <p className="font-bold">Sajad Kiani</p>
                                            <p className="font-light text-sm">skm.kiani@gmail.com</p>
                                        </div>
                                        <p className="font-bold">+$190</p>
                                    </div>    
                                    <Separator className="" />
                                    </>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}