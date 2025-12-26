"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AmbulanceReportForm() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
  })

  // Sample data - empty as per image
  const reportData: any[] = []

  const handleSearch = () => {
    console.log("Searching Ambulance report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Ambulance Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Call No</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">From</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">To</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Ambulance Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Fare Charge</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entry By</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entry Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reportData.length > 0 ? (
                  reportData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                       {/* Render rows here */}
                    </tr>
                  ))
                ) : (
                    <tr>
                        <td colSpan={8} className="py-3 px-4 text-center text-gray-500 bg-gray-50">No data</td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
