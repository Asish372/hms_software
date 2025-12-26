"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceTestForm() {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceRate: "",
  })

  const handleSave = () => {
    console.log("Service/Test saved:", formData)
    // Add save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Service/Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="serviceName" className="text-sm font-medium text-gray-700">
                Service/Test Name
              </Label>
              <Input
                id="serviceName"
                value={formData.serviceName}
                onChange={(e) => setFormData({...formData, serviceName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceRate" className="text-sm font-medium text-gray-700">
                Service/Test Rate
              </Label>
              <Input
                id="serviceRate"
                value={formData.serviceRate}
                onChange={(e) => setFormData({...formData, serviceRate: e.target.value})}
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
              View Service/Test List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
