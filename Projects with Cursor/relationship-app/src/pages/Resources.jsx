import { useState } from 'react'
import { Section } from '../components/ui.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Resources() {
  const [links, setLinks] = useLocalStorage('rc_resources_v1', [
    { id: 1, name: 'Gottman Institute', url: 'https://www.gottman.com/' },
    { id: 2, name: 'Nonviolent Communication', url: 'https://www.cnvc.org/' },
    { id: 3, name: 'Attachment Styles (Info)', url: 'https://en.wikipedia.org/wiki/Attachment_theory' },
  ])
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  function add(e) {
    e.preventDefault()
    if (!name.trim() || !url.trim()) return
    setLinks([{ id: Date.now(), name: name.trim(), url: url.trim() }, ...links])
    setName('')
    setUrl('')
  }

  function remove(id) {
    setLinks(links.filter((l) => l.id !== id))
  }

  return (
    <Section title="Resources">
      <form onSubmit={add} className="grid gap-3 rounded-lg border bg-white p-4">
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="Resource name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="https://example.com" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <div className="flex justify-end"><button className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm" disabled={!name.trim() || !url.trim()}>Add Resource</button></div>
      </form>

      <ul className="grid gap-2 list-disc pl-6">
        {links.map((l) => (
          <li key={l.id} className="text-sm flex items-start justify-between gap-4">
            <a className="text-blue-600 hover:underline" href={l.url} target="_blank" rel="noreferrer">{l.name}</a>
            <button onClick={() => remove(l.id)} className="text-xs text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </Section>
  )
}

