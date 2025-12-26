"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserCheck, Bed, Activity, Calendar, Clock, DollarSign, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { DepartmentForm } from "@/components/forms/department-form"
import { ItemForm } from "@/components/forms/item-form"
import { ConsultantForm } from "@/components/forms/consultant-form"
import { EmployeeForm } from "@/components/forms/employee-form"
import { VendorForm } from "@/components/forms/vendor-form"
import { SurgeryForm } from "@/components/forms/surgery-form"
import { BedForm } from "@/components/forms/bed-form"
import { ServiceTestForm } from "@/components/forms/service-test-form"
import { PurchaseEntryForm } from "@/components/forms/purchase-entry-form"
import { PurchaseReturnForm } from "@/components/forms/purchase-return-form"
import { SalesForm } from "@/components/forms/sales-form"
import { SalesReturnForm } from "@/components/forms/sales-return-form"
import { OPDRegistrationForm } from "@/components/forms/opd-registration-form"
import { OPDRegisterForm } from "@/components/forms/opd-register-form"
import { LabTestForm } from "@/components/forms/lab-test-form"
import { PathologyTestListForm } from "@/components/forms/pathology-test-list-form"
import { AmbulanceForm } from "@/components/forms/ambulance-form"
import { ReferForm } from "@/components/forms/refer-form"
import { IPDRegistrationForm } from "@/components/forms/ipd-registration-form"
import { NursingCareForm } from "@/components/forms/nursing-care-form"
import { IPDRegisterForm } from "@/components/forms/ipd-register-form"
import { IPDAccountsForm } from "@/components/forms/ipd-accounts-form"
import { PatientCareForm } from "@/components/forms/patient-care-form"
import { SalesReportForm } from "@/components/forms/sales-report-form"
import { StockReportForm } from "@/components/forms/stock-report-form"
import { ExpiryReportForm } from "@/components/forms/expiry-report-form"
import { PurchaseReportForm } from "@/components/forms/purchase-report-form"
import { OPDReportForm } from "@/components/forms/opd-report-form"
import { IPDReportForm } from "@/components/forms/ipd-report-form"
import { LabTestReportForm } from "@/components/forms/lab-test-report-form"
import { ReferReportForm } from "@/components/forms/refer-report-form"
import { AmbulanceReportForm } from "@/components/forms/ambulance-report-form"

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "#2C4F4F",
    bgGradient: "from-[#2C4F4F]/10 to-[#3B5F5F]/10",
  },
  {
    title: "Appointments Today",
    value: "156",
    change: "+8.2%",
    icon: Calendar,
    color: "#D4AF37",
    bgGradient: "from-[#D4AF37]/10 to-[#F5E8C8]/10",
  },
  {
    title: "Occupied Beds",
    value: "89%",
    change: "+5.7%",
    icon: Bed,
    color: "#10B981",
    bgGradient: "from-[#10B981]/10 to-[#34D399]/10",
  },
  {
    title: "Revenue Today",
    value: "₹67K",
    change: "+15.3%",
    icon: DollarSign,
    color: "#3B82F6",
    bgGradient: "from-[#3B82F6]/10 to-[#60A5FA]/10",
  },
]

const patientTrendData = [
  { month: "Jan", patients: 800 },
  { month: "Feb", patients: 950 },
  { month: "Mar", patients: 1100 },
  { month: "Apr", patients: 1050 },
  { month: "May", patients: 1200 },
  { month: "Jun", patients: 1234 },
]

const departmentData = [
  { name: "Cardiology", value: 450, color: "#2C4F4F" },
  { name: "Orthopedics", value: 320, color: "#D4AF37" },
  { name: "Neurology", value: 280, color: "#10B981" },
  { name: "Pediatrics", value: 380, color: "#3B82F6" },
  { name: "General", value: 520, color: "#EC4899" },
]

const recentPatients = [
  {
    id: "PT001",
    name: "Rajesh Kumar",
    department: "Cardiology",
    status: "Admitted",
    time: "2h ago",
  },
  {
    id: "PT002",
    name: "Priya Sharma",
    department: "Orthopedics",
    status: "Consultation",
    time: "3h ago",
  },
  {
    id: "PT003",
    name: "Amit Patel",
    department: "Neurology",
    status: "Admitted",
    time: "5h ago",
  },
]

