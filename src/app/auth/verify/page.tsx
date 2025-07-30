'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function VerifyPage() {
  const [otpCode, setOtpCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [otpTimer, setOtpTimer] = useState(300) // 5 minutes
  const [error, setError] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      if (otpCode === '123456') {
        // Success - redirect to dashboard
        window.location.href = '/dashboard'
      } else {
        setError('Invalid OTP code. Please try again.')
      }
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
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Verify Your Phone
            </h1>
            <p className="text-gray-600 text-sm">
              We've sent a 6-digit verification code to your phone number
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label className="form-label block text-sm font-medium text-gray-700 mb-2" htmlFor="otp-code">
                Verification Code
              </label>
              <input
                type="text"
                id="otp-code"
                className={`form-input w-full px-3 py-3 border rounded-lg text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-blue-500 ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="000000"
                maxLength={6}
                value={otpCode}
                onChange={(e) => {
                  setOtpCode(e.target.value.replace(/\D/g, ''))
                  setError('')
                }}
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
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
                    setOtpTimer(300)
                    setError('')
                    // Simulate resend OTP
                    alert('New verification code sent!')
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
              <Link href="/auth/login" className="text-sm text-gray-600 hover:underline">
                ← Back to Login
              </Link>
            </div>
          </form>
        </div>

        {/* Help */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Having trouble?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}