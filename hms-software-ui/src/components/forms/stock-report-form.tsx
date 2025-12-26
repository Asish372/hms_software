"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function StockReportForm() {
  const [filters, setFilters] = useState({
    itemName: "",
    vendor: "",
  })

  const stockData = [
    { itemName: "OM2 TAB", batchNo: "182429698", vendorName: "extra", purchaseDate: "11-09-2025", mfgDate: "Nov-2024", expDate: "Oct-2027", mrp: "212.00", purRate: "138.00", totalAmt: "3564.00", totalQty: "100", currentStock: "150" },
    { itemName: "MET XL 25 TAB", batchNo: "23024", vendorName: "extra", purchaseDate: "10-07-2025", mfgDate: "Dec-2024", expDate: "Nov-2027", mrp: "95.20", purRate: "56.48", totalAmt: "1265.15", totalQty: "300", currentStock: "285" },
    { itemName: "NIMPIP2R TAB", batchNo: "29076750", vendorName: "KYOR MEDICAL AGENCIES", purchaseDate: "13-09-2025", mfgDate: "Jan-2025", expDate: "Jun-2027", mrp: "282.15", purRate: "201.54", totalAmt: "4574.50", totalQty: "50", currentStock: "0" },
    { itemName: "KNEEL BELI", batchNo: "425", vendorName: "SAI DISTRIBUTORS", purchaseDate: "25-06-2025", mfgDate: "Jan-1970", expDate: "Mar-1970", mrp: "425.00", purRate: "265.00", totalAmt: "1004.50", totalQty: "4", currentStock: "4" },
    { itemName: "INJ IRA CATH", batchNo: "48048", vendorName: "OMM MAA AGENCY", purchaseDate: "17-05-2025", mfgDate: "Jan-2025", expDate: "Jan-2028", mrp: "231.00", purRate: "19.61", totalAmt: "4282.82", totalQty: "195", currentStock: "81" },
  ]

  const handlePrint = () => {
    console.log("Printing stock report")
  }

  const handleExport = () => {
    console.log("Exporting stock report")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Stock Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="flex items-end gap-4">
            <div className="flex-1 space-y-2">
              <Label className="text-sm font-medium text-gray-700">Item Name</Label>
              <Select onValueChange={(value) => setFilters({...filters, itemName: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Item Name" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="item1" className="focus:bg-white/20 focus:text-white">OM2 TAB</SelectItem>
                  <SelectItem value="item2" className="focus:bg-white/20 focus:text-white">MET XL 25 TAB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 space-y-2">
              <Label className="text-sm font-medium text-gray-700">Vendor</Label>
              <Select onValueChange={(value) => setFilters({...filters, vendor: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Vendor" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="vendor1" className="focus:bg-white/20 focus:text-white">extra</SelectItem>
                  <SelectItem value="vendor2" className="focus:bg-white/20 focus:text-white">KYOR MEDICAL AGENCIES</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
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

          {/* Stock Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Item Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Batch No</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Vendor Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Purchase Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mfg Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Exp Date</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">MRP</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Pur Rate</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Total Amt</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Total Qty</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Current Stock</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stock, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-3 font-medium text-gray-900">{stock.itemName}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.batchNo}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.vendorName}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.purchaseDate}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.mfgDate}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.expDate}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.mrp}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.purRate}</td>
                    <td className="py-3 px-3 text-gray-900 font-medium">{stock.totalAmt}</td>
                    <td className="py-3 px-3 text-gray-600">{stock.totalQty}</td>
                    <td className="py-3 px-3 text-gray-900 font-medium">{stock.currentStock}</td>
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
