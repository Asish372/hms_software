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

export function NursingCareForm() {
  const [formData, setFormData] = useState({
    ipdNo: "",
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    ward: "",
    bedNo: "",
    status: "",
    referDateTime: "",
    toHospital: "",
    dischargeDateTime: "",
    condition: "",
    birthDateTime: "",
    boyGirl: "",
    deathDateTime: "",
    cause: "",
    comment: "",
  })

  const handleSearch = () => {
    console.log("Searching IPD patient")
  }

  const handleSave = () => {
    console.log("Nursing Care saved:", formData)
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Nursing Care</CardTitle>
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

          {/* Patient Basic Info */}
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
              <Select onValueChange={(value) => setFormData({...formData, status: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="active" className="focus:bg-white/20 focus:text-white">Active</SelectItem>
                  <SelectItem value="discharged" className="focus:bg-white/20 focus:text-white">Discharged</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Refer & Discharge Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Refer Date & Time</Label>
              <Input
                value={formData.referDateTime}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">To Hospital</Label>
              <Input
                value={formData.toHospital}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Discharge Date & Time</Label>
              <Input
                value={formData.dischargeDateTime}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Condition</Label>
              <Input
                value={formData.condition}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>
          </div>

          {/* Birth & Death Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Birth Date & Time</Label>
              <Input
                value={formData.birthDateTime}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Boy/Girl</Label>
              <Select disabled>
                <SelectTrigger className="h-11 rounded-lg border-gray-300 bg-gray-100">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="boy">Boy</SelectItem>
                  <SelectItem value="girl">Girl</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Death Date & Time</Label>
              <Input
                value={formData.deathDateTime}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Cause</Label>
              <Input
                value={formData.cause}
                className="h-11 rounded-lg border-gray-300 bg-gray-100"
                disabled
              />
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Comment</Label>
            <Textarea
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              className="rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              rows={4}
            />
          </div>

          <Button
            onClick={handleSave}
            className="w-full h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
