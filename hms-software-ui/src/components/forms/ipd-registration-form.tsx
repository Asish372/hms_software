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
import { Textarea } from "@/components/ui/textarea"

export function IPDRegistrationForm() {
  const [formData, setFormData] = useState({
    opdPatient: "",
    namePrefix: "",
    patientName: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    opdDate: "",
    admissionDate: "",
    mobile: "",
    sonDaughterGuardian: "",
    address: "",
    po: "",
    ps: "",
    dist: "",
    state: "",
    phone: "",
    department: "",
    ward: "",
    bedNo: "",
    referredBy: "",
    underCareOf: "",
    advanceAmount: "",
    doctorFee: "",
    total: "",
    paymentMode: "",
  })

  const handleSearch = () => {
    console.log("Searching OPD patient")
  }

  const handleSave = () => {
    console.log("IPD Registration saved:", formData)
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">IPD Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* OPD Patient Search */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">OPD Patient</Label>
            <div className="flex gap-2">
              <Select onValueChange={(value) => setFormData({...formData, opdPatient: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="OPD Patient" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="opd1" className="focus:bg-white/20 focus:text-white">OPD Patient 1</SelectItem>
                  <SelectItem value="opd2" className="focus:bg-white/20 focus:text-white">OPD Patient 2</SelectItem>
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

          {/* Patient Details Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Patient's Name</Label>
              <div className="flex gap-2">
                <Select onValueChange={(value) => setFormData({...formData, namePrefix: value})}>
                  <SelectTrigger className="w-24 h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Prefix" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="mr" className="focus:bg-white/20 focus:text-white">Mr.</SelectItem>
                    <SelectItem value="mrs" className="focus:bg-white/20 focus:text-white">Mrs.</SelectItem>
                    <SelectItem value="ms" className="focus:bg-white/20 focus:text-white">Ms.</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  value={formData.patientName}
                  onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                  className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>
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
              <Label className="text-sm font-medium text-gray-700">Date of Birth</Label>
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Patient Details Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OPD Date</Label>
              <Input
                type="date"
                value={formData.opdDate}
                onChange={(e) => setFormData({...formData, opdDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Addmission Date</Label>
              <Input
                type="date"
                value={formData.admissionDate}
                onChange={(e) => setFormData({...formData, admissionDate: e.target.value})}
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

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Son/Daughter/Guardian</Label>
              <Input
                value={formData.sonDaughterGuardian}
                onChange={(e) => setFormData({...formData, sonDaughterGuardian: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Address Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Address</Label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">PO</Label>
              <Input
                value={formData.po}
                onChange={(e) => setFormData({...formData, po: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">PS</Label>
              <Input
                value={formData.ps}
                onChange={(e) => setFormData({...formData, ps: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Dist</Label>
              <Input
                value={formData.dist}
                onChange={(e) => setFormData({...formData, dist: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">State</Label>
              <Input
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Phone</Label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Department & Ward */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Label className="text-sm font-medium text-gray-700">Ward</Label>
              <Select onValueChange={(value) => setFormData({...formData, ward: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Ward" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="ward1" className="focus:bg-white/20 focus:text-white">Ward 1</SelectItem>
                  <SelectItem value="ward2" className="focus:bg-white/20 focus:text-white">Ward 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Bedno</Label>
              <Select onValueChange={(value) => setFormData({...formData, bedNo: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Bedno" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="bed1" className="focus:bg-white/20 focus:text-white">Bed 1</SelectItem>
                  <SelectItem value="bed2" className="focus:bg-white/20 focus:text-white">Bed 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Care & Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Referred By</Label>
              <Input
                value={formData.referredBy}
                onChange={(e) => setFormData({...formData, referredBy: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Under Care of</Label>
              <Select onValueChange={(value) => setFormData({...formData, underCareOf: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Under Care of" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="doctor1" className="focus:bg-white/20 focus:text-white">Dr. Smith</SelectItem>
                  <SelectItem value="doctor2" className="focus:bg-white/20 focus:text-white">Dr. Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Advance Amount</Label>
              <Input
                value={formData.advanceAmount}
                onChange={(e) => setFormData({...formData, advanceAmount: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Fee Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Doctor Fee</Label>
              <Input
                value={formData.doctorFee}
                onChange={(e) => setFormData({...formData, doctorFee: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Total</Label>
              <Input
                value={formData.total}
                onChange={(e) => setFormData({...formData, total: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Payment Mode</Label>
              <Input
                value={formData.paymentMode}
                onChange={(e) => setFormData({...formData, paymentMode: e.target.value})}
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
              View Registration
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
