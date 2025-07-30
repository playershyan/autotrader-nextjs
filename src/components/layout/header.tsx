'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-gray-900">
                AutoTrader<span className="text-blue-600">.lk</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/search" className="text-gray-600 hover:text-blue-600 font-medium">
              Financing
            </Link>
            <Link href="/wanted" className="text-gray-600 hover:text-blue-600 font-medium">
              Wanted Requests
            </Link>
            <Link href="/import" className="text-gray-600 hover:text-blue-600 font-medium">
              Import Service
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sell">Post Ad</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/search" className="block px-3 py-2 text-gray-600">
                Browse Vehicles
              </Link>
              <Link href="/wanted" className="block px-3 py-2 text-gray-600">
                Wanted Requests
              </Link>
              <Link href="/import" className="block px-3 py-2 text-gray-600">
                Import Service
              </Link>
              <div className="pt-4 space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/sell">Post Ad</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}