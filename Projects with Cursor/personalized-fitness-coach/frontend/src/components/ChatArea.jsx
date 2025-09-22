import { useState } from 'react'

export default function ChatArea({ onSend }) {
  const [message, setMessage] = useState('')
  return (
    <div className="space-y-2">
      <div className="text-sm text-white/70">Share feedback to refine your plan.</div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="e.g., Knee pain on squats, prefer cycling"
          className="flex-1 bg-transparent border border-white/20 rounded px-3 py-2"
        />
        <button
          onClick={()=>{ if(!message.trim()) return; onSend?.(message.trim()); setMessage('') }}
          className="bg-indigo-600 hover:bg-indigo-500 rounded px-4 py-2 font-medium"
        >Send</button>
      </div>
    </div>
  )
}
