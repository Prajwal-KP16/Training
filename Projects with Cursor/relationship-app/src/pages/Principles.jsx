import { useState } from 'react'
import { Card, Section } from '../components/ui.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Principles() {
  const [principles, setPrinciples] = useLocalStorage('rc_principles_v1', [
    { id: 1, title: 'Kindness over being right', text: 'Prioritize your partner’s feelings over winning arguments.' },
    { id: 2, title: 'Assume positive intent', text: 'Most missteps come from stress or oversight, not malice.' },
    { id: 3, title: 'Repair quickly', text: 'Micro-repairs prevent macro rifts. Apologize early, specifically.' },
    { id: 4, title: 'One team mindset', text: 'Frame problems as us-vs-problem, not me-vs-you.' },
    { id: 5, title: 'Boundaries + Autonomy', text: 'Respect personal space, time, friendships, and privacy.' },
  ])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function add(e) {
    e.preventDefault()
    if (!title.trim() || !text.trim()) return
    setPrinciples([{ id: Date.now(), title: title.trim(), text: text.trim() }, ...principles])
    setTitle('')
    setText('')
  }

  function remove(id) {
    setPrinciples(principles.filter((p) => p.id !== id))
  }

  return (
    <Section title="Core Principles" description="Guiding values for how to treat your partner.">
      <form onSubmit={add} className="grid gap-3 rounded-lg border bg-white p-4">
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="Description" value={text} onChange={(e) => setText(e.target.value)} required />
        <div className="flex justify-end"><button className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm" disabled={!title.trim() || !text.trim()}>Add Principle</button></div>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((it) => (
          <Card key={it.id} title={it.title} actions={<button onClick={() => remove(it.id)} className="text-xs text-red-600 hover:underline">Delete</button>}>{it.text}</Card>
        ))}
      </div>
    </Section>
  )
}

