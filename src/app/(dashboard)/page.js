import MyBarChart from "@/components/common/MyBarChart";
import Toolbar from "@/components/common/Toolbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react"

function CardComponent (params) {

    const { title, number, description } = params;
    
    return (
        <Card className="h-[150px]">
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
        <>
            <Toolbar title={'Dashboard'} />

            <div className="grid grid-cols-4 gap-5 mt-5">
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

                <div className="col-span-1">
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

                <div className="col-span-2 row-span-3">
                    <Card className="py-3">
                        <CardContent>
                            <MyBarChart />
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-2 row-span-3">
                    <Card className="py-3">
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
    
}