import { useState } from 'react'
import './App.css'
import GoalForm from './components/GoalForm'
import PlanView from './components/PlanView'
import ChatArea from './components/ChatArea'

function App() {
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState(null)
  const [messages, setMessages] = useState([])

  const backendUrl = '' // use Vite proxy for /api during dev

  async function generatePlan(payload) {
    try {
      setLoading(true)
      const res = await fetch(`${backendUrl}/api/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setPlan(data)
    } catch (e) {
      console.error(e)
      alert('Failed to generate plan')
    } finally {
      setLoading(false)
    }
  }

  function handleSendFeedback(text) {
    setMessages((prev)=>[...prev,{ role: 'user', text }])
    // In a real app, send to backend/LLM; here, append a simple echo
    setTimeout(()=>{
      setMessages((prev)=>[...prev,{ role: 'coach', text: `Noted: ${text}. I will adjust future sessions.` }])
    }, 300)
  }

  return (
    <div className="min-h-screen text-white">
      <header className="py-6">
        <h1 className="text-2xl font-bold">Personalized Fitness Coach</h1>
        <p className="text-white/70 text-sm">Get a plan tailored to your goals and feedback.</p>
      </header>

      <main className="grid gap-8 md:grid-cols-3">
        <section className="md:col-span-1 space-y-4">
          <GoalForm onSubmit={generatePlan} loading={loading} />
          <div className="rounded-lg border border-white/10 p-4 bg-white/5">
            <div className="font-medium mb-2">Feedback</div>
            <div className="space-y-2 max-h-64 overflow-auto pr-2">
              {messages.map((m, i)=>(
                <div key={i} className={m.role === 'coach' ? 'text-green-300 text-sm' : 'text-white text-sm'}>
                  <span className="uppercase text-xs mr-2 opacity-70">{m.role}</span>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <ChatArea onSend={handleSendFeedback} />
            </div>
          </div>
        </section>

        <section className="md:col-span-2">
          <PlanView plan={plan} />
        </section>
      </main>
    </div>
  )
}

export default App
