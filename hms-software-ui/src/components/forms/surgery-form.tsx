"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SurgeryForm() {
  const [surgeryName, setSurgeryName] = useState("")

  const handleSave = () => {
    console.log("Surgery saved:", surgeryName)
    // Add save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Surgery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="surgeryName" className="text-sm font-medium text-gray-700">
              Surgery Name
            </Label>
            <Input
              id="surgeryName"
              value={surgeryName}
              onChange={(e) => setSurgeryName(e.target.value)}
              className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              placeholder="Enter surgery name"
            />
          </div>

          <Button
            onClick={handleSave}
            className="w-full h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Save
          </Button>

          <div className="pt-2">
            <a href="#" className="text-[#2C4F4F] text-sm hover:underline font-medium">
              View Surgery List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
