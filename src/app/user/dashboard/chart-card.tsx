import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {

    return (
        <div className="w-full mb-3">
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
