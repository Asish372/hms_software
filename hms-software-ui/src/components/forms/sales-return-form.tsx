"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export function SalesReturnForm() {
  const [formData, setFormData] = useState({
    billNo: "",
    patientName: "",
    billDate: "",
  })

  const handleSearch = () => {
    console.log("Searching sales return:", formData)
    // Search logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Sales Return</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billNo" className="text-sm font-medium text-gray-700">
                Bill No
              </Label>
              <Input
                id="billNo"
                value={formData.billNo}
                onChange={(e) => setFormData({...formData, billNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Bill No"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-sm font-medium text-gray-700">
                Patient Name
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Patient Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billDate" className="text-sm font-medium text-gray-700">
                Bill Date
              </Label>
              <Input
                id="billDate"
                type="date"
                value={formData.billDate}
                onChange={(e) => setFormData({...formData, billDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Bill Date"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Search</Label>
              <Button
                onClick={handleSearch}
                className="w-full h-11 bg-[#17a2b8] hover:bg-[#138496] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="pt-2">
            <a href="#" className="text-[#17a2b8] text-sm hover:underline font-medium">
              View Sales Return List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
