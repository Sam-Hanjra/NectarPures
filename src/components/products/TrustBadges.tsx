const badges = [
  { label: "Cold-pressed", detail: "Nutrients preserved" },
  { label: "Silicone-free", detail: "No heavy buildup" },
  { label: "Organic botanicals", detail: "Certified sourcing" },
];

export function TrustBadges() {
  return (
    <ul className="flex flex-wrap gap-3">
      {badges.map((b) => (
        <li
          key={b.label}
          className="rounded-2xl border border-earth/10 bg-white/80 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-earth">
            {b.label}
          </p>
          <p className="mt-0.5 text-[11px] text-earth-muted">{b.detail}</p>
        </li>
      ))}
    </ul>
  );
}
