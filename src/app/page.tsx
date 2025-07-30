import Link from 'next/link'
import { Button } from '@/components/ui'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your Perfect
                <span className="block text-yellow-400">Vehicle Today</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                Sri Lanka's most trusted vehicle marketplace with thousands of verified listings
              </p>
              
              {/* Quick Search Form */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto lg:mx-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500">
                      <option value="">Any Make</option>
                      <option value="toyota">Toyota</option>
                      <option value="honda">Honda</option>
                      <option value="nissan">Nissan</option>
                    </select>
                    
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500">
                      <option value="">Any Model</option>
                    </select>
                    
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500">
                      <option value="">Any Location</option>
                      <option value="colombo">Colombo</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Min Price (LKR)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Max Price (LKR)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/search">
                      🔍 Search Vehicles
                    </Link>
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🚗</div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-900">5,000+ Active Listings</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">👥</span>
                  <span className="text-sm font-medium text-gray-900">50,000+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AutoTrader.lk?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make buying and selling vehicles simple, safe, and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Listings</h3>
              <p className="text-gray-600">All listings are verified for authenticity and accuracy</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">Advanced filters to find exactly what you're looking for</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">Connect with sellers instantly and get quick responses</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600">Get AI-powered insights and market analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Vehicles
              </h2>
              <p className="text-xl text-gray-600">
                Handpicked premium listings from trusted sellers
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/search?featured=true">
                View All →
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Vehicle Cards */}
            {[
              { make: 'Toyota', model: 'Prius', year: '2020', price: 'LKR 4.5M', location: 'Colombo', fuel: 'Hybrid', mileage: '45,000 km' },
              { make: 'Honda', model: 'Civic', year: '2019', price: 'LKR 3.2M', location: 'Kandy', fuel: 'Petrol', mileage: '38,000 km' },
              { make: 'Nissan', model: 'Leaf', year: '2021', price: 'LKR 5.8M', location: 'Galle', fuel: 'Electric', mileage: '22,000 km' },
            ].map((vehicle, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      ⭐
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {vehicle.make} {vehicle.model} {vehicle.year}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {vehicle.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>📍 {vehicle.location}</span>
                    <span>⛽ {vehicle.fuel}</span>
                    <span>🛣️ {vehicle.mileage}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full" />
                      <span className="text-sm text-gray-600">Verified Seller</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/vehicles/sample-${i}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find vehicles by type that suit your needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/search?category=sedans"
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sedans</h3>
                <p className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  1,250+
                </p>
              </div>
            </Link>

            <Link
              href="/search?category=suvs"
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🚙</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SUVs</h3>
                <p className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                  850+
                </p>
              </div>
            </Link>

            <Link
              href="/search?category=hatchbacks"
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🚕</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hatchbacks</h3>
                <p className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                  650+
                </p>
              </div>
            </Link>

            <Link
              href="/search?category=luxury"
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🏎️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury</h3>
                <p className="text-sm font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  200+
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Vehicle?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied sellers and reach genuine buyers across Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400" asChild>
              <Link href="/sell">
                Start Selling Now →
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              ▶️ Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">50,000+</div>
              <div className="text-gray-600">Registered Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">2,500+</div>
              <div className="text-gray-600">Successful Sales</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}