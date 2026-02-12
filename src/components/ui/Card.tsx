import React, { forwardRef } from 'react'

import { cn } from '../../lib/utils'

type CardVariant = 'default' | 'gold' | 'blue'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'border-black/5 hover:shadow-md dark:border-white/5',
      gold: 'border-nuraya-gold-400/20 hover:shadow-[0_8px_30px_rgb(226,180,66,0.15)] hover:border-nuraya-gold-400/40 dark:border-nuraya-gold-400/30 dark:hover:shadow-[0_8px_30px_rgb(226,180,66,0.2)]',
      blue: 'border-nuraya-blue-400/20 hover:shadow-[0_8px_30px_rgb(0,174,239,0.15)] hover:border-nuraya-blue-400/40 dark:border-nuraya-blue-400/30 dark:hover:shadow-[0_8px_30px_rgb(0,174,239,0.2)]',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border bg-white text-deep-navy shadow-sm transition-all duration-300 dark:bg-dark-bg dark:text-gray-100',
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'
const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'
const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
)
CardTitle.displayName = 'CardTitle'
const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-warm-gray dark:text-gray-400', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'
const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'
const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
