
import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"
import { LoginPage } from "@/components/login-page"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (username: string, password: string) => {
    // Simple authentication - in production, verify with backend
    if (username && password) {
      setIsAuthenticated(true)
    }
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <DashboardLayout>
      {({ activeMenu }) => <DashboardContent activeMenu={activeMenu} />}
    </DashboardLayout>
  )
}

export default App
