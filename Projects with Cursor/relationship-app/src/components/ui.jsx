export function Section({ title, children, description }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-1">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="grid gap-4">{children}</div>
    </section>
  )
}

export function Card({ title, children, badge, actions }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          {actions}
          {badge && <span className="text-xs rounded-full bg-gray-900 text-white px-2 py-0.5">{badge}</span>}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </div>
  )
}

