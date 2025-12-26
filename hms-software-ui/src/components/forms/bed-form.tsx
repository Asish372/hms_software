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

export function BedForm() {
  const [formData, setFormData] = useState({
    wardType: "",
    bedNo: "",
    dailyBedRate: "",
  })

  const handleSave = () => {
    console.log("Bed saved:", formData)
    // Add save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Bed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="wardType" className="text-sm font-medium text-gray-700">
                Ward Type
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, wardType: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Ward Type" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="general" className="focus:bg-white/20 focus:text-white">General Ward</SelectItem>
                  <SelectItem value="private" className="focus:bg-white/20 focus:text-white">Private Ward</SelectItem>
                  <SelectItem value="icu" className="focus:bg-white/20 focus:text-white">ICU</SelectItem>
                  <SelectItem value="emergency" className="focus:bg-white/20 focus:text-white">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bedNo" className="text-sm font-medium text-gray-700">
                Bed No
              </Label>
              <Input
                id="bedNo"
                value={formData.bedNo}
                onChange={(e) => setFormData({...formData, bedNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dailyBedRate" className="text-sm font-medium text-gray-700">
                Daily Bed Rate
              </Label>
              <Input
                id="dailyBedRate"
                value={formData.dailyBedRate}
                onChange={(e) => setFormData({...formData, dailyBedRate: e.target.value})}
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
              View Bed List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
