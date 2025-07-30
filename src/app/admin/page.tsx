'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedListings, setSelectedListings] = useState<number[]>([])

  // Mock admin data
  const adminStats = {
    totalListings: 5247,
    pendingApproval: 127,
    activeListings: 4892,
    rejectedListings: 228,
    totalUsers: 12450,
    newUsersToday: 24,
    totalInquiries: 8934,
    reportsReceived: 15
  }

  const pendingListings = [
    {
      id: 1,
      title: 'Toyota Prius 2020 - Excellent Condition',
      seller: 'john@email.com',
      price: 4500000,
      location: 'Colombo',
      submittedDate: '2024-01-20',
      category: 'sedan',
      images: 5,
      status: 'pending'
    },
    {
      id: 2,
      title: 'BMW X5 2019 - Luxury SUV',
      seller: 'mary@email.com',
      price: 8500000,
      location: 'Kandy',
      submittedDate: '2024-01-19',
      category: 'suv',
      images: 8,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Honda Civic 2018 - Single Owner',
      seller: 'david@email.com',
      price: 3200000,
      location: 'Galle',
      submittedDate: '2024-01-18',
      category: 'sedan',
      images: 6,
      status: 'pending'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      time: '2 min ago',
      action: 'New Listing',
      user: 'john@email.com',
      details: 'Toyota Camry 2020 - Pending approval',
      type: 'listing'
    },
    {
      id: 2,
      time: '15 min ago',
      action: 'Listing Approved',
      user: 'admin',
      details: 'Honda Civic 2019 - ID: #12847',
      type: 'approval'
    },
    {
      id: 3,
      time: '32 min ago',
      action: 'Report Received',
      user: 'mary@email.com',
      details: 'Suspicious pricing - Listing #12834',
      type: 'report'
    },
    {
      id: 4,
      time: '1 hour ago',
      action: 'User Registration',
      user: 'alex@email.com',
      details: 'New user account created',
      type: 'user'
    }
  ]

  const usersList = [
    {
      id: 1,
      name: 'John Silva',
      email: 'john@email.com',
      phone: '+94 77 123 4567',
      joinDate: '2022-01-15',
      listings: 5,
      status: 'active',
      isVerified: true
    },
    {
      id: 2,
      name: 'Mary Fernando',
      email: 'mary@email.com',
      phone: '+94 77 234 5678',
      joinDate: '2023-03-22',
      listings: 2,
      status: 'active',
      isVerified: false
    },
    {
      id: 3,
      name: 'David Perera',
      email: 'david@email.com',
      phone: '+94 77 345 6789',
      joinDate: '2023-06-10',
      listings: 8,
      status: 'suspended',
      isVerified: true
    }
  ]

  const reports = [
    {
      id: 1,
      listingId: 12834,
      listingTitle: 'Toyota Prius 2020',
      reporter: 'user123@email.com',
      reason: 'Suspicious pricing',
      description: 'Price seems too low for the year and condition',
      reportDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      listingId: 12756,
      listingTitle: 'BMW X5 2018',
      reporter: 'buyer456@email.com',
      reason: 'Fake images',
      description: 'Images appear to be stock photos from internet',
      reportDate: '2024-01-19',
      status: 'investigating'
    }
  ]

  const handleApprove = (listingId: number) => {
    alert(`Listing ${listingId} approved!`)
  }

  const handleReject = (listingId: number) => {
    alert(`Listing ${listingId} rejected!`)
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800',
      investigating: 'bg-orange-100 text-orange-800',
      resolved: 'bg-blue-100 text-blue-800'
    }
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-gray-900">
                AutoTrader<span className="text-red-600">.lk</span> Admin
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-medium">Admin User</span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                ← Back to Site
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Admin Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="mt-6 px-4">
            <div className="space-y-1">
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'overview'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('overview')}
              >
                📊 Dashboard Overview
              </button>
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'listings'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('listings')}
              >
                🚗 Vehicle Listings
              </button>
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'users'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('users')}
              >
                👥 User Management
              </button>
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'reports'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('reports')}
              >
                🚨 Reports & Moderation
              </button>
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'analytics'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('analytics')}
              >
                📈 Analytics
              </button>
              <button
                className={`admin-nav-item w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'settings'
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection('settings')}
              >
                ⚙️ Settings
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard Overview */}
          {activeSection === 'overview' && (
            <div className="content-section">
              <div className="page-header mb-8">
                <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                  Admin Dashboard
                </h1>
                <p className="page-subtitle text-gray-600">
                  Overview of platform activity and key metrics
                </p>
              </div>

              {/* Stats Cards */}
              <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Listings</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {adminStats.totalListings.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">🚗</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pending Approval</p>
                      <p className="text-2xl font-bold text-orange-600">
                        {adminStats.pendingApproval}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600">⏳</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {adminStats.totalUsers.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">👥</span>
                    </div>
                  </div>
                </div>

                <div className="card bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Reports</p>
                      <p className="text-2xl font-bold text-red-600">
                        {adminStats.reportsReceived}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600">🚨</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="charts-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="chart-container bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="card-header mb-4">
                    <h3 className="card-title text-lg font-semibold text-gray-900">
                      Listing Activity (Last 30 Days)
                    </h3>
                  </div>
                  <div className="chart-placeholder bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                    <span className="ml-2 text-gray-600">Chart: Daily listing submissions</span>
                  </div>
                </div>

                <div className="chart-container bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="card-header mb-4">
                    <h3 className="card-title text-lg font-semibold text-gray-900">
                      Top Categories
                    </h3>
                  </div>
                  <div className="chart-placeholder bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-4xl">🥧</span>
                    <span className="ml-2 text-gray-600">Chart: Vehicle categories</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="card-header p-6 border-b border-gray-200">
                  <h3 className="card-title text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="table-container overflow-x-auto">
                  <table className="table w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentActivity.map((activity) => (
                        <tr key={activity.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {activity.time}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {activity.action}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {activity.user}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {activity.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Vehicle Listings Section */}
          {activeSection === 'listings' && (
            <div className="content-section">
              <div className="page-header mb-6">
                <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                  Vehicle Listings
                </h1>
                <p className="page-subtitle text-gray-600">
                  Review and moderate vehicle listings
                </p>
              </div>

              {/* Filters */}
              <div className="filters bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <div className="filter-group">
                    <label className="filter-label block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="filter-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label className="filter-label block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="filter-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option value="all">All Categories</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label className="filter-label block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <select className="filter-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Listings Table */}
              <div className="card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="table-container overflow-x-auto">
                  <table className="table w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          <input type="checkbox" className="rounded" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pendingListings.map((listing) => (
                        <tr key={listing.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #{listing.id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500 text-xs">🚗</span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                  {listing.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {listing.images} images
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {listing.seller}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            LKR {(listing.price / 1000000).toFixed(1)}M
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(listing.status)}`}>
                              {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(listing.submittedDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button size="sm" onClick={() => handleApprove(listing.id)}>
                                ✓ Approve
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleReject(listing.id)}>
                                ✗ Reject
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/vehicles/${listing.id}`}>
                                  View
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

          {/* Users Section */}
          {activeSection === 'users' && (
            <div className="content-section">
              <div className="page-header mb-6">
                <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                  User Management
                </h1>
                <p className="page-subtitle text-gray-600">
                  Manage user accounts and permissions
                </p>
              </div>

              <div className="filters bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex gap-4">
                  <div className="filter-group">
                    <label className="filter-label block text-sm font-medium text-gray-700 mb-1">User Type</label>
                    <select className="filter-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option value="all">All Users</option>
                      <option value="individual">Individual</option>
                      <option value="dealer">Dealer</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label className="filter-label block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="filter-select border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="suspended">Suspended</option>
                      <option value="banned">Banned</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="table-container overflow-x-auto">
                  <table className="table w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Listings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {usersList.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-sm">👤</span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                  {user.isVerified && <span className="text-green-500">✓</span>}
                                  {user.isVerified ? 'Verified' : 'Unverified'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{user.email}</div>
                            <div className="text-sm text-gray-500">{user.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(user.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.listings}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                {user.status === 'suspended' ? 'Activate' : 'Suspend'}
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

          {/* Reports & Moderation Section */}
          {activeSection === 'reports' && (
            <div className="content-section">
              <div className="page-header mb-6">
                <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                  Reports & Moderation
                </h1>
                <p className="page-subtitle text-gray-600">
                  Review user reports and moderate content
                </p>
              </div>

              <div className="card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="table-container overflow-x-auto">
                  <table className="table w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Report ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Listing</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reporter</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="bg-white divide-y divide-gray-200">
                     {reports.map((report) => (
                       <tr key={report.id} className="hover:bg-gray-50">
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                           #{report.id}
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-sm font-medium text-gray-900">
                             Listing #{report.listingId}
                           </div>
                           <div className="text-sm text-gray-500 truncate max-w-xs">
                             {report.listingTitle}
                           </div>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           {report.reporter}
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-sm font-medium text-gray-900">{report.reason}</div>
                           <div className="text-sm text-gray-500 truncate max-w-xs">
                             {report.description}
                           </div>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           {new Date(report.reportDate).toLocaleDateString()}
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(report.status)}`}>
                             {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                           </span>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex items-center gap-2">
                             <Button size="sm" asChild>
                               <Link href={`/vehicles/${report.listingId}`}>
                                 View Listing
                               </Link>
                             </Button>
                             <Button variant="outline" size="sm">
                               Investigate
                             </Button>
                             <Button variant="outline" size="sm">
                               Resolve
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

         {/* Analytics Section */}
         {activeSection === 'analytics' && (
           <div className="content-section">
             <div className="page-header mb-6">
               <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                 Analytics & Insights
               </h1>
               <p className="page-subtitle text-gray-600">
                 Platform performance and user behavior analytics
               </p>
             </div>

             {/* Key Metrics */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Overview</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Daily Visitors</span>
                     <span className="text-sm font-medium">2,847</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Page Views</span>
                     <span className="text-sm font-medium">8,934</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Bounce Rate</span>
                     <span className="text-sm font-medium">34.2%</span>
                   </div>
                 </div>
               </div>

               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">User Engagement</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Avg. Session Duration</span>
                     <span className="text-sm font-medium">4m 23s</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Pages per Session</span>
                     <span className="text-sm font-medium">3.1</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Return Visitors</span>
                     <span className="text-sm font-medium">42.8%</span>
                   </div>
                 </div>
               </div>

               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Metrics</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Inquiry Rate</span>
                     <span className="text-sm font-medium">12.3%</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Contact Rate</span>
                     <span className="text-sm font-medium">8.7%</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-sm text-gray-600">Listing Success Rate</span>
                     <span className="text-sm font-medium">67.4%</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Popular Content */}
             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Popular Content</h3>
               <div className="table-container overflow-x-auto">
                 <table className="table w-full">
                   <thead>
                     <tr>
                       <th className="text-left text-sm font-medium text-gray-700 pb-2">Content</th>
                       <th className="text-left text-sm font-medium text-gray-700 pb-2">Type</th>
                       <th className="text-left text-sm font-medium text-gray-700 pb-2">Views</th>
                       <th className="text-left text-sm font-medium text-gray-700 pb-2">Engagement</th>
                       <th className="text-left text-sm font-medium text-gray-700 pb-2">Conversion</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td className="py-2 text-sm text-gray-900">Toyota Camry 2020 - Silver</td>
                       <td className="py-2 text-sm text-gray-600">Vehicle Listing</td>
                       <td className="py-2 text-sm text-gray-600">2,847</td>
                       <td className="py-2 text-sm text-gray-600">64%</td>
                       <td className="py-2 text-sm text-gray-600">12 inquiries</td>
                     </tr>
                     <tr>
                       <td className="py-2 text-sm text-gray-900">BMW X5 - Wanted Request</td>
                       <td className="py-2 text-sm text-gray-600">Wanted Request</td>
                       <td className="py-2 text-sm text-gray-600">1,923</td>
                       <td className="py-2 text-sm text-gray-600">58%</td>
                       <td className="py-2 text-sm text-gray-600">8 responses</td>
                     </tr>
                     <tr>
                       <td className="py-2 text-sm text-gray-900">Honda Civic 2019 - Red</td>
                       <td className="py-2 text-sm text-gray-600">Vehicle Listing</td>
                       <td className="py-2 text-sm text-gray-600">1,654</td>
                       <td className="py-2 text-sm text-gray-600">72%</td>
                       <td className="py-2 text-sm text-gray-600">15 inquiries</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         )}

         {/* Settings Section */}
         {activeSection === 'settings' && (
           <div className="content-section">
             <div className="page-header mb-6">
               <h1 className="page-title text-2xl font-bold text-gray-900 mb-2">
                 System Settings
               </h1>
               <p className="page-subtitle text-gray-600">
                 Configure platform settings and preferences
               </p>
             </div>

             <div className="space-y-6">
               {/* General Settings */}
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                 <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <div>
                       <div className="font-medium text-gray-900">Auto-approve listings</div>
                       <div className="text-sm text-gray-600">Automatically approve listings from verified users</div>
                     </div>
                     <input type="checkbox" className="rounded" />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                       <div className="font-medium text-gray-900">Email notifications</div>
                       <div className="text-sm text-gray-600">Send email alerts for important events</div>
                     </div>
                     <input type="checkbox" defaultChecked className="rounded" />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                       <div className="font-medium text-gray-900">Maintenance mode</div>
                       <div className="text-sm text-gray-600">Put the site in maintenance mode</div>
                     </div>
                     <input type="checkbox" className="rounded" />
                   </div>
                 </div>
               </div>

               {/* Moderation Settings */}
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Moderation Settings</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">
                       Auto-reject after reports
                     </label>
                     <input
                       type="number"
                       defaultValue="5"
                       className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">
                       Listing expiry days
                     </label>
                     <input
                       type="number"
                       defaultValue="30"
                       className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                     />
                   </div>
                 </div>
               </div>

               {/* Save Changes */}
               <div className="flex justify-end">
                 <Button>
                   Save Changes
                 </Button>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 )
}