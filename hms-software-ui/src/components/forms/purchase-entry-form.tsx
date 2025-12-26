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

export function PurchaseEntryForm() {
  const [formData, setFormData] = useState({
    vendorName: "",
    billDate: "",
    billNo: "",
    itemName: "",
    companyName: "",
    mfgDate: "",
    expDate: "",
    batchNo: "",
    strip: "",
    nos: "",
    quantity: "",
    free: "",
    mrp: "",
    purchasePrice: "",
    total: "",
    discountType: "-",
    discountRate: "",
    discountAmt: "",
    gstType: "-",
    gstRate: "",
    gstAmt: "",
    totalPrice: "",
    singleTabletPrice: "",
  })

  const handleAdd = () => {
    console.log("Item added:", formData)
    // Add item logic here
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Purchase Entry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vendorName" className="text-sm font-medium text-gray-700">
                Vendor Name
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, vendorName: value})}>
                <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                  <SelectValue placeholder="Vendor Name" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                  <SelectItem value="vendor1" className="focus:bg-white/20 focus:text-white">Vendor 1</SelectItem>
                  <SelectItem value="vendor2" className="focus:bg-white/20 focus:text-white">Vendor 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="billDate" className="text-sm font-medium text-gray-700">
                Bill Date
              </Label>
              <Input
                id="billDate"
                type="date"
                value={formData.billDate}
                onChange={(e) => setFormData({...formData, billDate: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Bill Date"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billNo" className="text-sm font-medium text-gray-700">
                Bill No
              </Label>
              <Input
                id="billNo"
                value={formData.billNo}
                onChange={(e) => setFormData({...formData, billNo: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                placeholder="Vendor Bill no"
              />
            </div>
          </div>

          {/* Item Details Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F] mb-4">Item Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Item Name</Label>
                <Select onValueChange={(value) => setFormData({...formData, itemName: value})}>
                  <SelectTrigger className="h-11 rounded-lg border-[#2C4F4F]/30 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]">
                    <SelectValue placeholder="Item Name" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C4F4F]/95 backdrop-blur-md border-[#2C4F4F] text-white">
                    <SelectItem value="item1" className="focus:bg-white/20 focus:text-white">Item 1</SelectItem>
                    <SelectItem value="item2" className="focus:bg-white/20 focus:text-white">Item 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Company Name</Label>
                <Input
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Company Name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Mfg Date</Label>
                <Input
                  type="date"
                  value={formData.mfgDate}
                  onChange={(e) => setFormData({...formData, mfgDate: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Exp Date</Label>
                <Input
                  type="date"
                  value={formData.expDate}
                  onChange={(e) => setFormData({...formData, expDate: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Batch No</Label>
                <Input
                  value={formData.batchNo}
                  onChange={(e) => setFormData({...formData, batchNo: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Batch No"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Strip</Label>
                <Input
                  value={formData.strip}
                  onChange={(e) => setFormData({...formData, strip: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="No of strips"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Nos (Tablet in one strip)</Label>
                <Input
                  value={formData.nos}
                  onChange={(e) => setFormData({...formData, nos: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Strip tablet nos"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Quantity (Strip x Nos)</Label>
                <Input
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Quantity"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Free</Label>
                <Input
                  value={formData.free}
                  onChange={(e) => setFormData({...formData, free: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Free"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">MRP</Label>
                <Input
                  value={formData.mrp}
                  onChange={(e) => setFormData({...formData, mrp: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="MRP"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Purchase Price per Strip</Label>
                <Input
                  value={formData.purchasePrice}
                  onChange={(e) => setFormData({...formData, purchasePrice: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Purchase Price"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Total (PP x Strip)</Label>
                <Input
                  value={formData.total}
                  onChange={(e) => setFormData({...formData, total: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Total"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-medium text-gray-700">Discount</Label>
                <div className="flex gap-2">
                  <Select value={formData.discountType} onValueChange={(value) => setFormData({...formData, discountType: value})}>
                    <SelectTrigger className="w-16 h-11 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-">-</SelectItem>
                      <SelectItem value="%">%</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    value={formData.discountRate}
                    onChange={(e) => setFormData({...formData, discountRate: e.target.value})}
                    className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="Rate"
                  />
                  <Input
                    value={formData.discountAmt}
                    onChange={(e) => setFormData({...formData, discountAmt: e.target.value})}
                    className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="Amount"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-medium text-gray-700">GST</Label>
                <div className="flex gap-2">
                  <Select value={formData.gstType} onValueChange={(value) => setFormData({...formData, gstType: value})}>
                    <SelectTrigger className="w-16 h-11 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-">-</SelectItem>
                      <SelectItem value="%">%</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    value={formData.gstRate}
                    onChange={(e) => setFormData({...formData, gstRate: e.target.value})}
                    className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="Rate"
                  />
                  <Input
                    value={formData.gstAmt}
                    onChange={(e) => setFormData({...formData, gstAmt: e.target.value})}
                    className="flex-1 h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                    placeholder="Amount"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Total Price</Label>
                <Input
                  value={formData.totalPrice}
                  onChange={(e) => setFormData({...formData, totalPrice: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Total Price"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Single Tablet Sale Price</Label>
                <Input
                  value={formData.singleTabletPrice}
                  onChange={(e) => setFormData({...formData, singleTabletPrice: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="Single Tablet Price"
                />
              </div>

              <div className="space-y-2 flex items-end">
                <Button
                  onClick={handleAdd}
                  className="w-full h-11 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Purchased Items Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F] mb-4">Purchased Items</h3>
            <div className="min-h-[100px] bg-gray-50 rounded-lg p-4 text-center text-gray-500">
              No items added yet
            </div>
          </div>

          <div className="pt-2">
            <a href="#" className="text-[#2C4F4F] text-sm hover:underline font-medium">
              View Purchase List
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
