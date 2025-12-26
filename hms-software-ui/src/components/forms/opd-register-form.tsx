"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus, FileText } from "lucide-react"

export function OPDRegisterForm() {
  const [filters, setFilters] = useState({
    opdNo: "",
    patientName: "",
    mobile: "",
    date: "",
  })

  const opdData = [
    { opdNo: "CHOPD8656", name: "KHOKAN MANDAL", age: 58, sex: "Male", mobile: "9016775042", address: "", department: "MEDICINE", doctor: "Dr.DR. M.DAS", regDate: "16-12-2025", entryDate: "19-12-2025 11:53:39 AM", entryBy: "First User" },
    { opdNo: "CHOPD8655", name: "SUDARSHAN BEHERA", age: 60, sex: "Male", mobile: "7064452553", address: "SIMILIA BALASORE", department: "MEDICINE", doctor: "Dr.DR. M.DAS", regDate: "18-12-2025", entryDate: "19-12-2025 11:09:03 AM", entryBy: "First User" },
    { opdNo: "CHOPD8654", name: "KRUPASINDHU ROUT", age: 68, sex: "Male", mobile: "9776513114", address: "AT/PO-BETADA PS-BASUDEVPUR", department: "MEDICINE", doctor: "Dr.DR. M.DAS", regDate: "18-12-2025", entryDate: "18-12-2025 12:44:56 PM", entryBy: "First User" },
    { opdNo: "CHOPD8653", name: "BAYAKRUSHNA PATRA", age: 74, sex: "Male", mobile: "9437574178", address: "AT/PO-KHAMARSIMILIA PS-SIMILIA DIST-BALASORE", department: "MEDICINE", doctor: "Dr.DR. M.DAS", regDate: "18-12-2025", entryDate: "18-12-2025 07:59:02 PM", entryBy: "First User" },
    { opdNo: "CHOPD8652", name: "JAMAJAM DAS", age: 51, sex: "Female", mobile: "9937894346", address: "AT/PO-JANGRA PS-KHAIRA/PADA DIST-GR-JNAGAR", department: "MEDICINE", doctor: "Dr.DR. M.DAS", regDate: "06-12-2025", entryDate: "14-12-2025 09:44:19 AM", entryBy: "First User" },
  ]

  const handleSearch = () => {
    console.log("Searching with filters:", filters)
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">OPD Register List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <Button
                className="w-full h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Patient
              </Button>
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
                value={filters.date}
                onChange={(e) => setFilters({...filters, date: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Date"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="flex-1 h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
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

          {/* OPD Register Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">OPD No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Address</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Department</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Doctor</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Reg Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody>
                {opdData.map((patient, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-red-600" />
                        <span className="text-blue-600 font-medium">{patient.opdNo}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{patient.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white rounded"
                        >
                          Pathology
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white rounded"
                        >
                          IPD
                        </Button>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-gray-600">{patient.age}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.sex}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.mobile}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.address}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.department}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.doctor}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.regDate}</td>
                    <td className="py-3 px-3 text-gray-600 text-xs">{patient.entryDate}</td>
                    <td className="py-3 px-3">
                      <span className="text-xs text-red-600 font-medium">{patient.entryBy}</span>
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
