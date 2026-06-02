import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { knowledgeSections, type ContentBlock } from '../data/knowledge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={idx} className="text-[#2d2a26] leading-relaxed mb-4">{block.text}</p>
    case 'heading':
      return <h2 key={idx} className="text-xl font-serif font-semibold text-[#6b3a5b] mt-8 mb-3">{block.text}</h2>
    case 'subheading':
      return <h3 key={idx} className="text-lg font-serif font-medium text-[#5a5248] mt-6 mb-2">{block.text}</h3>
    case 'bullet':
      return (
        <ul key={idx} className="list-disc list-inside space-y-1.5 mb-4 text-[#2d2a26]">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">{item}</li>
          ))}
        </ul>
      )
    case 'numbered':
      return (
        <ol key={idx} className="list-decimal list-inside space-y-1.5 mb-4 text-[#2d2a26]">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">{item}</li>
          ))}
        </ol>
      )
    case 'italic':
      return <p key={idx} className="italic text-[#5a5248] mb-4 pl-4 border-l-2 border-[#b8860b]/40">{block.text}</p>
    case 'table':
      return block.tableData ? (
        <div key={idx} className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d8d0c8] rounded-lg overflow-hidden">
            <thead className="bg-[#f0ebe3]">
              <tr>
                {block.tableData.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 font-semibold text-[#2d2a26] border-b border-[#d8d0c8]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.tableData.rows.map((row, ri) => (
                <tr key={ri} className="bg-white hover:bg-[#faf7f2] transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-[#2d2a26] border-b border-[#d8d0c8]/50">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null
    case 'quote':
      return <blockquote key={idx} className="italic text-[#5a5248] mb-4 pl-4 border-l-2 border-[#b8860b]/40 whitespace-pre-line">{block.text}</blockquote>
    default:
      return null
  }
}

export default function Knowledge() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar TOC */}
        <aside className="lg:w-72 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-lg font-serif font-bold text-[#6b3a5b] mb-4">Contents</h2>
            <ScrollArea className="h-[calc(100vh-10rem)] lg:h-auto">
              <nav className="space-y-1 pr-4">
                {knowledgeSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="block px-3 py-2 text-sm text-[#5a5248] hover:text-[#6b3a5b] hover:bg-[#6b3a5b]/5 rounded-md transition-colors leading-snug"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <div className="mb-8 pb-6 border-b border-[#d8d0c8]">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2d2a26] mb-2">Body of Knowledge</h1>
            <p className="text-[#8a8278]">A Comprehensive Guide to Flow State, Emotional Mastery, and Authentic Living</p>
          </div>

          {knowledgeSections.map((section, si) => (
            <div key={section.id}>
              {si > 0 && <Separator className="my-8 bg-[#d8d0c8]" />}
              <section id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#6b3a5b] mb-6">
                  {si + 1}. {section.title}
                </h2>
                <div className="prose-content">
                  {section.content.map((block, bi) => renderBlock(block, bi))}
                </div>
              </section>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
