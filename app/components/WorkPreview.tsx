// app/components/WorkPreview.tsx

const bars = [38, 62, 45, 78, 56, 88, 70];

export default function WorkPreview({ variant, label }: { variant: number; label: string }) {
  if (variant === 1) {
    return (
      <div className="wp" aria-hidden="true">
        <span className="wp_tag">{label}</span>
        <div className="wp_app">
          <div className="wp_side"><i /><i /><i /><i /><i /></div>
          <div className="wp_main">
            <span className="wp_top" />
            <div className="wp_stats"><i /><i /><i /></div>
            <div className="wp_chart">
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
        <span className="wp_tag">{label}</span>
        <div className="wp_phone">
          <span className="wp_notch" />
          <span className="wp_big" />
          <span className="wp_row" />
          <span className="wp_row" />
          <span className="wp_row" />
        </div>
      </div>
    );
  }

  return (
    <div className="wp" aria-hidden="true">
      <span className="wp_tag">{label}</span>
      <div className="wp_win">
        <span className="wp_line" style={{ width: "78%" }} />
        <span className="wp_line" style={{ width: "52%" }} />
        <span className="wp_line wp_line--thin" style={{ width: "88%", marginTop: 6 }} />
        <span className="wp_line wp_line--thin" style={{ width: "64%" }} />
        <span className="wp_pill" />
        <div className="wp_grid"><i /><i /></div>
      </div>
    </div>
  );
}