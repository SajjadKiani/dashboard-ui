import MyLineChart from "@/components/common/MyLineChart"
import Toolbar from "@/components/common/Toolbar"
import MyDataTable from "@/components/common/MyDataTable"
import { Card, CardContent } from "@/components/ui/card"

export default function Page () {

    return (
        <div className="flex flex-col gap-5">
            <Toolbar title={'Orders'} />

            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="col-span-1">
                    <Card className={"py-3"}>
                        <CardContent>
                            <MyLineChart title={'incomes'} />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card className={"py-3"}>
                        <CardContent>
                            <MyLineChart title={'sales'} />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card className={"py-3"}>
                        <CardContent>
                            <MyLineChart title={'profits'} />
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-3 col-span-1">
                    <Card className={'pt-5'}>
                        <CardContent>
                            <MyDataTable />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}