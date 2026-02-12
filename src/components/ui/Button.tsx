import { Slot } from '@radix-ui/react-slot'
import React, { forwardRef } from 'react'

import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    const variants = {
      primary:
        'bg-nuraya-gold-400 text-deep-navy hover:bg-nuraya-gold-500 shadow-lg shadow-nuraya-gold-400/20 dark:bg-nuraya-gold-200 dark:hover:bg-nuraya-gold-300 dark:shadow-nuraya-gold-200/20',
      secondary:
        'bg-nuraya-blue-400 text-white hover:bg-nuraya-blue-500 shadow-lg shadow-nuraya-blue-400/20 dark:bg-nuraya-blue-300 dark:hover:bg-nuraya-blue-400 dark:text-deep-navy',
      outline:
        'border border-input bg-background hover:bg-accent-50 hover:text-accent-500 dark:border-white/10 dark:hover:bg-white/5',
      ghost: 'hover:bg-accent-50 hover:text-accent-500 dark:hover:bg-white/5',
    }
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-12 rounded-md px-8 text-base',
      icon: 'h-10 w-10',
    }
    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
export { Button }
