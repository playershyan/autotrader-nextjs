'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

interface VehicleDetailsPageProps {
  params: { id: string }
}

export default function VehicleDetailsPage({ params }: VehicleDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  // Mock vehicle data
  const vehicle = {
    id: params.id,
    make: 'Toyota',
    model: 'Prius',
    year: 2020,
    price: 4500000,
    location: 'Colombo',
    mileage: 45000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    engineCapacity: 1800,
    color: 'White',
    condition: 'Used',
    registeredYear: 2020,
    features: [
      'Air Conditioning',
      'Power Steering',
      'Central Locking',
      'Electric Windows',
      'ABS Brakes',
      'Airbags',
      'Navigation System',
      'Reverse Camera',
      'Bluetooth',
      'USB Charging'
    ],
    description: 'Well-maintained Toyota Prius in excellent condition. Single owner, full service history available. All original parts, no accidents. Perfect for city driving with excellent fuel economy. Ready for immediate sale.',
    images: [
      '/placeholder-car-1.jpg',
      '/placeholder-car-2.jpg',
      '/placeholder-car-3.jpg',
      '/placeholder-car-4.jpg',
      '/placeholder-car-5.jpg'
    ],
    seller: {
      name: 'John Silva',
      phone: '+94 77 123 4567',
      isVerified: true,
      isDealer: false,
      memberSince: '2022',
      activeListings: 3
    },
    postedDate: '2024-01-15',
    views: 1247,
    inquiries: 23
  }

  const similarVehicles = [
    { id: 2, make: 'Honda', model: 'Insight', year: 2019, price: 4200000, image: '/placeholder-car.jpg' },
    { id: 3, make: 'Toyota', model: 'Aqua', year: 2021, price: 3800000, image: '/placeholder-car.jpg' },
    { id: 4, make: 'Nissan', model: 'Leaf', year: 2020, price: 5200000, image: '/placeholder-car.jpg' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-400">›</span>
            <Link href="/search" className="text-blue-600 hover:underline">Search</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">{vehicle.make} {vehicle.model} {vehicle.year}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-6xl">🚗</span>
                  </div>
                </div>
                
                {/* Image Navigation */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                >
                  ‹
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  onClick={() => setCurrentImageIndex(Math.min(vehicle.images.length - 1, currentImageIndex + 1))}
                >
                  ›
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {vehicle.images.length}
                </div>
                
                {/* Favorite Button */}
                <button 
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isFavorited ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'
                  }`}
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  {isFavorited ? '❤️' : '🤍'}
                </button>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2 overflow-x-auto">
                  {vehicle.images.map((_, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm">🚗</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Title & Price */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {vehicle.make} {vehicle.model} {vehicle.year}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      📍 {vehicle.location}
                    </span>
                    <span className="flex items-center gap-1">
                      👁️ {vehicle.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      💬 {vehicle.inquiries} inquiries
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    LKR {(vehicle.price / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">
                    Posted {new Date(vehicle.postedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  ✓ Verified Listing
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {vehicle.condition}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  {vehicle.fuelType}
                </span>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Mileage</div>
                  <div className="font-semibold text-gray-900">{vehicle.mileage.toLocaleString()} km</div>
                </div>
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Fuel Type</div>
                  <div className="font-semibold text-gray-900">{vehicle.fuelType}</div>
                </div>
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-semibold text-gray-900">{vehicle.transmission}</div>
                </div>
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Body Type</div>
                  <div className="font-semibold text-gray-900">{vehicle.bodyType}</div>
                </div>
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Engine</div>
                  <div className="font-semibold text-gray-900">{vehicle.engineCapacity} CC</div>
                </div>
                <div className="spec-item">
                  <div className="text-sm text-gray-600">Color</div>
                  <div className="font-semibold text-gray-900">{vehicle.color}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {vehicle.description}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Seller */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <h3 className="font-semibold text-gray-900">{vehicle.seller.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  {vehicle.seller.isVerified && (
                    <span className="text-green-600 text-sm">✓ Verified</span>
                  )}
                  {vehicle.seller.isDealer && (
                    <span className="text-blue-600 text-sm">🏢 Dealer</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Member since {vehicle.seller.memberSince} • {vehicle.seller.activeListings} active listings
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setShowContactForm(!showContactForm)}
                >
                  📞 Show Phone Number
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  💬 Send Message
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  📧 Email Seller
                </Button>
              </div>

              {showContactForm && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      {vehicle.seller.phone}
                    </div>
                    <div className="text-sm text-gray-600">
                      Please mention AutoTrader.lk when calling
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Quick Message</h4>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <textarea 
                    placeholder="I'm interested in this vehicle..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Button variant="outline" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>

            {/* Financing Calculator */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">💰 Financing Calculator</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Down Payment (LKR)</label>
                  <input 
                    type="number" 
                    placeholder="1000000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Loan Period</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>3 years</option>
                    <option>5 years</option>
                    <option>7 years</option>
                  </select>
                </div>
                <Button variant="outline" className="w-full">
                  Calculate Monthly Payment
                </Button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
              <h3 className="font-semibold text-yellow-800 mb-3">🛡️ Safety Tips</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Always inspect the vehicle in person</li>
                <li>• Check all documents before payment</li>
                <li>• Meet in a safe, public location</li>
                <li>• Verify seller identity</li>
                <li>• Get a professional inspection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarVehicles.map((similar) => (
              <Link 
                key={similar.id}
                href={`/vehicles/${similar.id}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl">🚗</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {similar.make} {similar.model} {similar.year}
                  </h3>
                  <div className="text-lg font-bold text-blue-600">
                    LKR {(similar.price / 1000000).toFixed(1)}M
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}