"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ConsultantForm() {
  const [formData, setFormData] = useState({
    department: "",
    consultantName: "",
  })

  const handleSave = () => {
    console.log("Consultant saved:", formData)
    // Add save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Consultant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                Department
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="cardiology" className="focus:bg-white/20 focus:text-white">Cardiology</SelectItem>
                  <SelectItem value="neurology" className="focus:bg-white/20 focus:text-white">Neurology</SelectItem>
                  <SelectItem value="orthopedics" className="focus:bg-white/20 focus:text-white">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="consultantName" className="text-sm font-medium text-gray-700">
                Consultant Name
              </Label>
              <Input
                id="consultantName"
                value={formData.consultantName}
                onChange={(e) => setFormData({...formData, consultantName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Dr."
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
              View Consultant List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
