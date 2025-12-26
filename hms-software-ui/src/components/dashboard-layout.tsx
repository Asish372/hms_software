"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Database,
  ArrowRightLeft,
  UserRound,
  Building2,
  FileText,
  Users,
  UserCog,
  UserCheck,
  Package,
  Contact,
  Scissors,
  FlaskConical,
  Bed,
  Settings,
  BarChart3,
  Wallet,
  ChevronRight,
  Clock,
  LogOut,
  ShoppingCart,
  RotateCcw,
  BookOpen,
  ClipboardList,
  Stethoscope,
  TestTube,
  Microscope,
  Send,
  Ambulance,
  Heart,
  Receipt,
  CalendarDays,
  TrendingUp,
  PackageX,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "#dashboard",
  },
  {
    title: "Masters",
    icon: Database,
    href: "#masters",
    subItems: [
      { title: "Departments", icon: Users, href: "#masters/departments" },
      { title: "Consultants", icon: UserCog, href: "#masters/consultants" },
      { title: "Employees", icon: UserCheck, href: "#masters/employees" },
      { title: "Items", icon: Package, href: "#masters/items" },
      { title: "Vendors", icon: Contact, href: "#masters/vendors" },
      { title: "Surgery", icon: Scissors, href: "#masters/surgery" },
      { title: "Service/Tests", icon: FlaskConical, href: "#masters/tests" },
      { title: "Beds", icon: Bed, href: "#masters/beds" },
    ],
  },
  {
    title: "Transactions",
    icon: ArrowRightLeft,
    href: "#transactions",
    subItems: [
      { title: "Purchase Entry", icon: BookOpen, href: "#transactions/purchase-entry" },
      { title: "Purchase Return", icon: RotateCcw, href: "#transactions/purchase-return" },
      { title: "Sales", icon: ShoppingCart, href: "#transactions/sales" },
      { title: "Sales Return", icon: RotateCcw, href: "#transactions/sales-return" },
    ],
  },
  {
    title: "Outdoor",
    icon: UserRound,
    href: "#outdoor",
    subItems: [
      { title: "Registration", icon: ClipboardList, href: "#outdoor/registration" },
      { title: "OPD Register", icon: Stethoscope, href: "#outdoor/opd-register" },
      { title: "Lab Test", icon: TestTube, href: "#outdoor/lab-test" },
      { title: "Pathology Dept", icon: Microscope, href: "#outdoor/pathology" },
      { title: "Refer", icon: Send, href: "#outdoor/refer" },
      { title: "Ambulance", icon: Ambulance, href: "#outdoor/ambulance" },
    ],
  },
  {
    title: "Indoor",
    icon: Building2,
    href: "#indoor",
    subItems: [
      { title: "Registration", icon: ClipboardList, href: "#indoor/registration" },
      { title: "IPD Register", icon: Bed, href: "#indoor/ipd-register" },
      { title: "Nursing Care", icon: Heart, href: "#indoor/nursing-care" },
      { title: "IPD Accounts", icon: Receipt, href: "#indoor/ipd-accounts" },
      { title: "Care", icon: Heart, href: "#indoor/care" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "#reports",
    subItems: [
      { title: "Stock Report", icon: Package, href: "#reports/stock" },
      { title: "Expiry Report", icon: PackageX, href: "#reports/expiry" },
      { title: "Daily Sales Report", icon: TrendingUp, href: "#reports/daily-sales" },
      { title: "Daily Purchase Report", icon: ShoppingCart, href: "#reports/daily-purchase" },
      { title: "OPD Report", icon: Stethoscope, href: "#reports/opd" },
      { title: "IPD Report", icon: Bed, href: "#reports/ipd" },
      { title: "Lab Test Report", icon: TestTube, href: "#reports/lab-test" },
      { title: "Refer Report", icon: Send, href: "#reports/refer" },
      { title: "Ambulance Report", icon: Ambulance, href: "#reports/ambulance" },
    ],
  },
]

export function DashboardLayout({ children }: { children: (props: { activeMenu: string }) => React.ReactNode }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard")
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleSubMenu = (title: string) => {
    if (expandedMenu === title) {
      setExpandedMenu(null)
    } else {
      setExpandedMenu(title)
      setActiveMenu(title)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F7FA]">
      {/* Dark Teal Sidebar with Rounded Right Corners */}
      <aside className="w-64 sidebar-gradient sidebar-rounded shadow-2xl flex flex-col">
        {/* Hospital Logo & Branding */}
        <div className="p-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] shadow-lg">
                <Building2 className="h-7 w-7 text-[#2C4F4F]" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">HMS PRO</h1>
                <p className="text-white/70 text-xs">Hospital Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeMenu === item.title || (item.subItems && item.subItems.some(sub => activeMenu === sub.title))
            const isExpanded = expandedMenu === item.title
            const hasSubItems = item.subItems && item.subItems.length > 0

            return (
              <Collapsible
                key={item.title}
                open={isExpanded}
                onOpenChange={() => toggleSubMenu(item.title)}
                className="w-full"
              >
                <div className="relative group">
                  {hasSubItems ? (
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start h-11 rounded-xl transition-all duration-200 smooth-transform",
                          isActive 
                            ? "bg-[#D4AF37] text-[#2C4F4F] font-semibold shadow-lg" 
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Icon className="h-5 w-5" />
                          <span className="text-sm">{item.title}</span>
                        </div>
                        <ChevronRight 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200", 
                            isExpanded && "rotate-90"
                          )} 
                        />
                      </Button>
                    </CollapsibleTrigger>
                  ) : (
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-11 rounded-xl transition-all duration-200 smooth-transform",
                        isActive 
                          ? "bg-[#D4AF37] text-[#2C4F4F] font-semibold shadow-lg" 
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                      onClick={() => setActiveMenu(item.title)}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      <span className="text-sm">{item.title}</span>
                    </Button>
                  )}
                </div>

                {hasSubItems && (
                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/20 pl-3">
                      {item.subItems.map((subItem) => {
                        const SubIcon = subItem.icon
                        const isSubActive = activeMenu === subItem.title
                        return (
                          <Button
                            key={subItem.title}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-start gap-2 h-9 rounded-lg transition-all duration-200",
                              isSubActive 
                                ? "bg-[#D4AF37] text-[#2C4F4F] font-medium" 
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            )}
                            onClick={() => setActiveMenu(subItem.title)}
                          >
                            <SubIcon className="h-4 w-4" />
                            <span className="text-xs">{subItem.title}</span>
                          </Button>
                        )
                      })}
                    </div>
                  </CollapsibleContent>
                )}
              </Collapsible>
            )
          })}
        </nav>

        {/* Sign Out Section */}
        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11 hover:bg-white/10 rounded-xl transition-all text-white/80 hover:text-white"
            onClick={() => {
              // Handle sign out
              console.log('Sign out clicked');
            }}
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header with Time/Date */}
        <header className="flex h-20 items-center justify-between px-8 bg-white shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-[#2C4F4F]">{activeMenu}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {activeMenu === "Dashboard" && "Overview of hospital operations"}
              {activeMenu === "Patients" && "Patient management"}
              {activeMenu === "Appointments" && "Scheduled appointments"}
              {activeMenu === "Masters" && "Master data management"}
            </p>
          </div>
          
          {/* Time/Date Display */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end bg-gradient-to-br from-[#2C4F4F] to-[#3B5F5F] px-5 py-2.5 rounded-2xl text-white shadow-lg">
              <div className="text-sm font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {format(currentDateTime, "EEEE, dd MMM yyyy")}
              </div>
              <div className="text-xs opacity-90 flex items-center gap-2 mt-0.5">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                {format(currentDateTime, "hh:mm:ss a")}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children({ activeMenu })}
        </main>
      </div>
    </div>
  )
}
