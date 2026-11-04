// app/components/Preview.tsx
// One drawn picture per service, in the same order as the dictionary: website, web application,
// custom software, interface design. Shown beside the service text so each tab looks like what it is.

export type PreviewName = "web" | "app" | "software" | "design";

const bars = [60, 92, 70, 120, 86, 140, 104];

export default function Preview({ name }: { name: PreviewName }) {
  return (
    <svg className="pv" viewBox="0 0 480 360" aria-hidden="true">
      <rect width="480" height="360" rx="24" className="f-tint" />

      {name === "web" && (
        <>
          <rect x="36" y="36" width="408" height="288" rx="16" className="f-surface" />
          <path d="M36 76V52a16 16 0 0 1 16-16H428a16 16 0 0 1 16 16V76Z" className="f-tint2" />
          <circle cx="58" cy="56" r="5" className="f-mid" />
          <circle cx="76" cy="56" r="5" className="f-mid" />
          <circle cx="94" cy="56" r="5" className="f-mid" />
          <rect x="64" y="104" width="190" height="16" rx="8" className="f-deep" />
          <rect x="64" y="130" width="140" height="16" rx="8" className="f-deep" />
          <rect x="64" y="164" width="220" height="9" rx="4.5" className="f-tint2" />
          <rect x="64" y="182" width="176" height="9" rx="4.5" className="f-tint2" />
          <rect x="64" y="208" width="96" height="30" rx="9" className="f-mid" />
          <rect x="300" y="100" width="120" height="138" rx="14" className="f-tint" />
          <circle cx="360" cy="148" r="20" className="f-tint2" />
          <rect x="318" y="190" width="84" height="30" rx="8" className="f-tint2" />
          <rect x="64" y="262" width="100" height="40" rx="10" className="f-tint" />
          <rect x="178" y="262" width="100" height="40" rx="10" className="f-tint" />
          <rect x="292" y="262" width="100" height="40" rx="10" className="f-tint" />
        </>
      )}

      {name === "app" && (
        <>
          <rect x="36" y="36" width="408" height="288" rx="16" className="f-deep" />
          <path d="M92 36H52a16 16 0 0 0-16 16V308a16 16 0 0 0 16 16H92Z" className="f-ink" />
          <rect x="52" y="64" width="26" height="6" rx="3" className="f-mid" />
          <rect x="52" y="88" width="26" height="6" rx="3" className="f-mid" />
          <rect x="52" y="112" width="26" height="6" rx="3" className="f-mid" />
          <rect x="52" y="136" width="26" height="6" rx="3" className="f-mid" />
          <rect x="112" y="64" width="100" height="56" rx="10" className="f-deep2" />
          <rect x="224" y="64" width="100" height="56" rx="10" className="f-deep2" />
          <rect x="336" y="64" width="92" height="56" rx="10" className="f-deep2" />
          {bars.map((h, k) => (
            <rect key={k} x={116 + k * 44} y={300 - h} width="28" height={h} rx="7" className={k === 5 ? "f-surface" : "f-tint2"} />
          ))}
        </>
      )}

      {name === "software" && (
        <>
          <rect x="36" y="48" width="296" height="240" rx="14" className="f-ink" />
          <circle cx="58" cy="68" r="5" className="f-mid" />
          <circle cx="74" cy="68" r="5" className="f-mid" />
          <circle cx="90" cy="68" r="5" className="f-mid" />
          <rect x="60" y="100" width="120" height="10" rx="5" className="f-mid" />
          <rect x="80" y="122" width="150" height="10" rx="5" className="f-tint2" />
          <rect x="80" y="144" width="96" height="10" rx="5" className="f-tint2" />
          <rect x="80" y="166" width="132" height="10" rx="5" className="f-mid" />
          <rect x="60" y="188" width="56" height="10" rx="5" className="f-mid" />
          <rect x="60" y="222" width="140" height="10" rx="5" className="f-tint2" />
          <rect x="80" y="244" width="110" height="10" rx="5" className="f-tint2" />
          <rect x="300" y="96" width="132" height="232" rx="26" className="f-deep" />
          <rect x="310" y="106" width="112" height="212" rx="18" className="f-surface" />
          <rect x="322" y="122" width="88" height="60" rx="10" className="f-tint" />
          <rect x="322" y="196" width="88" height="12" rx="6" className="f-tint2" />
          <rect x="322" y="218" width="64" height="12" rx="6" className="f-tint2" />
          <rect x="322" y="240" width="76" height="12" rx="6" className="f-tint2" />
          <rect x="322" y="272" width="88" height="28" rx="9" className="f-mid" />
        </>
      )}

      {name === "design" && (
        <>
          {[36, 184, 332].map((x) => (
            <g key={x}>
              <rect x={x} y="56" width="112" height="176" rx="14" className="f-surface" />
              <rect x={x + 14} y="72" width="84" height="48" rx="8" className="f-tint" />
              <rect x={x + 14} y="134" width="84" height="10" rx="5" className="f-tint2" />
              <rect x={x + 14} y="152" width="60" height="10" rx="5" className="f-tint2" />
              <rect x={x + 14} y="170" width="72" height="10" rx="5" className="f-tint2" />
              <rect x={x + 14} y="196" width="84" height="22" rx="7" className="f-mid" />
            </g>
          ))}
          <path d="M148 144H184M296 144H332" className="s-mid" />
          <circle cx="148" cy="144" r="5" className="f-mid" />
          <circle cx="184" cy="144" r="5" className="f-mid" />
          <circle cx="296" cy="144" r="5" className="f-mid" />
          <circle cx="332" cy="144" r="5" className="f-mid" />
          <rect x="36" y="268" width="48" height="48" rx="12" className="f-ink" />
          <rect x="96" y="268" width="48" height="48" rx="12" className="f-deep" />
          <rect x="156" y="268" width="48" height="48" rx="12" className="f-mid" />
          <rect x="216" y="268" width="48" height="48" rx="12" className="f-tint2" />
          <rect x="276" y="268" width="48" height="48" rx="12" className="f-surface" />
        </>
      )}
    </svg>
  );
}