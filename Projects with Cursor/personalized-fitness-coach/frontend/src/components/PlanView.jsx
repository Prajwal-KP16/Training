export default function PlanView({ plan }) {
  if (!plan) {
    return (
      <div className="text-sm text-white/70">No plan yet. Generate one to get started.</div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Plan ({plan.daysPerWeek} days/week)</h2>
        <p className="text-white/70 text-sm capitalize">Goal: {plan.goal} • Experience: {plan.experience}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {plan.plan.map((d) => (
          <div key={d.day} className="rounded-lg border border-white/10 p-4 bg-white/5">
            <div className="font-medium">{d.day} — {d.focus}</div>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              {d.blocks.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="text-xs text-white/60 mt-2">Note: {d.notes}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/10 p-4 bg-white/5">
        <div className="font-medium mb-2">Tips</div>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          {plan.tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
