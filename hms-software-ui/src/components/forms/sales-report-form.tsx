"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesReportForm() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
  })

  const salesData = [
    { date: "19-12-2025", totalSales: "9,369.82", gst: "1,109.77", directSales: "4,011.30", opdSales: "5,357.52", ipdSales: "0.00" },
    { date: "18-12-2025", totalSales: "11,411.68", gst: "1,327.16", directSales: "0.00", opdSales: "11,411.68", ipdSales: "0.00" },
    { date: "17-12-2025", totalSales: "4,124.22", gst: "488.12", directSales: "0.00", opdSales: "4,124.22", ipdSales: "0.00" },
    { date: "16-12-2025", totalSales: "4,703.91", gst: "571.07", directSales: "0.00", opdSales: "4,703.91", ipdSales: "0.00" },
    { date: "14-12-2025", totalSales: "4,861.98", gst: "577.01", directSales: "0.00", opdSales: "4,861.98", ipdSales: "0.00" },
    { date: "13-12-2025", totalSales: "3,198.40", gst: "382.87", directSales: "0.00", opdSales: "3,198.40", ipdSales: "0.00" },
    { date: "12-12-2025", totalSales: "17,815.50", gst: "2,056.11", directSales: "2,005.85", opdSales: "0.00", ipdSales: "15,803.65" },
    { date: "11-12-2025", totalSales: "26,072.39", gst: "3,139.30", directSales: "11,262.27", opdSales: "1,083.50", ipdSales: "11,726.62" },
    { date: "08-12-2025", totalSales: "589.84", gst: "70.78", directSales: "0.00", opdSales: "0.00", ipdSales: "589.84" },
    { date: "07-12-2025", totalSales: "4,579.28", gst: "540.51", directSales: "1,469.00", opdSales: "0.00", ipdSales: "3,080.28" },
  ]

  const handleSearch = () => {
    console.log("Searching sales report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  const handlePrint = () => {
    console.log("Printing report")
  }

  const handleExport = () => {
    console.log("Exporting report")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Sales Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Date Filters */}
          <div className="flex items-end gap-4">
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

            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search
              </Button>
              <Button
                onClick={handleShowAll}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Show All
              </Button>
              <Button
                onClick={handlePrint}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Print
              </Button>
              <Button
                onClick={handleExport}
                className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Export
              </Button>
            </div>
          </div>

          {/* Sales Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Sales</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">GST</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Direct Sales</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">OPD Sales</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">IPD Sales</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-900">{sale.date}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{sale.totalSales}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.gst}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.directSales}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.opdSales}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.ipdSales}</td>
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