export function DashboardContent({ activeMenu }: { activeMenu: string }) {
  // Show forms for Master menu items
  if (activeMenu === "Departments") return <DepartmentForm />
  if (activeMenu === "Items") return <ItemForm />
  if (activeMenu === "Consultants") return <ConsultantForm />
  if (activeMenu === "Employees") return <EmployeeForm />
  if (activeMenu === "Vendors") return <VendorForm />
  if (activeMenu === "Surgery") return <SurgeryForm />
  if (activeMenu === "Beds") return <BedForm />
  if (activeMenu === "Service/Tests") return <ServiceTestForm />
  
  // Show forms for Transaction menu items
  if (activeMenu === "Purchase Entry") return <PurchaseEntryForm />
  if (activeMenu === "Purchase Return") return <PurchaseReturnForm />
  if (activeMenu === "Sales") return <SalesForm />
  if (activeMenu === "Sales Return") return <SalesReturnForm />
  
  // Show forms for Outdoor menu items
  if (activeMenu === "Registration") return <OPDRegistrationForm />
  if (activeMenu === "OPD Register") return <OPDRegisterForm />
  if (activeMenu === "Lab Test") return <LabTestForm />
  if (activeMenu === "Pathology Dept") return <PathologyTestListForm />
  if (activeMenu === "Ambulance") return <AmbulanceForm />
  if (activeMenu === "Refer") return <ReferForm />
  
  // Show forms for Indoor menu items
  if (activeMenu === "IPD Registration") return <IPDRegistrationForm />
  if (activeMenu === "Nursing Care") return <NursingCareForm />
  if (activeMenu === "IPD Register") return <IPDRegisterForm />
  if (activeMenu === "IPD Accounts") return <IPDAccountsForm />
  if (activeMenu === "Care") return <PatientCareForm />
  
  // Show forms for Reports menu items
  if (activeMenu === "Daily Sales Report") return <SalesReportForm />
  if (activeMenu === "Stock Report") return <StockReportForm />
  if (activeMenu === "Expiry Report") return <ExpiryReportForm />
  if (activeMenu === "Daily Purchase Report") return <PurchaseReportForm />
  if (activeMenu === "OPD Report") return <OPDReportForm />
  if (activeMenu === "IPD Report") return <IPDReportForm />
  if (activeMenu === "Lab Test Report") return <LabTestReportForm />
  if (activeMenu === "Refer Report") return <ReferReportForm />
  if (activeMenu === "Ambulance Report") return <AmbulanceReportForm />

  // Default Dashboard view
  return (
    <div className="space-y-6">
      {/* Rounded Stat Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className={cn(
                "card-rounded border-0 bg-gradient-to-br shadow-md transition-all duration-300 smooth-transform hover:shadow-xl hover:-translate-y-1 cursor-pointer",
                stat.bgGradient
              )}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="rounded-xl p-3 shadow-sm"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/80 text-xs font-semibold">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-xs text-gray-600">{stat.title}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Patient Trends */}
        <Card className="card-rounded border-0 shadow-md">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-[#2C4F4F]">Patient Trends</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 text-xs text-[#D4AF37] hover:bg-[#D4AF37]/10">
                View Report <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={patientTrendData}>
                <defs>
                  <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2C4F4F" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2C4F4F" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" style={{ fontSize: '11px' }} stroke="#9CA3AF" />
                <YAxis style={{ fontSize: '11px' }} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="patients"
                  stroke="#2C4F4F"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorPatients)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card className="card-rounded border-0 shadow-md">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-[#2C4F4F]">Departments</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 text-xs text-[#D4AF37] hover:bg-[#D4AF37]/10">
                View All <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={(entry) => entry.name}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-rounded border-0 shadow-md">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-bold text-[#2C4F4F]">Recent Patients</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs text-[#D4AF37] hover:bg-[#D4AF37]/10">
              View All <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 transition-all duration-200 smooth-transform hover:shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2C4F4F] flex items-center justify-center text-white font-bold text-sm">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-gray-900">{patient.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {patient.id}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{patient.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={patient.status === "Admitted" ? "default" : "secondary"}
                    className={patient.status === "Admitted" ? "bg-[#2C4F4F]" : ""}
                  >
                    {patient.status}
                  </Badge>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {patient.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
