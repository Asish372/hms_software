"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus } from "lucide-react"

export function PathologyTestListForm() {
  const [filters, setFilters] = useState({
    opdNo: "",
    patientName: "",
    mobile: "",
    date: "",
  })

  const pathologyData = [
    { opdIpdNo: "CHOPD8691", patientName: "KAJALATA DAS", age: 75, sex: "Female", mobile: "7608836040", entryDate: "01-11-2025 01:52:47 PM", entryBy: "First User" },
    { opdIpdNo: "CHOPD8433", patientName: "RATNAKAR DAS", age: 58, sex: "Male", mobile: "9668639937", entryDate: "18-05-2025 03:21:24 PM", entryBy: "First User" },
    { opdIpdNo: "", patientName: "RATNAKAR DAS", age: 74, sex: "Male", mobile: "9337689524", entryDate: "18-05-2025 09:46:27 PM", entryBy: "First User" },
    { opdIpdNo: "CHOPD8708", patientName: "DEBAKI-IANA DAS", age: 17, sex: "Female", mobile: "9778661378", entryDate: "16-07-2025 00:16:32 PM", entryBy: "First User" },
    { opdIpdNo: "45,867", patientName: "SURYAKANTI MAHARUD", age: 38, sex: "Female", mobile: "8018468280", entryDate: "07-04-2022 08:12:50 PM", entryBy: "First User" },
    { opdIpdNo: "45,866", patientName: "SARITA RADIK", age: 32, sex: "Female", mobile: "8018468280", entryDate: "07-04-2022 08:51:09 PM", entryBy: "First User" },
    { opdIpdNo: "45,866", patientName: "SARITA RADIK", age: 32, sex: "Female", mobile: "8018468280", entryDate: "07-04-2022 08:46:54 PM", entryBy: "First User" },
    { opdIpdNo: "45,865", patientName: "ANNAKURMA MAI AKUD", age: 42, sex: "Female", mobile: "8018482280", entryDate: "07-04-2022 08:36:24 PM", entryBy: "First User" },
    { opdIpdNo: "CHOPD4240", patientName: "RASHMI RANJAN KUNDU", age: 33, sex: "Male", mobile: "9437195105", entryDate: "04-02-2022 02:51:42 PM", entryBy: "First User" },
    { opdIpdNo: "Bhagaban samal", patientName: "MAHENDRA NAYAK", age: 0, sex: "Male", mobile: "8018677015", entryDate: "24-10-2021 11:20:25 AM", entryBy: "First User" },
  ]

  const handleSearch = () => {
    console.log("Searching pathology tests")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Pathology Test List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <Button
                className="w-full h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Test
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

          {/* Pathology Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">OPD/IPD No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody>
                {pathologyData.map((patient, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3">
                      <span className="text-blue-600 font-medium">{patient.opdIpdNo}</span>
                    </td>
                    <td className="py-3 px-3 font-medium text-gray-900">{patient.patientName}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.age}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.sex}</td>
                    <td className="py-3 px-3 text-gray-600">{patient.mobile}</td>
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
