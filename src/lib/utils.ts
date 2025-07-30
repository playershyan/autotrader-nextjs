import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currency: string = 'LKR'): string {
  if (currency === 'LKR') {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function isValidSriLankanPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  const patterns = [
    /^94[7-9]\d{8}$/,
    /^0[7-9]\d{8}$/,
    /^[7-9]\d{8}$/,
  ]
  return patterns.some(pattern => pattern.test(cleaned))
}

export const SRI_LANKAN_DISTRICTS = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara'
] as const
