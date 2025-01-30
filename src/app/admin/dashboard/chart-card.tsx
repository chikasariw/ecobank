import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
    const values = [80, 60, 85, 40, 90, 70, 95, 75, 65, 30, 55, 85]

    return (
        <div className="w-full lg:w-1/3 mb-3">
            {/* <Card className="mb-3">
                <CardContent>
                    <h3 className="font-medium mt-4">Bar Chart</h3>
                    <p className="text-sm text-gray-500">Total sampah yang sudah ditukar</p>
                    <div className="mt-4 flex h-24 items-end justify-between gap-1">
                        {months.map((month, index) => (
                            <div key={month} className="flex flex-col items-center gap-2">
                                <div
                                    className="w-6 rounded-full bg-gradient-to-t from-eb-primary-green-600 to-primary-ygreen-400"
                                    style={{ height: `${values[index]}%` }}
                                />
                                <span className="text-xs text--primary-gray-500">{month}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card> */}

            <div className="rounded-3xl bg-eb-primary-ygreen-100 p-6">
                <h3 className="font-medium">Total Tukar</h3>
                <p className="text-sm text-eb-primary-gray-600">Total sampah yang sudah ditukar</p>
                <div className="mt-4 text-4xl font-bold text-eb-primary-green-800">
                    268<span className="text-xl">/gr</span>
                </div>
            </div>
        </div>
    )
}
