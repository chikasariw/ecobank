import React from 'react'
import { BellRing, Check, Ghost } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 

 
export default function Profile() {
  return (
    <div>
      <Card>
      <CardHeader>
        <CardTitle>Detail <span className='text-eb-primary-green-800'>Pengguna</span></CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-2xl border border-eb-primary-gray-200 p-4">
          
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className='px-5 mr-2'>
          Batalkan Perubahan
        </Button>
        <Button className='px-5'>
          Simpan Perubahan
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
