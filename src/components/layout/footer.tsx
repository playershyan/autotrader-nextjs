import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-black font-bold">A</div>
              <span className="text-xl font-bold">
                AutoTrader<span className="text-yellow-400">.lk</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Sri Lanka's most trusted vehicle marketplace. Connect buyers and sellers across the island.
            </p>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/search" className="text-gray-300 hover:text-white">Search Vehicles</Link></li>
              <li><Link href="/compare" className="text-gray-300 hover:text-white">Compare Prices</Link></li>
              <li><Link href="/financing" className="text-gray-300 hover:text-white">Financing Options</Link></li>
            </ul>
          </div>

          {/* For Sellers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">For Sellers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sell" className="text-gray-300 hover:text-white">Post Your Ad</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing Guide</Link></li>
              <li><Link href="/tips" className="text-gray-300 hover:text-white">Selling Tips</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-white">Safety Tips</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} AutoTrader.lk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}