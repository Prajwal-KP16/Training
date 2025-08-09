import { useState } from 'react'
import { Section } from '../components/ui.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function BareMinimum() {
  const [items, setItems] = useLocalStorage('rc_bare_minimum_v1', [
    'No insults, mocking, or threats',
    'No silent treatment beyond a short cooling-off period; always return to talk',
    'Share daily check-ins: “How are you? Anything on your mind?”',
    'Weekly quality time: at least 1 device-free date or walk',
    'Financial transparency: no secret accounts or major purchases',
    'Consent and comfort first in intimacy; no pressure',
    'Fair chores split with clear agreements; follow through',
    'Sleep on big fights only after a truce and plan to revisit',
  ])
  const [text, setText] = useState('')

  function add(e) {
    e.preventDefault()
    if (!text.trim()) return
    setItems([text.trim(), ...items])
    setText('')
  }

  function remove(idx) {
    setItems(items.filter((_, i) => i !== idx))
  }

  return (
    <Section title="Bare Minimum" description="Non-negotiables that sustain trust and warmth.">
      <form onSubmit={add} className="grid gap-3 rounded-lg border bg-white p-4">
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="Add a new bare minimum..." value={text} onChange={(e) => setText(e.target.value)} required />
        <div className="flex justify-end"><button className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm" disabled={!text.trim()}>Add</button></div>
      </form>

      <ul className="grid gap-2 list-disc pl-6">
        {items.map((m, i) => (
          <li key={`${m}-${i}`} className="text-sm flex items-start justify-between gap-4">
            <span>{m}</span>
            <button onClick={() => remove(i)} className="text-xs text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </Section>
  )
}

