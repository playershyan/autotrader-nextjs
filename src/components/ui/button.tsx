import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      default: 'bg-blue-600 text-white shadow hover:bg-blue-700',
      outline: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-50',
      secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200',
      ghost: 'hover:bg-gray-100'
    }
    
    const sizes = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-8',
      icon: 'h-9 w-9'
    }

    if (asChild) {
      return (
        <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props} />
      )
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }