import MyProfitChart from "@/components/common/MyProfitChart"
import Toolbar from "@/components/common/Toolbar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Page () {

    return (
        <div className="flex flex-col gap-5 h-full">
            <Toolbar title={'Analytics'} />

            <div className="flex-1 grid md:grid-cols-3 grid-cols-1 md:grid-rows-3 gap-5">

                <div className="md:col-span-2 col-span-1 md:row-span-2">
                    <Card className="flex flex-col gap-1">
                        <CardHeader className="">
                            <CardTitle>$100,000</CardTitle>
                            <CardDescription>
                                <span className="text-green-500">+10%</span> pnl
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <MyProfitChart />
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-1 md:row-span-3">
                    <Card className="space-y-8 h-full">
                        <CardHeader className="pb-1 h-full">
                            <CardTitle>Recent Orders</CardTitle>
                            <CardDescription>
                                You have 10 open orders.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
    
}