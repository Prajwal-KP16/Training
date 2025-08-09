import { useLocalStorage } from '../hooks/useLocalStorage'
import { useState } from 'react'
import { Section } from '../components/ui.jsx'

export default function Thoughts() {
  const [thoughts, setThoughts] = useLocalStorage('rc_thoughts_v1', [])
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  function addThought(e) {
    e.preventDefault()
    if (!text.trim()) return
    const newThought = {
      id: Date.now(),
      name: name.trim() || 'Anonymous',
      text: text.trim(),
      createdAt: new Date().toISOString(),
    }
    setThoughts([newThought, ...thoughts])
    setText('')
  }

  function removeThought(id) {
    setThoughts(thoughts.filter((t) => t.id !== id))
  }

  return (
    <Section title="Share Your Thoughts" description="Jot reflections, appreciations, or ideas to nurture your relationship.">
      <form onSubmit={addThought} className="grid gap-3 rounded-lg border bg-white p-4">
        <div className="grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          <div className="sm:col-span-2">
            <input type="text" placeholder="What’s on your mind?" value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" required />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm disabled:opacity-50" disabled={!text.trim()}>Post</button>
        </div>
      </form>

      <div className="grid gap-3">
        {thoughts.length === 0 && <div className="text-sm text-gray-500">No thoughts yet. Be the first to share.</div>}
        {thoughts.map((t) => (
          <div key={t.id} className="rounded-lg border bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleString()}</div>
              </div>
              <button onClick={() => removeThought(t.id)} className="text-xs text-red-600 hover:underline">Delete</button>
            </div>
            <p className="mt-2 text-sm text-gray-800">{t.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

