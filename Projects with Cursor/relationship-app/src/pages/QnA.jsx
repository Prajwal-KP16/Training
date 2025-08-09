import { useLocalStorage } from '../hooks/useLocalStorage'
import { useState } from 'react'
import { Section } from '../components/ui.jsx'

export default function QnA() {
  const [items, setItems] = useLocalStorage('rc_qna_v1', [])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function addItem(e) {
    e.preventDefault()
    if (!question.trim() || !answer.trim()) return
    const newItem = { id: Date.now(), question: question.trim(), answer: answer.trim(), createdAt: new Date().toISOString() }
    setItems([newItem, ...items])
    setQuestion('')
    setAnswer('')
  }

  function removeItem(id) {
    setItems(items.filter((i) => i.id !== id))
  }

  return (
    <Section title="Q&A Journal" description="Ask yourself the hard questions and write the answers you want to live by.">
      <form onSubmit={addItem} className="grid gap-3 rounded-lg border bg-white p-4">
        <input type="text" placeholder="Your question..." value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" required />
        <textarea placeholder="Your answer..." value={answer} onChange={(e) => setAnswer(e.target.value)} className="min-h-28 w-full rounded-md border px-3 py-2 text-sm" required />
        <div className="flex items-center justify-end">
          <button type="submit" className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm disabled:opacity-50" disabled={!question.trim() || !answer.trim()}>Save Q&A</button>
        </div>
      </form>

      <div className="grid gap-3">
        {items.length === 0 && <div className="text-sm text-gray-500">No Q&A yet. Add your first reflection.</div>}
        {items.map((i) => (
          <div key={i.id} className="rounded-lg border bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">Q: {i.question}</div>
                <div className="text-xs text-gray-500">{new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <button onClick={() => removeItem(i.id)} className="text-xs text-red-600 hover:underline">Delete</button>
            </div>
            <div className="mt-2 text-sm text-gray-800"><span className="font-medium">A:</span> {i.answer}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

