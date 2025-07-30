'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showOtpForm, setShowOtpForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [fullName, setFullName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [otpTimer, setOtpTimer] = useState(0)

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowOtpForm(true)
      setOtpTimer(300) // 5 minutes
      
      // Start countdown
      const interval = setInterval(() => {
        setOtpTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }, 2000)
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard or previous page
      window.location.href = '/dashboard'
    }, 1500)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <span className="text-2xl font-bold text-gray-900">
              AutoTrader<span className="text-blue-600">.lk</span>
            </span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2" id="formTitle">
            {isLogin ? 'Welcome back!' : 'Create Account'}
          </h1>
          <p className="text-gray-600" id="subtitle">
            {isLogin ? 'Log in to manage your account' : 'Join AutoTrader.lk today!'}
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3" id="valuePropTitle">
            {isLogin ? 'Access your account to:' : 'Join AutoTrader.lk today!'}
          </h3>
          <p className="text-sm text-gray-600 mb-4" id="valuePropSubtitle">
            {isLogin ? 'Manage your listings and connect with buyers' : 'Create your account and unlock these features'}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-green-500">✓</span>
              <span>Post unlimited vehicle listings</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-green-500">✓</span>
              <span>Save favorite vehicles</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-green-500">✓</span>
              <span>Get instant notifications</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-green-500">✓</span>
              <span>Access premium features</span>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {!showOtpForm ? (
            /* Phone Number Form */
            <form onSubmit={handlePhoneSubmit} id="loginForm">
              {!isLogin && (
                <div className="form-group mb-4">
                  <label className="form-label block text-sm font-medium text-gray-700 mb-2" htmlFor="register-name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="register-name"
                    className="form-input w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div className="form-group mb-6">
                <label className={`form-label block text-sm font-medium text-gray-700 mb-2 ${!isLogin ? 'required' : ''}`} htmlFor="login-phone">
                  Phone Number {!isLogin && '*'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+94</span>
                  </div>
                  <input
                    type="tel"
                    id="login-phone"
                    className="form-input w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="77 123 4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  We'll send you a verification code via SMS
                </p>
              </div>

              <Button
                type="submit"
                className="w-full mb-4"
                size="lg"
                disabled={isLoading}
                id="submitBtn"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending OTP...
                  </div>
                ) : (
                  isLogin ? 'Send OTP' : 'Create Account'
                )}
              </Button>

              <div className="text-center text-sm" id="authLinks">
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="auth-link text-blue-600 hover:underline font-medium"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      type="button"
                      className="auth-link text-blue-600 hover:underline font-medium"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </form>
          ) : (
            /* OTP Verification Form */
            <form onSubmit={handleOtpSubmit} id="otpForm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Verify Your Phone
                </h2>
                <p className="text-gray-600 text-sm">
                  We've sent a 6-digit code to<br />
                  <span className="font-medium">+94 {phoneNumber}</span>
                </p>
              </div>

              <div className="form-group mb-4">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2" htmlFor="otp-code">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="otp-code"
                  className="form-input w-full px-3 py-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="000000"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>

              <div className="text-center mb-6">
                {otpTimer > 0 ? (
                  <p className="text-sm text-gray-600">
                    Code expires in <span className="font-medium text-red-600">{formatTime(otpTimer)}</span>
                  </p>
                ) : (
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline font-medium"
                    onClick={() => {
                      setShowOtpForm(false)
                      setOtpCode('')
                    }}
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <Button
                type="submit"
                className="w-full mb-4"
                size="lg"
                disabled={isLoading || otpCode.length !== 6}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  'Verify & Continue'
                )}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:underline"
                  onClick={() => {
                    setShowOtpForm(false)
                    setOtpCode('')
                    setPhoneNumber('')
                  }}
                >
                  ← Change Phone Number
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Terms & Privacy */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          </p>
        </div>

        {/* Help */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}