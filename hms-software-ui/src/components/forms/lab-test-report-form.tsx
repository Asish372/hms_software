"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LabTestReportForm() {
  const [filters, setFilters] = useState({
    opdIpdNo: "",
    patientName: "",
    mobile: "",
    dateFrom: "",
    dateTo: "",
  })

  // Sample data based on image
  const reportData = [
    { opdIpdNo: "CHOPD8891", patientName: "KALPALATA DAS", age: 75, sex: "Female", mobile: "7682836560", tests: "CT SCAN OF HEAD INJURY,ECG,KIDNEY PROFILE,LIPID PROFILE", totalFee: "3150.00", payMode: "CASH", entryDate: "01-11-2025 01:53:27 PM", entryBy: "First User" },
    { opdIpdNo: "", patientName: "RATNAKAR DAS", age: 56, sex: "Male", mobile: "9668839837", tests: "ECG,FBS,KIDNEY PROFILE,MP(ICT)", totalFee: "2750.00", payMode: "CASH", entryDate: "18-05-2025 05:31:24 PM", entryBy: "First User" },
    { opdIpdNo: "CHOPD8433", patientName: "RATNAKAR DAS", age: 74, sex: "Male", mobile: "9337269552", tests: "CT SCAN,LIPID PROFILE,RBS", totalFee: "2750.00", payMode: "CASH", entryDate: "18-05-2025 09:46:27 AM", entryBy: "First User" },
    { opdIpdNo: "CHOPD6788", patientName: "DEBARCHANA DAS", age: 17, sex: "Female", mobile: "9778361178", tests: "ECG,HB(A1C),HIV/HB S AG /HCV,KIDNEY PROFILE,MP(ICT),NA+ K+,PLAIN CT SCAN,RBS,SR(URIC ACID),T3 T4 TSH,WIDAL", totalFee: "2150.00", payMode: "CASH", entryDate: "16-07-2023 05:16:32 PM", entryBy: "First User" },
    { opdIpdNo: "45,867", patientName: "SURYAKANTI MAHAKUD", age: 36, sex: "Female", mobile: "8018468280", tests: "HEAD INJURY", totalFee: "2300.00", payMode: "CASH", entryDate: "07-04-2022 08:52:30 PM", entryBy: "First User" },
    { opdIpdNo: "45,866", patientName: "SABITA BARIK", age: 32, sex: "Female", mobile: "8018468280", tests: "", totalFee: "850.00", payMode: "CASH", entryDate: "07-04-2022 08:51:09 PM", entryBy: "First User" },
    { opdIpdNo: "45,866", patientName: "SABITA BARIK", age: 32, sex: "Female", mobile: "8018468280", tests: "HEAD INJURY", totalFee: "2300.00", payMode: "CASH", entryDate: "07-04-2022 08:48:54 PM", entryBy: "First User" },
    { opdIpdNo: "45,865", patientName: "ANNAPURNA MAHAKUD", age: 42, sex: "Female", mobile: "8018468280", tests: "HEAD INJURY", totalFee: "2300.00", payMode: "CASH", entryDate: "07-04-2022 08:46:24 PM", entryBy: "First User" },
    { opdIpdNo: "CHOPD4240", patientName: "RASHMI RANJAN KUNDU", age: 33, sex: "Male", mobile: "9437129105", tests: "CBC,CPC,COVID 19,ECG,ESR,HIV/HB S AG /HCV,HRCT,RBS", totalFee: "7600.00", payMode: "cash", entryDate: "01-02-2022 02:51:12 PM", entryBy: "First User" },
    { opdIpdNo: "Bhagaban samal", patientName: "MAHENDRA NAYAK", age: 0, sex: "Male", mobile: "8088677015", tests: "HIV/ HB&AG", totalFee: "250.00", payMode: "cash", entryDate: "21-10-2021 11:20:25 AM", entryBy: "First User" },
     { opdIpdNo: "CHOPD703", patientName: "MINATI MAJHI", age: 52, sex: "Female", mobile: "7978379050", tests: "", totalFee: "750.00", payMode: "CASH", entryDate: "08-01-2021 04:10:34 PM", entryBy: "First User" },
    { opdIpdNo: "362311", patientName: "MANGALIA NAYAK", age: 65, sex: "Male", mobile: "8639125461", tests: "CBC,ECG,FBS,LIPID PROFILE", totalFee: "750.00", payMode: "CASH", entryDate: "10-11-2020 11:47:44 AM", entryBy: "First User" },
     { opdIpdNo: "362311", patientName: "MANGALIA NAYAK", age: 65, sex: "Male", mobile: "8639125461", tests: "CBC,ECG,FBS,LIPID PROFILE", totalFee: "750.00", payMode: "CASH", entryDate: "10-11-2020 11:47:43 AM", entryBy: "First User" },

  ]

  const handleSearch = () => {
    console.log("Searching Lab Test report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-[95vw] mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Lab Test Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-end">
             <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OPD/IPD No</Label>
              <Input
                value={filters.opdIpdNo}
                onChange={(e) => setFilters({...filters, opdIpdNo: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="OPD/IPD No"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label className="text-sm font-medium text-gray-700">Patient Name</Label>
              <Input
                value={filters.patientName}
                onChange={(e) => setFilters({...filters, patientName: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Patient Name"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Mobile</Label>
              <Input
                value={filters.mobile}
                onChange={(e) => setFilters({...filters, mobile: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Mobile"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Date From</Label>
              <Input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Date To</Label>
              <Input
                type="date"
                value={filters.dateTo}
                onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="h-10 px-4 bg-primary hover:bg-[#1a56db] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search
              </Button>
              <Button
                onClick={handleShowAll}
                className="h-10 px-4 bg-primary hover:bg-[#1a56db] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Show All
              </Button>
            </div>
          </div>

          {/* Report Table */}
          <div className="overflow-x-auto rounded-md border">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">OPD/IPD No</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700 w-1/3">Tests</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Total Fee</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Payment Mode</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reportData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2 px-2 text-gray-600">{row.opdIpdNo}</td>
                    <td className="py-2 px-2 font-medium text-gray-900">{row.patientName}</td>
                    <td className="py-2 px-2 text-gray-600">{row.age}</td>
                    <td className="py-2 px-2 text-gray-600">{row.sex}</td>
                    <td className="py-2 px-2 text-gray-600">{row.mobile}</td>
                     <td className="py-2 px-2 text-gray-600">{row.tests}</td>
                    <td className="py-2 px-2 text-right text-gray-600">{row.totalFee}</td>
                    <td className="py-2 px-2 text-gray-600">{row.payMode}</td>
                    <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{row.entryDate}</td>
                    <td className="py-2 px-2 text-gray-600">{row.entryBy}</td>
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
