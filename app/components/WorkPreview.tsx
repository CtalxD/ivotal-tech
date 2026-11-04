// app/components/WorkPreview.tsx

const bars = [38, 62, 45, 78, 56, 88, 70];

export default function WorkPreview({ variant, label }: { variant: number; label: string }) {
  if (variant === 1) {
    return (
      <div className="wp" aria-hidden="true">
        <span className="wp__tag">{label}</span>
        <div className="wp__app">
          <div className="wp__side"><i /><i /><i /><i /><i /></div>
          <div className="wp__main">
            <span className="wp__top" />
            <div className="wp__stats"><i /><i /><i /></div>
            <div className="wp__chart">
              {bars.map((h, k) => (
                <i key={k} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="wp" aria-hidden="true">
        <span className="wp__tag">{label}</span>
        <div className="wp__phone">
          <span className="wp__notch" />
          <span className="wp__big" />
          <span className="wp__row" />
          <span className="wp__row" />
          <span className="wp__row" />
        </div>
      </div>
    );
  }

  return (
    <div className="wp" aria-hidden="true">
      <span className="wp__tag">{label}</span>
      <div className="wp__win">
        <span className="wp__line" style={{ width: "78%" }} />
        <span className="wp__line" style={{ width: "52%" }} />
        <span className="wp__line wp__line--thin" style={{ width: "88%", marginTop: 6 }} />
        <span className="wp__line wp__line--thin" style={{ width: "64%" }} />
        <span className="wp__pill" />
        <div className="wp__grid"><i /><i /></div>
      </div>
    </div>
  );
}