"use client"
import React from 'react'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";


export default function RadioGender() {
    return (
        <RadioGroup defaultValue="laki-laki" className='flex w-full'>
            <div className="flex items-center space-x-3">
                <RadioGroupItem value="laki-laki" id="laki-laki" />
                <Label htmlFor="laki-laki">Laki-laki</Label>
            </div>
            <div className="flex items-center space-x-3">
                <RadioGroupItem value="perempuan" id="perempuan" />
                <Label htmlFor="perempuan">Perempuan</Label>
            </div>
        </RadioGroup>
    )
}