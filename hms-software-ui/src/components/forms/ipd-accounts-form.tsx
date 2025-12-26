"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export function IPDAccountsForm() {
  const [formData, setFormData] = useState({
    ipdNo: "",
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    ward: "",
    bedNo: "",
    status: "",
  })

  const handleSearch = () => {
    console.log("Searching IPD patient for accounts")
  }

  const handleAddBedCharges = () => {
    console.log("Add Bed Charges")
  }

  const handleAddOtherCharges = () => {
    console.log("Add Other Charges")
  }

  const handleAddPayments = () => {
    console.log("Add Payments")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">IPD Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* IPD No Search */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">IPD No.</Label>
            <div className="flex gap-2">
              <Input
                value={formData.ipdNo}
                onChange={(e) => setFormData({...formData, ipdNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="IPD No"
              />
              <Button
                onClick={handleSearch}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Patient's Name</Label>
              <Input
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Age</Label>
              <Input
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Gender</Label>
              <Input
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Mobile</Label>
              <Input
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Ward & Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Ward</Label>
              <Input
                value={formData.ward}
                onChange={(e) => setFormData({...formData, ward: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Bed No</Label>
              <Input
                value={formData.bedNo}
                onChange={(e) => setFormData({...formData, bedNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Status</Label>
              <Input
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleAddBedCharges}
              className="flex-1 h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Add Bed Charges
            </Button>
            <Button
              onClick={handleAddOtherCharges}
              className="flex-1 h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Add Other Charges
            </Button>
            <Button
              onClick={handleAddPayments}
              className="flex-1 h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Add Payments
            </Button>
          </div>

          {/* Billing & Payments Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#2C4F4F] mb-4">Billing & Payments</h3>
            <div className="text-gray-500 text-center py-8">
              No billing information available
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
