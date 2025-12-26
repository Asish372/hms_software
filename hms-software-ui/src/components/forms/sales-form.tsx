"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Printer } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function SalesForm() {
  const [formData, setFormData] = useState({
    saleType: "",
    opdPatient: "",
    ipdPatient: "",
    prescribingDoctor: "Dr. Maheswar Das",
    billDate: "",
    customerName: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
    item: "",
    batchNo: "",
    stockQuantity: "",
    salesQuantity: "",
    mrp: "",
    singlePC: "",
    gst: "",
    mfgDate: "",
    expiryDate: "",
  })

  const salesData = [
    { billNo: "CH14050", billDate: "12-12-2025", type: "Direct", opdIpd: "-", customer: "KAILASH CH MAHARATRA", mobile: "9731.90", amount: "9731.90", entryDate: "15-12-2025 01:24:24 PM", entryBy: "First User" },
    { billNo: "CH14049", billDate: "18-12-2025", type: "OPD", opdIpd: "CHOPD8655", customer: "KHOKAN MANDAL", mobile: "0.00", amount: "0.00", entryDate: "15-12-2025 12:59:13 PM", entryBy: "First User" },
    { billNo: "CH14048", billDate: "16-12-2025", type: "OPD", opdIpd: "CHOPD8655", customer: "KHOKAN MANDAL", mobile: "3905.02", amount: "3905.02", entryDate: "15-12-2025 11:55:38 AM", entryBy: "First User" },
    { billNo: "CH14047", billDate: "18-12-2025", type: "OPD", opdIpd: "CHOPD8655", customer: "SUDARSHAN BEHERA", mobile: "1952.30", amount: "1952.30", entryDate: "15-12-2025 11:16:42 AM", entryBy: "First User" },
    { billNo: "CH14046", billDate: "18-12-2025", type: "Direct", opdIpd: "-", customer: "PANCHANAN SENORA", mobile: "280.00", amount: "280.00", entryDate: "15-12-2025 09:13:49 AM", entryBy: "First User" },
  ]

  const handleSearch = () => {
    console.log("Searching...")
  }

  const handleAddItem = () => {
    console.log("Item added")
  }

  const handleCompleteSale = () => {
    console.log("Sale completed")
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Sales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sales Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F]">Sales Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Sale Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, saleType: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Sale Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="direct" className="focus:bg-white/20 focus:text-white">Direct</SelectItem>
                    <SelectItem value="opd" className="focus:bg-white/20 focus:text-white">OPD</SelectItem>
                    <SelectItem value="ipd" className="focus:bg-white/20 focus:text-white">IPD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">OPD Patient</Label>
                <Select onValueChange={(value) => setFormData({...formData, opdPatient: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="OPD No" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="opd1" className="focus:bg-white/20 focus:text-white">CHOPD8655</SelectItem>
                    <SelectItem value="opd2" className="focus:bg-white/20 focus:text-white">CHOPD8654</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">IPD Patient</Label>
                <Select onValueChange={(value) => setFormData({...formData, ipdPatient: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="IPD No" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="ipd1" className="focus:bg-white/20 focus:text-white">CHIPD1001</SelectItem>
                    <SelectItem value="ipd2" className="focus:bg-white/20 focus:text-white">CHIPD1002</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Search</Label>
                <Button
                  onClick={handleSearch}
                  className="w-full h-11 bg-[#17a2b8] hover:bg-[#138496] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Prescribing Doctor</Label>
                <Input
                  value={formData.prescribingDoctor}
                  className="h-11 rounded-lg border-gray-300 bg-gray-100"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Bill Date</Label>
                <Input
                  type="date"
                  value={formData.billDate}
                  onChange={(e) => setFormData({...formData, billDate: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Bill Date"
                />
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="border-t pt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F]">Customer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Name</Label>
                <Input
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Customer Name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Age</Label>
                <Input
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Age"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Gender</Label>
                <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="male" className="focus:bg-white/20 focus:text-white">Male</SelectItem>
                    <SelectItem value="female" className="focus:bg-white/20 focus:text-white">Female</SelectItem>
                    <SelectItem value="other" className="focus:bg-white/20 focus:text-white">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Mobile</Label>
                <Input
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Mobile"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Address</Label>
              <Textarea
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Sales Item */}
          <div className="border-t pt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F]">Sales Item</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Item</Label>
                <Select onValueChange={(value) => setFormData({...formData, item: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Item" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="item1" className="focus:bg-white/20 focus:text-white">Item 1</SelectItem>
                    <SelectItem value="item2" className="focus:bg-white/20 focus:text-white">Item 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Batch No</Label>
                <Select onValueChange={(value) => setFormData({...formData, batchNo: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Batch" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="batch1" className="focus:bg-white/20 focus:text-white">Batch 001</SelectItem>
                    <SelectItem value="batch2" className="focus:bg-white/20 focus:text-white">Batch 002</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Stock Quantity</Label>
                <Input
                  value={formData.stockQuantity}
                  className="h-11 rounded-lg border-gray-300 bg-gray-100"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Sales Quantity</Label>
                <Input
                  value={formData.salesQuantity}
                  onChange={(e) => setFormData({...formData, salesQuantity: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Price</Label>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-10 h-11 bg-gray-100 border border-gray-300 rounded-l-lg text-gray-600">₹</span>
                  <Input
                    value={formData.mrp}
                    onChange={(e) => setFormData({...formData, mrp: e.target.value})}
                    className="h-11 rounded-r-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="MRP"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">&nbsp;</Label>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-10 h-11 bg-gray-100 border border-gray-300 rounded-l-lg text-gray-600">₹</span>
                  <Input
                    value={formData.singlePC}
                    onChange={(e) => setFormData({...formData, singlePC: e.target.value})}
                    className="h-11 rounded-r-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="Single PC"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">GST%</Label>
                <Input
                  value={formData.gst}
                  onChange={(e) => setFormData({...formData, gst: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Mfg Date</Label>
                <Input
                  value={formData.mfgDate}
                  className="h-11 rounded-lg border-gray-300 bg-gray-100"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Expiry Date</Label>
                <Input
                  value={formData.expiryDate}
                  className="h-11 rounded-lg border-gray-300 bg-gray-100"
                  disabled
                />
              </div>

              <div className="space-y-2 flex items-end">
                <Button
                  onClick={handleAddItem}
                  className="w-full h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Complete Sale Button */}
          <div className="pt-4">
            <Button
              onClick={handleCompleteSale}
              className="w-full h-14 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Complete Sale
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sales List */}
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Sales List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Bill No</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Bill Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Sales Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">OPD/IPD SI No</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Mobile</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Total Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entry Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Entry By</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#2C4F4F] font-medium">{sale.billNo}</span>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-[#2C4F4F]/10">
                          <Printer className="h-3 w-3 text-[#17a2b8]" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{sale.billDate}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.type}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.opdIpd}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{sale.customer}</td>
                    <td className="py-3 px-4 text-gray-600">{sale.mobile}</td>
                    <td className="py-3 px-4 text-right text-gray-900 font-semibold">{sale.amount}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{sale.entryDate}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs text-red-600 font-medium">{sale.entryBy}</span>
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
