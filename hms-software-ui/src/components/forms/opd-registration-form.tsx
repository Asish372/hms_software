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
import { Textarea } from "@/components/ui/textarea"

export function OPDRegistrationForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    religion: "",
    mobile: "",
    address: "",
    department: "",
    doctorName: "",
    consultationType: "",
    visitNo: "",
    consultationFee: "",
    registrationDate: "",
  })

  const handleSave = () => {
    console.log("OPD Registration saved:", formData)
    // Save logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">OPD Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-sm font-medium text-gray-700">
                Patient's Name
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                Age
              </Label>
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                Gender
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="male" className="focus:bg-white/20 focus:text-white">Male</SelectItem>
                  <SelectItem value="female" className="focus:bg-white/20 focus:text-white">Female</SelectItem>
                  <SelectItem value="other" className="focus:bg-white/20 focus:text-white">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="religion" className="text-sm font-medium text-gray-700">
                Religion
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, religion: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Religion" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="hindu" className="focus:bg-white/20 focus:text-white">Hindu</SelectItem>
                  <SelectItem value="muslim" className="focus:bg-white/20 focus:text-white">Muslim</SelectItem>
                  <SelectItem value="christian" className="focus:bg-white/20 focus:text-white">Christian</SelectItem>
                  <SelectItem value="other" className="focus:bg-white/20 focus:text-white">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                Mobile
              </Label>
              <Input
                id="mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                Address
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                Department
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="medicine" className="focus:bg-white/20 focus:text-white">Medicine</SelectItem>
                  <SelectItem value="cardiology" className="focus:bg-white/20 focus:text-white">Cardiology</SelectItem>
                  <SelectItem value="orthopedics" className="focus:bg-white/20 focus:text-white">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="doctorName" className="text-sm font-medium text-gray-700">
                Doctor Name
              </Label>
              <Input
                id="doctorName"
                value={formData.doctorName}
                onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Dr."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consultationType" className="text-sm font-medium text-gray-700">
                Consultation Type
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Consultation Type" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="general" className="focus:bg-white/20 focus:text-white">General</SelectItem>
                  <SelectItem value="follow-up" className="focus:bg-white/20 focus:text-white">Follow-up</SelectItem>
                  <SelectItem value="emergency" className="focus:bg-white/20 focus:text-white">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="visitNo" className="text-sm font-medium text-gray-700">
                Visit No
              </Label>
              <Input
                id="visitNo"
                value={formData.visitNo}
                onChange={(e) => setFormData({...formData, visitNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="consultationFee" className="text-sm font-medium text-gray-700">
                Consultation Fee
              </Label>
              <Input
                id="consultationFee"
                value={formData.consultationFee}
                onChange={(e) => setFormData({...formData, consultationFee: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationDate" className="text-sm font-medium text-gray-700">
                Registration Date
              </Label>
              <Input
                id="registrationDate"
                type="date"
                value={formData.registrationDate}
                onChange={(e) => setFormData({...formData, registrationDate: e.target.value})}
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
            <a href="#" className="text-[#17a2b8] text-sm hover:underline font-medium">
              View Registration
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
