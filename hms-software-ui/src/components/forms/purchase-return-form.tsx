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
import { Search } from "lucide-react"

export function PurchaseReturnForm() {
  const [formData, setFormData] = useState({
    item: "",
    batchNo: "",
    acceptedQty: "",
    returnQty: "",
  })

  const handleSearch = () => {
    console.log("Searching batch:", formData.batchNo)
    // Search logic here
  }

  const handleSave = () => {
    console.log("Purchase Return saved:", formData)
    // Save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Purchase Return</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="item" className="text-sm font-medium text-gray-700">
                Item
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, item: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Item" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="item1" className="focus:bg-white/20 focus:text-white">Item 1</SelectItem>
                  <SelectItem value="item2" className="focus:bg-white/20 focus:text-white">Item 2</SelectItem>
                  <SelectItem value="item3" className="focus:bg-white/20 focus:text-white">Item 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="batchNo" className="text-sm font-medium text-gray-700">
                Batch No
              </Label>
              <div className="flex gap-2">
                <Input
                  id="batchNo"
                  value={formData.batchNo}
                  onChange={(e) => setFormData({...formData, batchNo: e.target.value})}
                  className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Batch No"
                />
                <Button
                  onClick={handleSearch}
                  className="h-11 px-6 bg-[#17a2b8] hover:bg-[#138496] text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="acceptedQty" className="text-sm font-medium text-gray-700">
                Accepted Qty
              </Label>
              <Input
                id="acceptedQty"
                value={formData.acceptedQty}
                onChange={(e) => setFormData({...formData, acceptedQty: e.target.value})}
                className="h-11 rounded-lg border-gray-300 bg-gray-100 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="returnQty" className="text-sm font-medium text-gray-700">
                Return Qty
              </Label>
              <Input
                id="returnQty"
                value={formData.returnQty}
                onChange={(e) => setFormData({...formData, returnQty: e.target.value})}
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
              View Purchase Return List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
