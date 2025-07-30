'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function CheckoutMembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('dealer')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = {
    premium: {
      name: 'Premium Individual',
      monthly: 15000,
      annual: 150000,
      features: [
        'Unlimited vehicle listings',
        'Featured listing placement',
        'Advanced search filters',
        'Premium support',
        'Analytics dashboard',
        'Priority customer service'
      ]
    },
    dealer: {
      name: 'Dealer Package',
      monthly: 35000,
      annual: 350000,
      features: [
        'Everything in Premium',
        'Bulk upload tools',
        'Advanced analytics',
        'Custom dealer profile',
        'Lead management system',
        'Priority listing placement',
        'Dedicated account manager',
        'API access'
      ]
    },
    enterprise: {
      name: 'Enterprise Solution',
      monthly: 75000,
      annual: 750000,
      features: [
        'Everything in Dealer',
        'White-label solutions',
        'Custom integrations',
        'Advanced reporting',
        'Multi-location management',
        'Custom branding',
        '24/7 priority support',
        'Custom development'
      ]
    }
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]
  const currentPrice = billingCycle === 'monthly' ? currentPlan.monthly : currentPlan.annual
  const savings = billingCycle === 'annual' ? (currentPlan.monthly * 12) - currentPlan.annual : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      alert('Subscription activated successfully!')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-gray-900">
                AutoTrader<span className="text-blue-600">.lk</span>
              </span>
            </Link>
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <span>Membership Subscription</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="checkout-header text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="checkout-icon text-4xl">👑</span>
          </div>
          <h1 className="checkout-title text-3xl font-bold text-gray-900 mb-2">
            Membership Subscription
          </h1>
          <p className="text-lg text-gray-600">
            Join AutoTrader.lk Premium and unlock exclusive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Value Proposition Card */}
            <div className="value-proposition-card bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="value-prop-header flex items-center mb-4">
                <span className="value-prop-crown text-2xl mr-3">👑</span>
                <div>
                  <h2 className="value-prop-title text-xl font-bold text-gray-900">
                    Unlock Premium Dealer Advantages
                  </h2>
                </div>
              </div>
              <p className="value-prop-subtitle text-gray-600 mb-6">
                Transform your vehicle sales with data-driven insights and exclusive features that serious dealers use to dominate the market.
              </p>
              
              <div className="value-prop-tiers space-y-6">
                {/* Tier 1: Revenue Generation */}
                <div className="value-tier">
                  <div className="tier-header flex items-center mb-3">
                    <span className="tier-icon text-xl mr-2">💰</span>
                    <h3 className="tier-title text-lg font-semibold text-gray-900">Revenue Generation</h3>
                  </div>
                  <div className="tier-features space-y-2">
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Comparison to similar listings - Price competitively and win more sales</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Arbitrage alert system - Discover profitable buying opportunities instantly</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Vehicle demand by region - Target high-demand markets for maximum profit</span>
                    </div>
                  </div>
                </div>

                {/* Tier 2: Market Intelligence */}
                <div className="value-tier">
                  <div className="tier-header flex items-center mb-3">
                    <span className="tier-icon text-xl mr-2">📊</span>
                    <h3 className="tier-title text-lg font-semibold text-gray-900">Market Intelligence</h3>
                  </div>
                  <div className="tier-features space-y-2">
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Real-time price tracking - Know exactly when to buy and sell</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Competitor analysis - See what others are selling and for how much</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Market trend reports - Anticipate demand shifts before your competition</span>
                    </div>
                  </div>
                </div>

                {/* Tier 3: Professional Tools */}
                <div className="value-tier">
                  <div className="tier-header flex items-center mb-3">
                    <span className="tier-icon text-xl mr-2">🛠️</span>
                    <h3 className="tier-title text-lg font-semibold text-gray-900">Professional Tools</h3>
                  </div>
                  <div className="tier-features space-y-2">
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Bulk listing management - Upload and manage hundreds of vehicles efficiently</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Custom dealer profile - Professional showcase that builds trust</span>
                    </div>
                    <div className="feature-item flex items-start">
                      <span className="feature-icon text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="feature-text text-sm text-gray-700">Priority customer support - Get help when you need it most</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Plan</h3>
              
              {/* Billing Cycle Toggle */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      billingCycle === 'monthly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      billingCycle === 'annual'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setBillingCycle('annual')}
                  >
                    Annual (Save 17%)
                  </button>
                </div>
              </div>

              {/* Plan Options */}
              <div className="space-y-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <div
                    key={key}
                    className={`plan-option border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPlan === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="plan"
                          value={key}
                          checked={selectedPlan === key}
                          onChange={() => setSelectedPlan(key)}
                          className="mr-3"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                          <p className="text-sm text-gray-600">
                            {plan.features.length} features included
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          LKR {(billingCycle === 'monthly' ? plan.monthly : plan.annual).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
              
              <div className="space-y-4">
                <div
                  className={`payment-option border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <span className="text-lg mr-2">💳</span>
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`payment-option border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === 'bank'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🏦</span>
                      <span className="font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Form */}
              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Silva"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan</span>
                  <span className="font-medium">{currentPlan.name}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Billing</span>
                  <span className="font-medium capitalize">{billingCycle}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">LKR {currentPrice.toLocaleString()}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Annual Discount</span>
                    <span className="font-medium">-LKR {savings.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>LKR {currentPrice.toLocaleString()}</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-600 mt-1">
                      Equivalent to LKR {Math.round(currentPrice / 12).toLocaleString()}/month
                    </p>
                  )}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6">
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    `Subscribe for LKR ${currentPrice.toLocaleString()}`
                  )}
                </Button>
              </form>

              <div className="terms-text text-xs text-gray-500 mt-4 text-center">
                By proceeding, you agree to our{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                Subscription will be activated immediately upon payment confirmation.
              </div>

              {/* Security Badges */}
              <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <span className="mr-1">🔒</span>
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <span className="mr-1">✓</span>
                  SSL Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}