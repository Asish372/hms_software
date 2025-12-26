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

export function ItemForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    company: "",
    category: "",
    unitCode: "",
    gstRate: "",
    composition: "",
  })

  const handleSave = () => {
    console.log("Item saved:", formData)
    // Add save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Item</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="itemName" className="text-sm font-medium text-gray-700">
                Item Name
              </Label>
              <Input
                id="itemName"
                value={formData.itemName}
                onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                Category
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="medicine" className="focus:bg-white/20 focus:text-white">Medicine</SelectItem>
                  <SelectItem value="equipment" className="focus:bg-white/20 focus:text-white">Equipment</SelectItem>
                  <SelectItem value="supplies" className="focus:bg-white/20 focus:text-white">Supplies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="unitCode" className="text-sm font-medium text-gray-700">
                Unit Code
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, unitCode: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Unit Code" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="pcs" className="focus:bg-white/20 focus:text-white">PCS</SelectItem>
                  <SelectItem value="box" className="focus:bg-white/20 focus:text-white">BOX</SelectItem>
                  <SelectItem value="strip" className="focus:bg-white/20 focus:text-white">STRIP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstRate" className="text-sm font-medium text-gray-700">
                GST Rate
              </Label>
              <Input
                id="gstRate"
                value={formData.gstRate}
                onChange={(e) => setFormData({...formData, gstRate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="composition" className="text-sm font-medium text-gray-700">
                Composition
              </Label>
              <Input
                id="composition"
                value={formData.composition}
                onChange={(e) => setFormData({...formData, composition: e.target.value})}
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
              View Item List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
