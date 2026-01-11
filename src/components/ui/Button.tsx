import { Slot } from '@radix-ui/react-slot'
import { clsx, type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 ease-out hover:scale-[1.02]'
    const variants = {
      primary:
        'bg-nuraya-gold text-deep-navy hover:bg-nuraya-gold/90 shadow-lg shadow-nuraya-gold/20 dark:bg-nuraya-gold-bright dark:hover:bg-nuraya-gold-bright/90',
      secondary:
        'bg-sky-blue text-white hover:bg-sky-blue/90 dark:bg-sky-blue-light dark:text-deep-navy',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-white/10 dark:hover:bg-white/5',
      ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-white/5',
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
