"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ReferReportForm() {
  const [filters, setFilters] = useState({
    ipdNo: "",
    dateFrom: "",
    dateTo: "",
  })

  // Sample data based on image
  const reportData = [
    { ipdNo: "CHIPD3", referDate: "12-11-2019 06:53:08", from: "LOC1", to: "LOC 2", fareCharge: "500.00", entryBy: "First User" },
  ]
  const total = "500.00"

  const handleSearch = () => {
    console.log("Searching Refer report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Ambulance Refer Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">IPD No</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Refer Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">From</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">To</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Fare Charge</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reportData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-600">{row.ipdNo}</td>
                    <td className="py-3 px-4 text-gray-600">{row.referDate}</td>
                    <td className="py-3 px-4 text-gray-600">{row.from}</td>
                    <td className="py-3 px-4 text-gray-600">{row.to}</td>
                    <td className="py-3 px-4 text-right text-gray-600">{row.fareCharge}</td>
                    <td className="py-3 px-4 text-gray-600">{row.entryBy}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                    <td className="py-3 px-4">Total</td>
                    <td colSpan={3}></td>
                    <td className="py-3 px-4 text-right">{total}</td>
                    <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
