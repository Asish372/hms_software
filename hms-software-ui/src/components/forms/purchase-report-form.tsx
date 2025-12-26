"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PurchaseReportForm() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
  })

  const purchaseData = [
    { billDate: "03-10-2020", vendor: "extra", itemName: "ARTAZOLAPAN A TAB", quantity: "100", discount: "0.00", batchNo: "1456", gst: "Amount", gstAmt: "12.00", packSize: "10", expDate: "Apr-2020", mrp: "191.00", total: "112.00" },
    { billDate: "03-10-2020", vendor: "SUSHITA PHARMACEUTICALS", itemName: "ARTAZOPRIN A TAB", quantity: "100", discount: "0.00", batchNo: "375", gst: "Percent", gstAmt: "29.57", packSize: "10", expDate: "May-2020", mrp: "170.00", total: "246.40" },
    { billDate: "09-11-2020", vendor: "EXTRA", itemName: "ZACOMP PLUS INJ", quantity: "460", discount: "0.00", batchNo: "098E", gst: "Percent", gstAmt: "751.89", packSize: "1", expDate: "Jan-1970", mrp: "90.00", total: "6,182.40" },
    { billDate: "09-11-2020", vendor: "EXTRA", itemName: "D+C D MED GEL", quantity: "6", discount: "0.00", batchNo: "38052", gst: "Percent", gstAmt: "9.68", packSize: "1", expDate: "Jan-1970", mrp: "148.20", total: "80.64" },
  ]

  const handleSearch = () => {
    console.log("Searching purchase report")
  }

  const handleShowAll = () => {
    console.log("Showing all")
  }

  const handlePrint = () => {
    console.log("Printing purchase report")
  }

  const handleExport = () => {
    console.log("Exporting purchase report")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Purchase Report</CardTitle>
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

          {/* Purchase Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Bill Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Vendor</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Item Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Quantity</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Discount</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Batch No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">GST</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">GST Amt</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Pack Size</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Exp Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">MRP</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                {purchaseData.map((purchase, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3 text-gray-600">{purchase.billDate}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.vendor}</td>
                    <td className="py-3 px-3 font-medium text-gray-900">{purchase.itemName}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.quantity}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.discount}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.batchNo}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.gst}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.gstAmt}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.packSize}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.expDate}</td>
                    <td className="py-3 px-3 text-gray-600">{purchase.mrp}</td>
                    <td className="py-3 px-3 text-gray-900 font-medium">{purchase.total}</td>
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
