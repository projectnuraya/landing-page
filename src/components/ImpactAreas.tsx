import { Activity, Globe, GraduationCap, Users } from 'lucide-react'

const areas = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Democratizing access to knowledge through intuitive learning platforms.',
  },
  {
    icon: Activity,
    title: 'Healthcare',
    description: 'Simplifying patient data management for community health centers.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building tools that foster local collaboration and civic engagement.',
  },
  {
    icon: Globe,
    title: 'Environment',
    description: 'Leveraging data to support sustainability and conservation efforts.',
  },
]
export function ImpactAreas() {
  return (
    <section className='py-24 bg-deep-navy text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute right-0 top-0 w-96 h-96 bg-nuraya-gold-400 rounded-full blur-[120px]' />
        <div className='absolute left-0 bottom-0 w-96 h-96 bg-nuraya-blue-400 rounded-full blur-[120px]' />
      </div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Where Technology Meets Humanity</h2>
          <p className='text-gray-300 max-w-2xl mx-auto text-lg'>
            We focus our energy on sectors where digital transformation can save lives, improve
            futures, and strengthen communities.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {areas.map((area) => (
            <div
              key={area.title}
              className='group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1'>
              <div className='mb-6 inline-flex p-3 rounded-lg bg-gradient-to-br from-nuraya-gold-400/20 to-transparent border border-nuraya-gold-400/20 group-hover:border-nuraya-gold-400/40 transition-colors'>
                <area.icon className='w-6 h-6 text-nuraya-gold-400' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>{area.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
