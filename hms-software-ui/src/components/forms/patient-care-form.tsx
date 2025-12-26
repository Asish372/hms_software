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

export function PatientCareForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    actualPatientName: "",
    age: "",
    admittedDate: "",
    ward: "",
    underCareOf: "",
    bedNo: "",
    dischargeDate: "",
    procedureDate: "",
    department: "",
    consultant: "",
    charge: "",
  })

  const handleSearch = () => {
    console.log("Searching patient")
  }

  const handleActionButton = (action: string) => {
    console.log(`Action: ${action}`)
  }

  const handleAdd = () => {
    console.log("Adding procedure")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Patient Care</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Patient Name Search */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Patient Name.</Label>
            <div className="flex gap-2">
              <Select onValueChange={(value) => setFormData({...formData, patientName: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="IPD No" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="ipd1" className="focus:bg-white/20 focus:text-white">IPD Patient 1</SelectItem>
                  <SelectItem value="ipd2" className="focus:bg-white/20 focus:text-white">IPD Patient 2</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleSearch}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Patient Details (Disabled) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Patient's Name</Label>
              <Input
                value={formData.actualPatientName}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Age</Label>
              <Input
                value={formData.age}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admitted Date</Label>
              <Input
                value={formData.admittedDate}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Ward</Label>
              <Input
                value={formData.ward}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Under Care of</Label>
              <Input
                value={formData.underCareOf}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Bed No</Label>
              <Input
                value={formData.bedNo}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Discharge Date</Label>
              <Input
                value={formData.dischargeDate}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>
          </div>

          {/* Action Buttons Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button
              onClick={() => handleActionButton("Procedure & ICU Activity")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Procedure & ICU Activity
            </Button>
            <Button
              onClick={() => handleActionButton("Investigation Entry")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Investigation Entry
            </Button>
            <Button
              onClick={() => handleActionButton("Surgery Details")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Surgery Details
            </Button>
            <Button
              onClick={() => handleActionButton("Bed Transfer")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Bed Transfer
            </Button>
          </div>

          {/* Action Buttons Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => handleActionButton("Discharge")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Discharge
            </Button>
            <Button
              onClick={() => handleActionButton("Discharge Document")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Discharge Document
            </Button>
            <Button
              onClick={() => handleActionButton("Bed Charge Edit")}
              className="h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Bed Charge Edit
            </Button>
          </div>

          {/* Procedure & ICU Activity Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#2C4F4F] mb-4">Procedure & ICU Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Date</Label>
                <Input
                  type="date"
                  value={formData.procedureDate}
                  onChange={(e) => setFormData({...formData, procedureDate: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Department</Label>
                <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="medicine" className="focus:bg-white/20 focus:text-white">Medicine</SelectItem>
                    <SelectItem value="surgery" className="focus:bg-white/20 focus:text-white">Surgery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Consultant</Label>
                <Select onValueChange={(value) => setFormData({...formData, consultant: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Consultant" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="doc1" className="focus:bg-white/20 focus:text-white">Dr. Smith</SelectItem>
                    <SelectItem value="doc2" className="focus:bg-white/20 focus:text-white">Dr. Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Charge</Label>
                <Input
                  value={formData.charge}
                  onChange={(e) => setFormData({...formData, charge: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>

              <Button
                onClick={handleAdd}
                className="h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
