import { useState } from 'react'
import { Card, Section } from '../components/ui.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Situations() {
  const [situations, setSituations] = useLocalStorage('rc_situations_v1', [
    {
      id: 1,
      title: 'They seem distant lately',
      script: '“I’ve noticed we’ve felt a bit farther apart. Is there anything weighing on you? I want to understand and be here with you.”',
    },
    {
      id: 2,
      title: 'I messed up and hurt them',
      script: '“I’m sorry for doing X. I can see how that made you feel Y. I care about this and will do Z to change. Is there anything else you need?”',
    },
    {
      id: 3,
      title: 'Recurring argument about chores',
      script: '“Can we try a 2-week experiment? Let’s list tasks, agree owners, and check in twice. We’ll adjust based on what’s fair and realistic.”',
    },
    {
      id: 4,
      title: 'They need space',
      script: '“I hear you. I’ll give you space and check back at 7pm. I’m here when you’re ready.”',
    },
  ])

  const [title, setTitle] = useState('')
  const [script, setScript] = useState('')

  function add(e) {
    e.preventDefault()
    if (!title.trim() || !script.trim()) return
    setSituations([{ id: Date.now(), title: title.trim(), script: script.trim() }, ...situations])
    setTitle('')
    setScript('')
  }

  function remove(id) {
    setSituations(situations.filter((s) => s.id !== id))
  }

  return (
    <Section title="Situation Playbook" description="Ideas for how to respond with care and clarity.">
      <form onSubmit={add} className="grid gap-3 rounded-lg border bg-white p-4">
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="Situation title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className="rounded-md border px-3 py-2 text-sm" placeholder="What to say (script)" value={script} onChange={(e) => setScript(e.target.value)} required />
        <div className="flex justify-end"><button className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm" disabled={!title.trim() || !script.trim()}>Add</button></div>
      </form>

      <div className="grid sm:grid-cols-2 gap-4">
        {situations.map((s) => (
          <Card key={s.id} title={s.title} actions={<button onClick={() => remove(s.id)} className="text-xs text-red-600 hover:underline">Delete</button>}>
            <div className="font-medium">Try saying:</div>
            <blockquote className="mt-1 italic text-gray-600">{s.script}</blockquote>
          </Card>
        ))}
      </div>
    </Section>
  )
}

