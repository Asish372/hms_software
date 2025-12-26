"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import loginVideo from "@/images/Video Project 4.mp4"

interface LoginPageProps {
  onLogin: (username: string, password: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    onLogin(username, password)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-gradient-to-br from-[#1a3838] via-[#2C4F4F] to-[#0f2929]">
      {/* Dynamic Bubble Background with Wandering Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => {
          // Randomly select one of the wandering animations
          const animationClass = [
            "animate-wander-1",
            "animate-wander-2",
            "animate-wander-3"
          ][Math.floor(Math.random() * 3)]
          
          return (
            <div
              key={i}
              className={`absolute rounded-full bg-white/10 backdrop-blur-[1px] ${animationClass}`}
              style={{
                left: `${Math.random() * 100}%`,
                // Start from bottom implicitly via keyframes, but offsets help randomness
                bottom: `-20vh`, 
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                animationDelay: `${Math.random() * -20}s`, // Start at different times instantly
                animationDuration: `${Math.random() * 10 + 15}s`, // 15-25s duration
              }}
            />
          )
        })}
        {/* Additional small sparkling particles */}
        {[...Array(15)].map((_, i) => (
           <div
              key={`sparkle-${i}`}
              className="absolute rounded-full bg-white/20 animate-pulse-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
           />
        ))}
      </div>

      {/* Main Card with Strong Shadow */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-custom-strong overflow-hidden relative z-10 animate-fade-in transform hover:scale-[1.01] transition-transform duration-500 border border-white/20">
        <div className="grid md:grid-cols-2 min-h-[500px] relative">
          {/* Curved Divider */}
          <svg 
            className="absolute left-1/2 top-0 h-full w-8 z-20 hidden md:block" 
            style={{ transform: 'translateX(-50%)' }}
            viewBox="0 0 32 600" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M 0 0 Q 16 300 0 600 L 32 600 Q 16 300 32 0 Z" 
              fill="white" 
              opacity="0.15"
            />
          </svg>

          {/* Left Side - Video Animation */}
          <div className="relative bg-[#2C4F4F] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <video 
                 src={loginVideo} 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#2C4F4F]/40 to-transparent" />
            </div>
            
            {/* Overlay Grid/Texture for premium feel */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Content Overlay */}
            <div className="relative z-10 text-center p-8 animate-slide-in-left">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
                Hospital Management
              </h1>
              <p className="text-lg text-white/90 font-light tracking-wide drop-shadow-sm">
                Care & Excellence
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-12 flex items-center justify-center bg-gradient-to-br from-[#2C4F4F] to-[#3B5F5F] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />

            <div className="w-full max-w-md relative z-10 animate-slide-in-right">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/80">Please login to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Label htmlFor="username" className="text-white text-sm font-medium">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white rounded-xl transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Label htmlFor="password" className="text-white text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white rounded-xl transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-10 bg-[#D4AF37] hover:bg-[#C49F27] text-[#2C4F4F] font-bold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-[#2C4F4F] border-t-transparent rounded-full animate-spin" />
                      Logging in...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>

              {/* Footer Text */}
              <div className="mt-8 text-center text-white/60 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p>© 2025 Hospital Management System</p>
                <p className="mt-1">Secure & Reliable Healthcare Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
