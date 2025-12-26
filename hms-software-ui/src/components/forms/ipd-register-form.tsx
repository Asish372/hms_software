"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export function IPDRegisterForm() {
  const [filters, setFilters] = useState({
    ipdNo: "",
    opdNo: "",
    patientName: "",
    mobile: "",
    admitDate: "",
  })

  const ipdData = [
    { ipdNo: "CHIPD3149", opdNo: "CHOPD8654", patientName: "Mr.KRUPASINDHU ROUT", age: 68, sex: "Male", mobile: "9776513114", address: "BETADA", admissionDate: "18-12-2025 08:30:00 AM", ward: "Narv.AC Cabin", bedNo: "242", status: "", entryDate: "18-12-2025 12:49:01 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3148", opdNo: "CHOPD8653", patientName: "Mrs.LIMAMANI DAS", age: 51, sex: "Female", mobile: "9937028345", address: "AT/PO-JANGRA PS-KHAIRA/PADA DIST-GR-JNAGAR", admissionDate: "05-12-2025 11:30:00 AM", ward: "Medicine", bedNo: "255", status: "", entryDate: "11-12-2025 05:50:36 AM", entryBy: "First User" },
    { ipdNo: "CHIPD3147", opdNo: "CHOPD8649", patientName: "Mrs.SHANTILATA BHOI", age: 55, sex: "Female", mobile: "8093133997", address: "SORO", admissionDate: "07-12-2025 01:03:00 AM", ward: "Medicine", bedNo: "248", status: "", entryDate: "07-12-2025 05:01:00 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3146", opdNo: "CHOPD8645", patientName: "Mr.NIRANJAN MALIK", age: 65, sex: "Male", mobile: "9776078635", address: "NUAGAN", admissionDate: "29-11-2025 11:30:00 AM", ward: "Medicine", bedNo: "122", status: "", entryDate: "04-12-2025 11:00:18 AM", entryBy: "First User" },
    { ipdNo: "CHIPD3145", opdNo: "CHOPD8644", patientName: "Mr.RABINDRA DAS", age: 80, sex: "Male", mobile: "9777723783", address: "KANHEIBANRA", admissionDate: "24-11-2025 04:04:00 AM", ward: "AC Cabin", bedNo: "708", status: "", entryDate: "01-12-2025 05:29:09 PM", entryBy: "First User" },
  ]

  const handleSearch = () => {
    console.log("Searching IPD records")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">IPD Register List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div>
              <Button
                className="w-full h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Add Patient
              </Button>
            </div>

            <div>
              <Input
                value={filters.ipdNo}
                onChange={(e) => setFilters({...filters, ipdNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="IPD No"
              />
            </div>

            <div>
              <Input
                value={filters.opdNo}
                onChange={(e) => setFilters({...filters, opdNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="OPD No"
              />
            </div>

            <div>
              <Input
                value={filters.patientName}
                onChange={(e) => setFilters({...filters, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Patient Name"
              />
            </div>

            <div>
              <Input
                value={filters.mobile}
                onChange={(e) => setFilters({...filters, mobile: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Mobile"
              />
            </div>

            <div>
              <Input
                type="date"
                value={filters.admitDate}
                onChange={(e) => setFilters({...filters, admitDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Admit Date"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="flex-1 h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
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

          {/* IPD Register Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">IPD No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">OPD No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Address</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Addmission Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Ward</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Bed No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody>
                {ipdData.map((patient, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-3 text-xs bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white rounded"
                        >
                          Edit
                        </Button>
                        <span className="text-blue-600 font-medium">{patient.ipdNo}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-gray-600">{patient.opdNo}</td>
                    <td className="py-3 px-3 font-medium text-gray-900">{patient.patientName}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.age}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.sex}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.mobile}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.address}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.admissionDate}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.ward}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.bedNo}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.status}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.entryDate}</td>
                    <td className="py-3 px-3">
                      <span className="text-xs text-blue-600 font-medium">{patient.entryBy}</span>
                    </td>
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
