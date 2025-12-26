"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function IPDReportForm() {
  const [filters, setFilters] = useState({
    ipdNo: "",
    opdNo: "",
    patientName: "",
    mobile: "",
    admitFromDate: "",
    admitToDate: "",
  })

  // Sample data based on image
  const reportData = [
    { ipdNo: "CHIPD3149", opdNo: "CHOPD8654", patientName: "Mr.KRUPASINDHU ROUT", age: 68, sex: "Male", mobile: "9776831214", address: "BETADA", adDate: "18-12-2025 08:30:00 AM", ward: "Non AC Cabin", bedNo: "242", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "18-12-2025 12:49:01 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3148", opdNo: "CHOPD8652", patientName: "Miss.UMAMANI DAS", age: 51, sex: "Female", mobile: "9937824345", address: "AT/PO-ANARA,PS-NANDIPADA,DIST-KEONJHAR", adDate: "05-12-2025 11:30:00 AM", ward: "Medicine", bedNo: "255", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "11-12-2025 09:50:36 AM", entryBy: "First User" },
    { ipdNo: "CHIPD3147", opdNo: "CHOPD8649", patientName: "Mrs.SHANTILATA BHOI", age: 55, sex: "Female", mobile: "8073132977", address: "SORO", adDate: "07-12-2025 01:03:00 AM", ward: "Medicine", bedNo: "248", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "07-12-2025 05:01:00 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3146", opdNo: "CHOPD8645", patientName: "Mr.NIRANJAN MALIK", age: 65, sex: "Male", mobile: "9776978835", address: "NUAGAN", adDate: "29-11-2025 11:30:00 AM", ward: "Medicine", bedNo: "122", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "04-12-2025 11:00:18 AM", entryBy: "First User" },
    { ipdNo: "CHIPD3145", opdNo: "CHOPD8644", patientName: "Mr.RABINDRA DAS", age: 80, sex: "Male", mobile: "9777753783", address: "KANHEIBANKA", adDate: "24-11-2025 04:04:00 AM", ward: "AC Cabin", bedNo: "768", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "01-12-2025 03:29:59 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3144", opdNo: "CHOPD8643", patientName: "Mr.JOGENDRA MALIK", age: 76, sex: "Male", mobile: "6360661075", address: "MULISING", adDate: "24-11-2025 03:27:00 AM", ward: "AC Cabin", bedNo: "621", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "01-12-2025 12:18:33 PM", entryBy: "First User" },
    { ipdNo: "CHIPD3143", opdNo: "CHOPD8642", patientName: "Mr.GUBA MAHAKUD", age: 70, sex: "Male", mobile: "7678008037", address: "RAJPUR", adDate: "27-11-2025 09:30:00 AM", ward: "AC Cabin", bedNo: "621", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "30-11-2025 11:29:09 AM", entryBy: "First User" },
    { ipdNo: "CHIPD3142", opdNo: "CHOPD8641", patientName: "Mr.DAMODAR PARIDA", age: 75, sex: "Male", mobile: "9558982851", address: "PANISIALI", adDate: "24-11-2025", ward: "AC Cabin", bedNo: "770", status: "0.00", billTotal: "0.00", payment: "0.00", balance: "0.00", entryDate: "29-11-2025", entryBy: "First" },
  ]

  const handleSearch = () => {
    console.log("Searching IPD report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-[95vw] mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">IPD Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-end">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">IPD No</Label>
              <Input
                value={filters.ipdNo}
                onChange={(e) => setFilters({...filters, ipdNo: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="IPD No"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OPD No</Label>
              <Input
                value={filters.opdNo}
                onChange={(e) => setFilters({...filters, opdNo: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="OPD No"
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
              <Label className="text-sm font-medium text-gray-700">Admit From Dt</Label>
              <Input
                type="date"
                value={filters.admitFromDate}
                onChange={(e) => setFilters({...filters, admitFromDate: e.target.value})}
                className="h-10 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admit To Dt</Label>
              <Input
                type="date"
                value={filters.admitToDate}
                onChange={(e) => setFilters({...filters, admitToDate: e.target.value})}
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
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">IPD No</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">OPD No</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Patient Name</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Sex</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Address</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Addmission Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Ward</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Bed No</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Bill Total</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Payment</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Balance</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reportData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2 px-2 text-gray-600">{row.ipdNo}</td>
                    <td className="py-2 px-2 text-gray-600">{row.opdNo}</td>
                    <td className="py-2 px-2 font-medium text-gray-900">{row.patientName}</td>
                    <td className="py-2 px-2 text-gray-600">{row.age}</td>
                    <td className="py-2 px-2 text-gray-600">{row.sex}</td>
                    <td className="py-2 px-2 text-gray-600">{row.mobile}</td>
                    <td className="py-2 px-2 text-gray-600 max-w-[150px] truncate" title={row.address}>{row.address}</td>
                    <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{row.adDate}</td>
                    <td className="py-2 px-2 text-gray-600">{row.ward}</td>
                    <td className="py-2 px-2 text-gray-600">{row.bedNo}</td>
                    <td className="py-2 px-2 text-gray-600">{row.status}</td>
                    <td className="py-2 px-2 text-right text-gray-600">{row.billTotal}</td>
                    <td className="py-2 px-2 text-right text-gray-600">{row.payment}</td>
                    <td className="py-2 px-2 text-right text-gray-600">{row.balance}</td>
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
