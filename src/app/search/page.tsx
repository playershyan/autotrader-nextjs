'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui'

export default function SearchResultsPage() {
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    make: '',
    model: '',
    priceMin: '',
    priceMax: '',
    year: '',
    fuelType: '',
    transmission: '',
    bodyType: ''
  })

  // Mock search results data
  const searchResults = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Prius',
      year: 2020,
      price: 4500000,
      location: 'Colombo',
      mileage: 45000,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      images: ['image1.jpg'],
      isFeatured: true,
      seller: 'John Silva',
      isVerified: true
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      price: 3200000,
      location: 'Kandy',
      mileage: 38000,
      fuelType: 'Petrol',
      transmission: 'Manual',
      images: ['image2.jpg'],
      isFeatured: false,
      seller: 'Mary Fernando',
      isVerified: true
    },
    {
      id: 3,
      make: 'Nissan',
      model: 'Leaf',
      year: 2021,
      price: 5800000,
      location: 'Galle',
      mileage: 22000,
      fuelType: 'Electric',
      transmission: 'Automatic',
      images: ['image3.jpg'],
      isFeatured: true,
      seller: 'David Perera',
      isVerified: false
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
            <p className="text-gray-600">Find your perfect vehicle from thousands of listings</p>
          </div>
          
          {/* Quick Search Bar */}
          <div className="quick-search">
            <div className="search-container flex gap-4">
              <input 
                type="text" 
                id="keyword-search" 
                className="search-input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Search by make, model, or keyword..."
              />
              <Button id="search-button" className="px-6 py-3">
                🔍 Search
              </Button>
            </div>
          </div>
          
          <div className="search-info flex justify-between items-center mt-4">
            <div className="results-count text-lg font-medium text-gray-900">
              {searchResults.length} vehicles found
            </div>
            <div className="sort-options flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
              <select id="sort" className="sort-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option value="relevance">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="year">Year: Newest First</option>
                <option value="mileage">Mileage: Lowest First</option>
                <option value="date">Recently Added</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="filters-sidebar w-80 shrink-0">
            <div className="filters-header flex justify-between items-center mb-6">
              <h3 className="filters-title text-lg font-semibold text-gray-900">Filters</h3>
              <button className="clear-filters text-blue-600 hover:text-blue-700 text-sm font-medium">
                Clear all
              </button>
            </div>

            {/* Location Filter */}
            <div className="filter-group mb-6">
              <div className="collapsible-header flex justify-between items-center cursor-pointer mb-3">
                <span className="filter-label font-medium text-gray-700">Location</span>
                <span className="collapse-icon">▼</span>
              </div>
              <div className="collapsible-content">
                <input 
                  type="text" 
                  className="filter-input w-full px-3 py-2 border border-gray-300 rounded-md mb-3" 
                  placeholder="Search districts and cities..."
                />
                <div className="location-links space-y-2">
                  {['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara'].map((location) => (
                    <button 
                      key={location}
                      className="location-link block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Make Filter */}
            <div className="filter-group mb-6">
              <div className="collapsible-header flex justify-between items-center cursor-pointer mb-3">
                <span className="filter-label font-medium text-gray-700">Make</span>
                <span className="collapse-icon">▼</span>
              </div>
              <div className="collapsible-content">
                <input 
                  type="text" 
                  className="filter-input w-full px-3 py-2 border border-gray-300 rounded-md mb-3" 
                  placeholder="Search makes..."
                />
                <div className="make-links space-y-2">
                  {['Toyota', 'Honda', 'Nissan', 'BMW', 'Mercedes-Benz', 'Suzuki'].map((make) => (
                    <button 
                      key={make}
                      className="make-link block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {make}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="filter-group mb-6">
              <span className="filter-label block font-medium text-gray-700 mb-3">Price Range (LKR)</span>
              <div className="price-range grid grid-cols-2 gap-3">
                <input 
                  type="number" 
                  className="filter-input px-3 py-2 border border-gray-300 rounded-md" 
                  placeholder="Min"
                />
                <input 
                  type="number" 
                  className="filter-input px-3 py-2 border border-gray-300 rounded-md" 
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Year Filter */}
            <div className="filter-group mb-6">
              <span className="filter-label block font-medium text-gray-700 mb-3">Year</span>
              <div className="grid grid-cols-2 gap-3">
                <select className="filter-input px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">From Year</option>
                  {Array.from({length: 25}, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select className="filter-input px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">To Year</option>
                  {Array.from({length: 25}, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Fuel Type Filter */}
            <div className="filter-group mb-6">
              <span className="filter-label block font-medium text-gray-700 mb-3">Fuel Type</span>
              <div className="checkbox-group space-y-2">
                {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((fuel) => (
                  <div key={fuel} className="checkbox-item flex items-center">
                    <input type="checkbox" id={fuel} className="mr-2" />
                    <label htmlFor={fuel} className="text-sm text-gray-700 cursor-pointer">{fuel}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Transmission Filter */}
            <div className="filter-group mb-6">
              <span className="filter-label block font-medium text-gray-700 mb-3">Transmission</span>
              <div className="checkbox-group space-y-2">
                {['Manual', 'Automatic', 'CVT'].map((trans) => (
                  <div key={trans} className="checkbox-item flex items-center">
                    <input type="checkbox" id={trans} className="mr-2" />
                    <label htmlFor={trans} className="text-sm text-gray-700 cursor-pointer">{trans}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="results-container flex-1">
            <div className="results-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {searchResults.map((vehicle) => (
                <Link 
                  key={vehicle.id}
                  href={`/vehicles/${vehicle.id}`}
                  className="vehicle-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="card-header relative">
                    <div className="vehicle-image relative">
                      <div className="image-container aspect-[4/3] bg-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-4xl">🚗</span>
                        </div>
                      </div>
                      
                      {vehicle.isFeatured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute top-4 right-4">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          ⭐
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="car-title text-lg font-semibold text-gray-900">
                        {vehicle.make} {vehicle.model} {vehicle.year}
                      </h3>
                      <div className="car-price text-right">
                        <span className="text-2xl font-bold text-blue-600">
                          LKR {(vehicle.price / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    </div>
                    
                    <div className="car-details flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        📍 {vehicle.location}
                      </span>
                      <span className="flex items-center gap-1">
                        ⛽ {vehicle.fuelType}
                      </span>
                      <span className="flex items-center gap-1">
                        🛣️ {vehicle.mileage.toLocaleString()} km
                      </span>
                    </div>
                    
                    <div className="seller-info flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">{vehicle.seller}</span>
                          {vehicle.isVerified && (
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-green-600">✓ Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Section */}
            <div className="load-more mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Vehicles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}