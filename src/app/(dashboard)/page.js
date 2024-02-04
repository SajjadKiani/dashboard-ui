import MyBarChart from "@/components/common/MyBarChart";
import Toolbar from "@/components/common/Toolbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page () {

    return (
        <>
            <Toolbar title={'Dashboard'} />

            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="col-span-1">
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>
                                test
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            test
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-1">
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>
                                test
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            test
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-1">
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>
                                test
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            test
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-1">
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>
                                test
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            test
                        </CardContent>
                    </Card>
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