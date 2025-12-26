"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AmbulanceForm() {
  const [formData, setFormData] = useState({
    callNo: "",
    name: "",
    from: "",
    to: "",
    ambulanceTime: "",
    fareCharge: "",
  })

  const handleSave = () => {
    console.log("Ambulance saved:", formData)
    // Save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Ambulance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="callNo" className="text-sm font-medium text-gray-700">
                Call No
              </Label>
              <Input
                id="callNo"
                value={formData.callNo}
                onChange={(e) => setFormData({...formData, callNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="from" className="text-sm font-medium text-gray-700">
                From
              </Label>
              <Input
                id="from"
                value={formData.from}
                onChange={(e) => setFormData({...formData, from: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="to" className="text-sm font-medium text-gray-700">
                To
              </Label>
              <Input
                id="to"
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ambulanceTime" className="text-sm font-medium text-gray-700">
                Ambulance Time
              </Label>
              <Input
                id="ambulanceTime"
                value={formData.ambulanceTime}
                onChange={(e) => setFormData({...formData, ambulanceTime: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fareCharge" className="text-sm font-medium text-gray-700">
                Fare Charge
              </Label>
              <Input
                id="fareCharge"
                value={formData.fareCharge}
                onChange={(e) => setFormData({...formData, fareCharge: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Save
          </Button>

          <div className="pt-2">
            <a href="#" className="text-[#2C4F4F] text-sm hover:underline font-medium">
              View Ambulance List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
