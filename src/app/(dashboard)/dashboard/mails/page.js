import MyBarChart from "@/components/common/MyBarChart"
import MyDataTable from "@/components/common/MyDataTable"
import Toolbar from "@/components/common/Toolbar"
import { Card, CardContent } from "@/components/ui/card"
import { AddEmailModal } from "./components"

export default function Page () {
    

    return (
        <div className="flex flex-col gap-4">
            <Toolbar title={'Mail'} />

            <div className="flex flex-col gap-4">
                <div className="">
                    <Card className="py-3 h-full">
                        <CardContent className="h-full">
                            <MyBarChart />
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <AddEmailModal />
                </div>

                <Card>
                    <CardContent>
                        <MyDataTable />
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}