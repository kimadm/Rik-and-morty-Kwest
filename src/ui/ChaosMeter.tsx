interface ChaosMeterProps {
  chaos: number;
  maxChaos?: number;
}

export function ChaosMeter({ chaos, maxChaos = 10 }: ChaosMeterProps) {
  const percentage = (chaos / maxChaos) * 100;

  return (
    <section className="panel chaos-meter" aria-label="Chaos meter">
      <div className="meter-label">
        <span>Chaos</span>
        <strong>{chaos}/{maxChaos}</strong>
      </div>
      <div className="meter-track">
        <div className="meter-fill" style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}
