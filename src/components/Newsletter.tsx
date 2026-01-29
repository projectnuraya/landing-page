import { Button } from './ui/Button'
import { Input } from './ui/Input'

export function Newsletter() {
  return (
    <section className='py-20 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-white/5'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='max-w-3xl mx-auto text-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-deep-navy dark:text-white mb-4'>
            Join the Movement
          </h3>
          <p className='text-warm-gray dark:text-gray-400 mb-8'>
            Get monthly insights on tech for good, project updates, and opportunities to contribute.
            No spam, ever.
          </p>

          <form
            className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
            onSubmit={(e) => e.preventDefault()}>
            <Input
              type='email'
              placeholder='Enter your email'
              className='h-12 bg-gray-50 dark:bg-dark-surface'
            />
            <Button type='submit' className='h-12 px-8'>
              Subscribe
            </Button>
          </form>

          <p className='mt-4 text-xs text-gray-400 dark:text-gray-600'>
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
