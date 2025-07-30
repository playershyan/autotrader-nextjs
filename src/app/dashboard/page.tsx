'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [activeTab, setActiveTab] = useState('all')

  // Mock user data
  const user = {
    name: 'John Silva',
    phone: '+94 77 123 4567',
    email: 'john.silva@email.com',
    memberSince: '2022',
    isVerified: true,
    profileImage: null,
    location: 'Colombo'
  }

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: 'Toyota Prius 2020 - Excellent Condition',
      make: 'Toyota',
      model: 'Prius',
      year: 2020,
      price: 4500000,
      status: 'active',
      views: 1247,
      inquiries: 23,
      image: '/placeholder-car.jpg',
      postedDate: '2024-01-15',
      expiresDate: '2024-02-15'
    },
    {
      id: 2,
      title: 'Honda Civic 2019 - Single Owner',
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      price: 3200000,
      status: 'sold',
      views: 892,
      inquiries: 15,
      image: '/placeholder-car.jpg',
      postedDate: '2024-01-10',
      soldDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Nissan Leaf 2021 - Electric Vehicle',
      make: 'Nissan',
      model: 'Leaf',
      year: 2021,
      price: 5800000,
      status: 'pending',
      views: 456,
      inquiries: 8,
      image: '/placeholder-car.jpg',
      postedDate: '2024-01-18',
      expiresDate: '2024-02-18'
    }
  ]

  const favorites = [
    {
      id: 4,
      title: 'BMW X5 2018 - Luxury SUV',
      make: 'BMW',
      model: 'X5',
      year: 2018,
      price: 8500000,
      location: 'Kandy',
      image: '/placeholder-car.jpg',
      savedDate: '2024-01-12'
    },
    {
      id: 5,
      title: 'Mercedes-Benz C200 2019',
      make: 'Mercedes-Benz',
      model: 'C200',
      year: 2019,
      price: 7200000,
      location: 'Galle',
      image: '/placeholder-car.jpg',
      savedDate: '2024-01-08'
    }
  ]

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'status-active',
      pending: 'status-pending',
      sold: 'status-sold',
      expired: 'status-expired',
      rejected: 'status-rejected'
    }
    return badges[status as keyof typeof badges] || 'status-pending'
  }

  const filteredListings = listings.filter(listing => {
    if (activeTab === 'all') return true
    return listing.status === activeTab
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="main-container grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="profile-sidebar lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="profile-image w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-600">👤</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <div className="flex items-center justify-center gap-2 mt-1">
                  {user.isVerified && (
                    <span className="text-green-600 text-sm">✓ Verified</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Member since {user.memberSince}
                </p>
              </div>

              {/* Navigation Menu */}
              <nav className="nav-menu space-y-2">
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'overview' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('overview')}
                >
                  📊 Dashboard Overview
                </button>
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'listings' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('listings')}
                >
                  🚗 My Listings
                </button>
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'favorites' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('favorites')}
                >
                  ❤️ Favorites
                </button>
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'messages' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('messages')}
                >
                  💬 Messages
                </button>
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'wanted' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('wanted')}
                >
                  🔍 Wanted Requests
                </button>
                <button
                  className={`nav-item w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === 'profile' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection('profile')}
                >
                  ⚙️ Profile Settings
                </button>
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button className="w-full mb-3" asChild>
                  <Link href="/sell">
                    + Post New Ad
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/wanted/create">
                    🔍 Create Wanted Request
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content lg:col-span-3">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="content-section">
                <div className="page-header mb-8">
                  <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                    Dashboard Overview
                  </h1>
                  <p className="page-subtitle text-gray-600">
                    Welcome back! Here's what's happening with your account.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="stat-card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Active Listings</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {listings.filter(l => l.status === 'active').length}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">🚗</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat-card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Views</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {listings.reduce((sum, l) => sum + l.views, 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600">👁️</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat-card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Inquiries</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {listings.reduce((sum, l) => sum + l.inquiries, 0)}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-600">💬</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat-card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Favorites</p>
                        <p className="text-2xl font-bold text-gray-900">{favorites.length}</p>
                      </div>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="activity-item flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600">📈</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">New inquiry received</p>
                        <p className="text-sm text-gray-600">Someone is interested in your Toyota Prius</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>

                    <div className="activity-item flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600">👁️</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Your listing got 50+ views</p>
                        <p className="text-sm text-gray-600">Honda Civic is getting good attention</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>

                    <div className="activity-item flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600">⭐</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Listing approved</p>
                        <p className="text-sm text-gray-600">Your Nissan Leaf is now live</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* My Listings Section */}
            {activeSection === 'listings' && (
              <div className="content-section">
                <div className="page-header mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                        My Listings
                      </h1>
                      <p className="page-subtitle text-gray-600">
                        Manage your vehicle advertisements
                      </p>
                    </div>
                    <Button asChild>
                      <Link href="/sell">
                        + Post New Ad
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Listings Tabs */}
                <div className="listings-nav border-b border-gray-200 mb-6">
                  <div className="flex space-x-8">
                    {[
                      { key: 'all', label: 'All Listings', count: listings.length },
                      { key: 'active', label: 'Active', count: listings.filter(l => l.status === 'active').length },
                      { key: 'pending', label: 'Pending', count: listings.filter(l => l.status === 'pending').length },
                      { key: 'sold', label: 'Sold', count: listings.filter(l => l.status === 'sold').length }
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        className={`listings-tab pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.key
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab(tab.key)}
                      >
                        {tab.label} ({tab.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Listings Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="table-container overflow-x-auto">
                    <table className="listings-table w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Vehicle
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Views
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Inquiries
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredListings.map((listing) => (
                          <tr key={listing.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                  <span className="text-gray-500">🚗</span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {listing.make} {listing.model} {listing.year}
                                  </div>
                                  <div className="text-sm text-gray-500 truncate max-w-xs">
                                    {listing.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                LKR {(listing.price / 1000000).toFixed(1)}M
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(listing.status)}`}>
                                {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {listing.views.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {listing.inquiries}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/vehicles/${listing.id}`}>
                                    View
                                  </Link>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/sell/${listing.id}/edit`}>
                                    Edit
                                  </Link>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Favorites Section */}
            {activeSection === 'favorites' && (
              <div className="content-section">
                <div className="page-header mb-6">
                  <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                    Favorite Vehicles
                  </h1>
                  <p className="page-subtitle text-gray-600">
                    Vehicles you've saved for later
                  </p>
                </div>

                <div className="favorites-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map((favorite) => (
                    <div key={favorite.id} className="favorite-card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                        <span className="text-4xl">🚗</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {favorite.make} {favorite.model} {favorite.year}
                          </h3>
                          <button className="text-red-500 hover:text-red-600">
                            ❤️
                          </button>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          LKR {(favorite.price / 1000000).toFixed(1)}M
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span>📍 {favorite.location}</span>
                          <span>Saved {new Date(favorite.savedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1" asChild>
                            <Link href={`/vehicles/${favorite.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Settings Section */}
            {activeSection === 'profile' && (
              <div className="content-section">
                <div className="page-header mb-6">
                  <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                    Profile Settings
                  </h1>
                  <p className="page-subtitle text-gray-600">
                    Manage your account information and preferences
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <form className="space-y-6">
                    <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue={user.name}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue={user.phone}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          defaultValue={user.email}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="colombo">Colombo</option>
                          <option value="kandy">Kandy</option>
                          <option value="galle">Galle</option>
                          <option value="jaffna">Jaffna</option>
                        </select>
                      </div>
                    </div>

                    <div className="btn-group flex gap-4 pt-6">
                      <Button type="submit">
                        Save Changes
                      </Button>
                      <Button variant="outline" type="button">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Notification Preferences
                  </h3>
                  
                  <div className="notification-group space-y-4">
                    <div className="checkbox-item flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Email Notifications</div>
                        <div className="text-sm text-gray-600">Receive updates about your listings and inquiries</div>
                      </div>
                      <input type="checkbox" defaultChecked className="ml-4" />
                    </div>

                    <div className="checkbox-item flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">SMS Notifications</div>
                        <div className="text-sm text-gray-600">Get instant alerts for important updates</div>
                      </div>
                      <input type="checkbox" defaultChecked className="ml-4" />
                    </div>

                    <div className="checkbox-item flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Marketing Updates</div>
                        <div className="text-sm text-gray-600">Receive tips and promotional offers</div>
                      </div>
                      <input type="checkbox" className="ml-4" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder sections for other nav items */}
            {activeSection === 'messages' && (
              <div className="content-section">
                <div className="page-header mb-6">
                  <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">Messages</h1>
                  <p className="page-subtitle text-gray-600">Your conversations with buyers and sellers</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600">When someone contacts you about your listings, messages will appear here.</p>
                </div>
              </div>
            )}

            {activeSection === 'wanted' && (
              <div className="content-section">
                <div className="page-header mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">Wanted Requests</h1>
                      <p className="page-subtitle text-gray-600">Your vehicle requirements and wanted ads</p>
                    </div>
                    <Button asChild>
                      <Link href="/wanted/create">+ Create Wanted Request</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No wanted requests</h3>
                  <p className="text-gray-600 mb-4">Create a wanted request to let sellers know what you're looking for.</p>
                  <Button asChild>
                    <Link href="/wanted/create">Create Your First Request</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}