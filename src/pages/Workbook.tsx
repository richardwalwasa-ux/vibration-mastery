import { useState, useEffect } from 'react'
import { workbookParts, type WorkbookBlock } from '../data/workbook'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BookOpen } from 'lucide-react'

function WorkbookBlockRenderer({ block, idx }: { block: WorkbookBlock; idx: number }) {
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
    case 'fill':
      return (
        <div key={idx} className="mb-4">
          {block.label && (
            <label className="block text-sm font-medium text-[#5a5248] mb-1.5">{block.label}</label>
          )}
          <Textarea
            placeholder="Type your response here..."
            className="bg-white border-[#d8d0c8] focus:border-[#6b3a5b] focus:ring-[#6b3a5b]/20 text-[#2d2a26] resize-y min-h-[60px]"
          />
        </div>
      )
    case 'table':
      return block.tableData ? (
        <div key={idx} className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d8d0c8] rounded-lg overflow-hidden">
            <thead className="bg-[#f0ebe3]">
              <tr>
                {block.tableData.headers.map((h, i) => (
                  <th key={i} className="text-left px-3 py-2.5 font-semibold text-[#2d2a26] border-b border-[#d8d0c8] text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.tableData.rows.map((row, ri) => (
                <tr key={ri} className="bg-white hover:bg-[#faf7f2] transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[#2d2a26] border-b border-[#d8d0c8]/50 text-xs">
                      {cell || <Input className="h-7 text-xs bg-transparent border-none focus-visible:ring-1 focus-visible:ring-[#6b3a5b]" placeholder="..." />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null
    case 'checkbox':
      return (
        <div key={idx} className="space-y-2 mb-4">
          {block.items?.map((item, i) => (
            <label key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-[#6b3a5b]/5 transition-colors cursor-pointer">
              <Checkbox className="mt-0.5 border-[#7c9885] data-[state=checked]:bg-[#7c9885] data-[state=checked]:border-[#7c9885]" />
              <span className="text-sm text-[#2d2a26] leading-relaxed">{item}</span>
            </label>
          ))}
        </div>
      )
    case 'quote':
      return (
        <Card key={idx} className="mb-6 bg-[#f0ebe3]/50 border-[#d8d0c8]">
          <CardContent className="p-5">
            <p className="text-[#5a5248] whitespace-pre-line text-sm leading-relaxed italic">{block.text}</p>
          </CardContent>
        </Card>
      )
    default:
      return null
  }
}

export default function Workbook() {
  const [activeTab, setActiveTab] = useState(workbookParts[0].id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 pb-6 border-b border-[#d8d0c8]">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2d2a26] mb-2">Practice Workbook</h1>
        <p className="text-[#8a8278]">Practical Exercises, Reflections, and Trackers for Personal Transformation</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList className="bg-[#f0ebe3] h-auto flex-wrap gap-1 p-1">
            {workbookParts.map((part) => (
              <TabsTrigger
                key={part.id}
                value={part.id}
                className="data-[state=active]:bg-[#6b3a5b] data-[state=active]:text-white px-4 py-2 text-sm"
              >
                {part.id.startsWith('week') ? `W${part.id.replace('week', '')}` : part.title.split(':')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {workbookParts.map((part) => (
          <TabsContent key={part.id} value={part.id} className="mt-0">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#6b3a5b] mb-2">{part.title}</h2>
              </div>
              <div className="space-y-2">
                {part.content.map((block, bi) => (
                  <WorkbookBlockRenderer key={bi} block={block} idx={bi} />
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Note */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0ebe3] rounded-full text-sm text-[#5a5248]">
          <BookOpen size={16} className="text-[#7c9885]" />
          Use alongside the Body of Knowledge for full context and deeper understanding.
        </div>
      </div>
    </div>
  )
}
