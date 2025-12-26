"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OPDReportForm() {
  const [filters, setFilters] = useState({
    opdNo: "",
    patientName: "",
    mobile: "",
    fromDate: "",
    toDate: "",
  })

  const opdReportData = [
    { opdNo: "CHOPD8656", patientName: "KHOKAN MANDAL", age: 58, sex: "Male", mobile: "8018772342", religion: "Hindu", address: "AT/PO-KATHIKIHALA", department: "MEDICINE", doctor: "Dr.DR. M.DAS", visitNo: "1", fee: "0.00", entryDate: "19-12-2025 11:52:39 PM", entryBy: "First User" },
    { opdNo: "CHOPD8655", patientName: "SUDARSHAN BEHERA", age: 60, sex: "Male", mobile: "7894452553", religion: "Hindu", address: "SIMILIA BALASORE", department: "MEDICINE", doctor: "Dr.DR. M.DAS", visitNo: "1", fee: "0.00", entryDate: "19-12-2025 11:09:03 AM", entryBy: "First User" },
    { opdNo: "CHOPD8654", patientName: "KRUPASINDHU ROUT", age: 68, sex: "Male", mobile: "9776831214", religion: "Hindu", address: "AT/PO-BETADA PS-BASUDEVPUR", department: "MEDICINE", doctor: "Dr.DR. M.DAS", visitNo: "1", fee: "0.00", entryDate: "18-12-2025 12:44:56 PM", entryBy: "First User" },
    { opdNo: "CHOPD8653", patientName: "BAYAKRUSHNA PATRA", age: 74, sex: "Male", mobile: "9337757879", religion: "Hindu", address: "AT/PO-RAMABIJASHANAPDR.PS-SIMILIA DIST-BALASORE", department: "MEDICINE", doctor: "Dr.DR. M.DAS", visitNo: "111", fee: "400.00", entryDate: "13-12-2025 07:59:02 PM", entryBy: "First User" },
    { opdNo: "CHOPD8652", patientName: "LIMAAMAN1 DAS", age: 51, sex: "Female", mobile: "9937934345", religion: "Hindu", address: "AT/PO-JANGRA PS-KHAIRA/PADA DIST-GR-JNAGAR", department: "MEDICINE", doctor: "Dr.DR. M.DAS", visitNo: "67", fee: "400.00", entryDate: "11-12-2025 05:48:19 AM", entryBy: "First User" },
  ]

  const handleSearch = () => {
    console.log("Searching OPD report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">OPD Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OPD No</Label>
              <Input
                value={filters.opdNo}
                onChange={(e) => setFilters({...filters, opdNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="OPD No"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Patient Name</Label>
              <Input
                value={filters.patientName}
                onChange={(e) => setFilters({...filters, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Patient Name"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Mobile</Label>
              <Input
                value={filters.mobile}
                onChange={(e) => setFilters({...filters, mobile: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Mobile"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">From Date</Label>
              <Input
                type="date"
                value={filters.fromDate}
                onChange={(e) => setFilters({...filters, fromDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">To Date</Label>
              <Input
                type="date"
                value={filters.toDate}
                onChange={(e) => setFilters({...filters, toDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="flex items-end gap-2 md:col-span-2">
              <Button
                onClick={handleSearch}
                className="flex-1 h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search
              </Button>
              <Button
                onClick={handleShowAll}
                className="flex-1 h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Show All
              </Button>
            </div>
          </div>

          {/* OPD Report Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">OPD No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Religion</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Address</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Department</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Doctor</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Visit No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Fee</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody>
                {opdReportData.map((patient, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3 text-blue-600 font-medium">{patient.opdNo}</td>
                    <td className="py-3 px-3 font-medium text-gray-900">{patient.patientName}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.age}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.sex}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.mobile}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.religion}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.address}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.department}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.doctor}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.visitNo}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.fee}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.entryDate}</td>
                    <td className="py-3 px-3 text-blue-600 font-medium text-xs">{patient.entryBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
