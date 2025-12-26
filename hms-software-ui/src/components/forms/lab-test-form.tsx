"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export function LabTestForm() {
  const [formData, setFormData] = useState({
    opdNo: "",
    ipdNo: "",
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    loadTestFee: "",
    paymentMode: "",
  })

  const [selectedTests, setSelectedTests] = useState<string[]>([])

  const labTests = [
    { name: "ABDOMIN", price: "Rs.6000.00" },
    { name: "ABG", price: "Rs.1000.00" },
    { name: "AMONIA", price: "Rs.800.00" },
    { name: "APTT", price: "Rs.500.00" },
    { name: "ASOTIRE", price: "Rs.120.00" },
    { name: "BIOSPY", price: "Rs.1000.00" },
    { name: "BLOOD GROUPING", price: "Rs.30.00" },
    { name: "BTCT", price: "Rs.30.00" },
    { name: "C.S", price: "Rs.15000.00" },
    { name: "CALSIUM", price: "Rs.300.00" },
    { name: "CBC", price: "Rs.400.00" },
    { name: "CERVICAL REGION", price: "Rs.4000.00" },
    { name: "CHOLINESTERES", price: "Rs.600.00" },
    { name: "CKMB", price: "Rs.900.00" },
    { name: "COLOSTROE", price: "Rs.400.00" },
    { name: "COVID 19", price: "Rs.500.00" },
    { name: "CR PROTEIN", price: "Rs.200.00" },
    { name: "CRP", price: "Rs.200.00" },
    { name: "CRT", price: "Rs.30.00" },
    { name: "CT", price: "Rs.2500.00" },
    { name: "CT - SCAN", price: "Rs.5000.00" },
    { name: "CT SCAN", price: "Rs.2300.00" },
    { name: "CT SCAN BRAIN", price: "Rs.2300.00" },
    { name: "CT SCAN OF HEAD INJURY", price: "Rs.2300.00" },
    { name: "CT SCAN OF WHOLE SPINE", price: "Rs.6500.00" },
    { name: "CT SCAN(RPT)", price: "Rs.1900.00" },
    { name: "CT-SCAN OF WHOLE ABDOMEN", price: "Rs.5000.00" },
    { name: "DC", price: "Rs.30.00" },
    { name: "DENGUE", price: "Rs.500.00" },
    { name: "ECG", price: "Rs.250.00" },
    { name: "EEG", price: "Rs.1200.00" },
    { name: "ENDOSCOPY", price: "Rs.1500.00" },
    { name: "ESR", price: "Rs.30.00" },
    { name: "FBS", price: "Rs.50.00" },
    { name: "HB%", price: "Rs.30.00" },
    { name: "HB(A1C)", price: "Rs.450.00" },
    { name: "HCV", price: "Rs.100.00" },
    { name: "HEAD INJURY", price: "Rs.2300.00" },
    { name: "HIV/ HB&AG", price: "Rs.350.00" },
    { name: "HIV/HB S AG /HCV", price: "Rs.350.00" },
    { name: "HRCT", price: "Rs.6000.00" },
    { name: "HRCT THORAX", price: "Rs.4500.00" },
    { name: "KETONBODY", price: "Rs.40.00" },
    { name: "KIDENEY PROFILE(SR UEAR CRAEATNE)", price: "Rs.200.00" },
    { name: "KIDNEY PROFILE", price: "Rs.200.00" },
    { name: "L SPINE", price: "Rs.4500.00" },
    { name: "L.S SPINE", price: "Rs.5000.00" },
    { name: "LFT", price: "Rs.300.00" },
    { name: "LIPID PROFILE", price: "Rs.400.00" },
    { name: "LUMBER REGION", price: "Rs.4500.00" },
    { name: "MANTAL", price: "Rs.30.00" },
    { name: "MONTAC", price: "Rs.30.00" },
    { name: "MONTEX", price: "Rs.100.00" },
    { name: "MP(ICT)", price: "Rs.100.00" },
    { name: "MP(PARAKIN)", price: "Rs.140.00" },
    { name: "MX TEST", price: "Rs.50.00" },
    { name: "NA+K+", price: "Rs.300.00" },
    { name: "NA+K+CL-", price: "Rs.350.00" },
    { name: "NCV", price: "Rs.1500.00" },
    { name: "OCCOULT BLOOD", price: "Rs.50.00" },
    { name: "OT CHARGES", price: "Rs.5000.00" },
    { name: "OXYGEN CHARGES", price: "Rs.4160.00" },
    { name: "PERITONEAL FLUID", price: "Rs.1300.00" },
    { name: "PFT", price: "Rs.500.00" },
    { name: "PHY", price: "Rs.300.00" },
    { name: "PHY OUTDOOR", price: "Rs.200.00" },
    { name: "PHYSIOTHERAPY", price: "Rs.550.00" },
    { name: "PHYSIOTHERAPY (OD)", price: "Rs.500.00" },
    { name: "PLAIN CT SCAN", price: "Rs.2300.00" },
    { name: "PLAIN THORAX", price: "Rs.3500.00" },
    { name: "PNS", price: "Rs.3500.00" },
    { name: "PPBS", price: "Rs.50.00" },
    { name: "PREGNCY", price: "Rs.50.00" },
    { name: "PT INR", price: "Rs.500.00" },
    { name: "RA FEATOR", price: "Rs.80.00" },
    { name: "RBS", price: "Rs.50.00" },
    { name: "RFT", price: "Rs.1000.00" },
    { name: "RFT (RENAL FUNCTION)", price: "Rs.1000.00" },
    { name: "RH FACTOR", price: "Rs.80.00" },
    { name: "S.BLURUBIN", price: "Rs.350.00" },
    { name: "SCRUB TYPUS-(1GG/1GM)", price: "Rs.1200.00" },
    { name: "SERUM ALBUMIN", price: "Rs.150.00" },
    { name: "SERUM ELOTROLYTES", price: "Rs.350.00" },
    { name: "SIRUM CHOLINESTOR", price: "Rs.400.00" },
    { name: "SPUTUM CUTURE", price: "Rs.600.00" },
    { name: "SR (CALCIUM )", price: "Rs.300.00" },
    { name: "SR URIA CREATNINE", price: "Rs.200.00" },
    { name: "SR URIC ACID", price: "Rs.100.00" },
    { name: "SR(URIC ACID)", price: "Rs.100.00" },
    { name: "SR-AMALASE/LIPAS", price: "Rs.800.00" },
    { name: "SR-PROTIEN", price: "Rs.300.00" },
    { name: "STOOL", price: "Rs.30.00" },
    { name: "T3 T4 TSH", price: "Rs.500.00" },
    { name: "TEST1", price: "Rs.5.50" },
    { name: "TEST2", price: "Rs.10.00" },
    { name: "TEST3", price: "Rs.15.00" },
    { name: "THYROID", price: "Rs.500.00" },
    { name: "TLC", price: "Rs.30.00" },
    { name: "TOTAL-(PARAKIN/ALBOMI)", price: "Rs.300.00" },
    { name: "TOXO", price: "Rs.150.00" },
    { name: "TROP- T", price: "Rs.900.00" },
    { name: "URIC ACID", price: "Rs.100.00" },
    { name: "URIN(R,M0", price: "Rs.30.00" },
    { name: "URINE", price: "Rs.30.00" },
    { name: "URINE CES", price: "Rs.500.00" },
    { name: "URINE CULTURE", price: "Rs.500.00" },
    { name: "VDRL", price: "Rs.40.00" },
    { name: "WBC", price: "Rs.130.00" },
    { name: "WHOLE BODY SCAN", price: "Rs.15000.00" },
    { name: "WHOLE SPINE", price: "Rs.6000.00" },
    { name: "WIDAL", price: "Rs.50.00" },
    { name: "X-RAY", price: "Rs.350.00" },
    { name: "X-RAY OF BOTH HIP JT", price: "Rs.500.00" },
    { name: "X-RAY OF CHEST PA", price: "Rs.350.00" },
  ]

  const handleTestToggle = (testName: string) => {
    setSelectedTests(prev =>
      prev.includes(testName)
        ? prev.filter(t => t !== testName)
        : [...prev, testName]
    )
  }

  const handleSearch = (type: string) => {
    console.log(`Searching ${type}`)
  }

  const handleSave = () => {
    console.log("Lab Test saved:", { formData, selectedTests })
  }

  return (
    <div className="space-y-6">
      <Card className="card-rounded border-0 shadow-md max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2C4F4F]">Lab Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OPD No</Label>
              <div className="flex gap-2">
                <Input
                  value={formData.opdNo}
                  onChange={(e) => setFormData({...formData, opdNo: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="OPD No"
                />
                <Button
                  onClick={() => handleSearch('OPD')}
                  className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">IPD No</Label>
              <div className="flex gap-2">
                <Input
                  value={formData.ipdNo}
                  onChange={(e) => setFormData({...formData, ipdNo: e.target.value})}
                  className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
                  placeholder="IPD No"
                />
                <Button
                  onClick={() => handleSearch('IPD')}
                  className="h-11 px-6 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Patient's Name</Label>
              <Input
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Age</Label>
              <Input
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Gender</Label>
              <Input
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Mobile</Label>
              <Input
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Load Test Fee Amount</Label>
              <Input
                value={formData.loadTestFee}
                onChange={(e) => setFormData({...formData, loadTestFee: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Payment Mode</Label>
              <Input
                value={formData.paymentMode}
                onChange={(e) => setFormData({...formData, paymentMode: e.target.value})}
                className="h-11 rounded-lg border-gray-300 focus:border-[#2C4F4F] focus:ring-[#2C4F4F]"
              />
            </div>
          </div>

          {/* Tests Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-[#2C4F4F] mb-4">Tests</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {labTests.map((test, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Checkbox
                    id={`test-${index}`}
                    checked={selectedTests.includes(test.name)}
                    onCheckedChange={() => handleTestToggle(test.name)}
                    className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <label
                    htmlFor={`test-${index}`}
                    className="text-sm text-gray-700 cursor-pointer leading-tight"
                  >
                    {test.name}<br />
                    <span className="text-xs text-gray-500">{test.price}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full h-12 bg-[#2C4F4F] hover:bg-[#3B5F5F] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
