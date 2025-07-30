'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'

export default function PostAdPage() {
  const [selectedVehicleType, setSelectedVehicleType] = useState('')
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([])
  const [formData, setFormData] = useState({
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    condition: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    engineCapacity: '',
    bodyType: '',
    color: '',
    price: '',
    negotiable: false,
    title: '',
    description: '',
    district: '',
    city: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setUploadedPhotos(prev => [...prev, ...Array.from(files)].slice(0, 15))
    }
  }

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sell Your Vehicle
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create a compelling listing to reach thousands of potential buyers across Sri Lanka
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form className="space-y-8">
          {/* Step 1: Vehicle Type */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 1: Vehicle Type
            </div>
            
            <div className="vehicle-types grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'car', label: 'Car', icon: '🚗' },
                { type: 'van', label: 'Van', icon: '🚐' },
                { type: 'suv', label: 'SUV', icon: '🚙' },
                { type: 'motorcycle', label: 'Motorcycle', icon: '🏍️' },
                { type: 'truck', label: 'Truck', icon: '🚚' },
                { type: 'bus', label: 'Bus', icon: '🚌' },
                { type: 'threewheeler', label: 'Three Wheeler', icon: '🛺' },
                { type: 'other', label: 'Other', icon: '🚛' }
              ].map((vehicle) => (
                <div
                  key={vehicle.type}
                  className={`vehicle-type cursor-pointer p-4 border-2 rounded-lg text-center transition-all ${
                    selectedVehicleType === vehicle.type
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedVehicleType(vehicle.type)}
                >
                  <div className="text-3xl mb-2">{vehicle.icon}</div>
                  <div className="font-medium text-gray-900">{vehicle.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Vehicle Details */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 2: Vehicle Details
            </div>
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Make *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Make</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="nissan">Nissan</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="mazda">Mazda</option>
                  <option value="mitsubishi">Mitsubishi</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Model *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Model</option>
                  <option value="prius">Prius</option>
                  <option value="corolla">Corolla</option>
                  <option value="civic">Civic</option>
                  <option value="accord">Accord</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Year *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Year</option>
                  {Array.from({length: 35}, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Condition *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Condition</option>
                  <option value="brand-new">Brand New</option>
                  <option value="reconditioned">Reconditioned</option>
                  <option value="used">Used</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Mileage (km)
                </label>
                <input 
                  type="number" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="e.g., 45000"
                />
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Fuel Type *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Transmission *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Transmission</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                  <option value="cvt">CVT</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Engine Capacity (CC)
                </label>
                <input 
                  type="number" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="e.g., 1800"
                />
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Body Type
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select Body Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="suv">SUV</option>
                  <option value="coupe">Coupe</option>
                  <option value="wagon">Wagon</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <input 
                  type="text" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="e.g., White, Black, Silver"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Photos */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 3: Photos (Up to 15 photos)
            </div>
            
            <div className="photo-upload-section">
              <div 
                className="photo-upload border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
                onClick={() => document.getElementById('photo-input')?.click()}
              >
                <div className="text-4xl mb-4">📷</div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  Add Photos of Your Vehicle
                </div>
                <div className="text-gray-600 mb-4">
                  Click to upload or drag and drop photos here
                </div>
                <div className="text-sm text-gray-500">
                  Maximum 15 photos, 5MB each. Supported formats: JPG, PNG, WebP
                </div>
                
                <input
                  id="photo-input"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
              
              {uploadedPhotos.length > 0 && (
                <div className="photo-grid mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {uploadedPhotos.map((photo, index) => (
                    <div key={index} className="photo-item relative">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={URL.createObjectURL(photo)} 
                          alt={`Photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button 
                        type="button"
                        className="photo-remove absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
                        onClick={() => removePhoto(index)}
                      >
                        ×
                      </button>
                      {index === 0 && (
                        <div className="main-photo-badge absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          Main Photo
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Step 4: Pricing */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 4: Pricing
            </div>
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Asking Price (LKR) *
                </label>
                <input 
                  type="number" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="e.g., 4500000"
                />
              </div>
              
              <div className="form-group flex items-center pt-8">
                <input 
                  type="checkbox" 
                  id="negotiable" 
                  className="mr-2"
                />
                <label htmlFor="negotiable" className="text-sm text-gray-700">
                  Price is negotiable
                </label>
              </div>
            </div>
            
            <div className="ai-pricing mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600">🤖</span>
                <span className="font-medium text-blue-900">AI Price Suggestion</span>
              </div>
              <p className="text-sm text-blue-800 mb-3">
                Based on similar vehicles, we suggest a price range of LKR 4.2M - 4.8M
              </p>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Get AI Price Analysis
              </Button>
            </div>
          </div>

          {/* Step 5: Description */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 5: Description
            </div>
            
            <div className="form-group mb-6">
              <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                Listing Title *
              </label>
              <input 
                type="text" 
                className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g., Toyota Prius 2020 - Excellent Condition"
                maxLength={200}
              />
              <div className="input-hint text-sm text-gray-500 mt-1">
                Create an attractive title that highlights key features
              </div>
            </div>
            
            <div className="form-group">
              <div className="flex items-center justify-between mb-2">
                <label className="form-label text-sm font-medium text-gray-700">
                  Description
                </label>
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-300 hover:bg-purple-50">
                  ✨ Generate with AI
                </Button>
              </div>
              <textarea 
                className="form-textarea w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                rows={6}
                placeholder="Describe your vehicle's condition, features, service history, and any other important details..."
                maxLength={2000}
              />
              <div className="input-hint text-sm text-gray-500 mt-1">
                Detailed descriptions get 3x more inquiries. Include maintenance history, features, and reason for selling.
              </div>
            </div>
          </div>

          {/* Step 6: Location */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 6: Location
            </div>
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  District *
                </label>
                <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select District</option>
                  <option value="colombo">Colombo</option>
                  <option value="gampaha">Gampaha</option>
                  <option value="kalutara">Kalutara</option>
                  <option value="kandy">Kandy</option>
                  <option value="galle">Galle</option>
                  <option value="matara">Matara</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  City/Area
                </label>
                <input 
                  type="text" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="e.g., Nugegoda, Mount Lavinia"
                />
              </div>
            </div>
          </div>

          {/* Step 7: Contact Information */}
          <div className="form-section bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="form-section-title text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Step 7: Contact Information
            </div>
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input 
                  type="text" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="+94 77 123 4567"
                />
              </div>
              
              <div className="form-group md:col-span-2">
                <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="form-actions bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                Save as Draft
              </Button>
              <Button size="lg" className="flex-1 sm:flex-none">
                Preview Listing
              </Button>
              <Button size="lg" className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700">
                Publish Now
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                By publishing, you agree to our 
                <a href="/terms" className="text-blue-600 hover:underline"> Terms of Service</a> and 
                <a href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}