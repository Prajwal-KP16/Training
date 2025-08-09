import { NavLink } from 'react-router-dom'
import { Card, Section } from '../components/ui.jsx'

export default function Home() {
  return (
    <div className="grid gap-6">
      <div className="rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 text-white p-8">
        <h2 className="text-3xl font-bold">Build strong, respectful relationships</h2>
        <p className="mt-2 text-white/90 max-w-2xl">Practical guidelines for how to treat your partner, the bare minimum that keeps love safe, and scripts to navigate common situations.</p>
        <div className="mt-4 flex gap-3 text-sm">
          <NavLink to="/principles" className="bg-white text-gray-900 rounded-md px-3 py-1.5 font-medium">Start with Principles</NavLink>
          <NavLink to="/situations" className="bg-white/10 border border-white/30 rounded-md px-3 py-1.5">Handle a Situation</NavLink>
        </div>
      </div>

      <Section title="Quick Pillars">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Respect" badge="daily">Speak kindly. No name-calling, ever.</Card>
          <Card title="Honesty">Tell the truth promptly. No hidden accounts or secrets.</Card>
          <Card title="Reliability">Do what you say. Be on time. Keep small promises.</Card>
          <Card title="Affection">Daily appreciation, hugs, and quality time.</Card>
        </div>
      </Section>
    </div>
  )
}

