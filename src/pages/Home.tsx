import { useNavigate } from 'react-router'
import { BookOpen, PenTool, ChevronRight, Heart, Sparkles, Leaf } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#faf7f2]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b3a5b]/10 via-transparent to-[#7c9885]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Sparkles className="text-[#b8860b]" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2a26] mb-6 leading-tight">
              Vibration Mastery
            </h1>
            <p className="text-lg md:text-xl text-[#5a5248] mb-4 font-light leading-relaxed">
              A transformational framework for cultivating high energy, self-sufficiency, and mastery over your mental and emotional states.
            </p>
            <p className="text-md text-[#8a8278] mb-10 italic">
              Based on Dr. Meghana Dikshit's Masterclass Series
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/knowledge')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6b3a5b] text-white rounded-lg font-medium hover:bg-[#5a304d] transition-colors shadow-lg shadow-[#6b3a5b]/20"
              >
                <BookOpen size={20} />
                Explore Body of Knowledge
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => navigate('/workbook')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7c9885] text-white rounded-lg font-medium hover:bg-[#6b8574] transition-colors shadow-lg shadow-[#7c9885]/20"
              >
                <PenTool size={20} />
                Start Practice Workbook
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Premise */}
      <section className="py-16 md:py-20 bg-white/60 border-y border-[#d8d0c8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="mx-auto text-[#7c9885] mb-6" size={32} />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2d2a26] mb-6">
            The Core Premise
          </h2>
          <p className="text-lg text-[#5a5248] leading-relaxed mb-8">
            Life is controlled by inner awareness and energy, not just intelligence or motivation. 
            By developing conscious control over your emotional states, environment, and daily practices, 
            you can access higher levels of joy, purpose, and productivity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Progress Over Perfection', desc: 'Incremental, sustainable change beats dramatic overnight transformation.' },
              { title: 'Internal Alignment', desc: 'Self-commitment and internal work create lasting external results.' },
              { title: 'Daily Practice', desc: 'Consistency and regular self-reflection build momentum over time.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-[#faf7f2] border border-[#d8d0c8]">
                <h3 className="font-serif font-semibold text-[#6b3a5b] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5a5248]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2d2a26] text-center mb-12">
            What You'll Master
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Flow State Activation', desc: 'Learn the 8-step body sequence to enter flow on demand.' },
              { icon: Leaf, title: 'Chakra-Based Healing', desc: 'Map emotions to chakras and clean energy blockages.' },
              { icon: Sparkles, title: 'Emotional Regulation', desc: 'Transform fear into focus, guilt into responsibility.' },
              { icon: BookOpen, title: 'Self-Sabotage Release', desc: 'Use the eye-gazing process to free subconscious blocks.' },
              { icon: PenTool, title: 'Monster Task Protocol', desc: 'A 25-minute method to beat procrastination permanently.' },
              { icon: Heart, title: 'Authentic Living', desc: 'Build vulnerability, gratitude, and present-moment focus.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-[#d8d0c8] hover:shadow-lg hover:shadow-[#6b3a5b]/5 transition-shadow">
                <item.icon className="text-[#7c9885] mb-4" size={28} />
                <h3 className="font-serif font-semibold text-[#2d2a26] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5a5248] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#6b3a5b]/10 to-[#7c9885]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2d2a26] mb-4">
            Begin Your Journey
          </h2>
          <p className="text-[#5a5248] mb-8">
            Start with the Body of Knowledge to understand the framework, then move into the Practice Workbook to build lasting habits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/knowledge')}
              className="px-8 py-3 bg-[#6b3a5b] text-white rounded-lg font-medium hover:bg-[#5a304d] transition-colors"
            >
              Read Body of Knowledge
            </button>
            <button
              onClick={() => navigate('/workbook')}
              className="px-8 py-3 bg-white text-[#6b3a5b] border border-[#6b3a5b] rounded-lg font-medium hover:bg-[#6b3a5b]/5 transition-colors"
            >
              Open Practice Workbook
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#d8d0c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[#8a8278]">
          <p className="mb-2">Vibration Mastery — Dr. Meghana Dikshit's Masterclass Series</p>
          <p>Progress over perfection. Consistency over intensity.</p>
        </div>
      </footer>
    </div>
  )
}
