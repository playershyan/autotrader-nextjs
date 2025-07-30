export const APP_CONFIG = {
    name: 'AutoTrader.lk',
    description: 'Sri Lanka\'s most trusted vehicle marketplace',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://autotrader.lk',
    
    contact: {
      phone: '+94 11 234 5678',
      email: 'info@autotrader.lk',
      address: 'Colombo, Sri Lanka',
    },
  } as const
  
  export const UPLOAD_LIMITS = {
    maxFileSize: 5 * 1024 * 1024,
    maxFilesPerListing: 15,
    allowedImageTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  } as const
  
  export const ERROR_MESSAGES = {
    INVALID_PHONE: 'Please enter a valid Sri Lankan phone number',
    INVALID_OTP: 'Invalid OTP code. Please try again.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
  } as const
