"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExpiryReportForm() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
  })

  const expiryData = [
    { itemName: "ARM SLING", batchNo: "WS003", mfgDate: "Jan-2023", expDate: "Jan-1970", purchaseDate: "12-04-2024", vendorName: "SAI DISTRIBUTORS", stockQty: "4" },
    { itemName: "EML SYN", batchNo: "APM26003", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "14-12-2024", vendorName: "ANAMOL PHARMACEUTICALS", stockQty: "154" },
    { itemName: "SD ML SYN", batchNo: "ASM20003", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "14-12-2024", vendorName: "ARAVIND MEDICARE", stockQty: "100270" },
    { itemName: "MASK", batchNo: "AAAA", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "28-06-2025", vendorName: "HEMALATA SURGICAL", stockQty: "205" },
    { itemName: "CERVICAL ORTHOSIS", batchNo: "0521", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "25-06-2025", vendorName: "SAI DISTRIBUTORS", stockQty: "4" },
    { itemName: "KNEE BELT", batchNo: "425", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "25-06-2025", vendorName: "SAI DISTRIBUTORS", stockQty: "4" },
    { itemName: "SPIROMETER", batchNo: "880424", mfgDate: "Jan-1970", expDate: "Jan-1970", purchaseDate: "25-06-2025", vendorName: "SAI DISTRIBUTORS", stockQty: "8" },
  ]

  const handleSearch = () => {
    console.log("Searching expiry report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  const handlePrint = () => {
    console.log("Printing expiry report")
  }

  const handleExport = () => {
    console.log("Exporting expiry report")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Expiry Report</CardTitle>
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

          {/* Expiry Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Item Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Batch No</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Mfg Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Exp Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Purchase Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Vendor Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Stock Qty</th>
                </tr>
              </thead>
              <tbody>
                {expiryData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.itemName}</td>
                    <td className="py-3 px-4 text-gray-600">{item.batchNo}</td>
                    <td className="py-3 px-4 text-gray-600">{item.mfgDate}</td>
                    <td className="py-3 px-4 text-gray-600">{item.expDate}</td>
                    <td className="py-3 px-4 text-gray-600">{item.purchaseDate}</td>
                    <td className="py-3 px-4 text-gray-600">{item.vendorName}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{item.stockQty}</td>
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
