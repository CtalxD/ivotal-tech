// app/components/Scene.tsx

import type { CSSProperties } from "react";

const L = (i: number) => ({ "--i": i }) as CSSProperties;
const barHeights = [40, 64, 50, 82, 60, 96];

export default function Scene() {
  return (
    <svg className="scene" viewBox="0 0 560 480" aria-hidden="true">
      <g className="layer" style={L(0)}>
        <rect x="0" y="56" width="560" height="400" rx="32" className="f-tint" />
      </g>

      {/* Website */}
      <g className="layer" style={L(1)}>
        <rect x="24" y="24" width="360" height="250" rx="16" className="f-surface" />
        <path d="M24 60V40a16 16 0 0 1 16-16H368a16 16 0 0 1 16 16V60Z" className="f-tint2" />
        <circle cx="46" cy="42" r="5" className="f-mid" />
        <circle cx="62" cy="42" r="5" className="f-mid" />
        <circle cx="78" cy="42" r="5" className="f-mid" />
        <rect x="48" y="84" width="170" height="14" rx="7" className="f-deep" />
        <rect x="48" y="108" width="126" height="14" rx="7" className="f-deep" />
        <rect x="48" y="138" width="190" height="8" rx="4" className="f-tint2" />
        <rect x="48" y="154" width="150" height="8" rx="4" className="f-tint2" />
        <rect x="48" y="176" width="84" height="28" rx="8" className="f-mid" />
        <rect x="266" y="84" width="96" height="120" rx="12" className="f-tint" />
        <circle cx="314" cy="124" r="18" className="f-tint2" />
        <rect x="280" y="160" width="68" height="28" rx="8" className="f-tint2" />
        <rect x="48" y="216" width="92" height="38" rx="9" className="f-tint" />
        <rect x="150" y="216" width="92" height="38" rx="9" className="f-tint" />
        <rect x="252" y="216" width="92" height="38" rx="9" className="f-tint" />
      </g>

      {/* Phone */}
      <g className="layer" style={L(2)}>
        <rect x="408" y="30" width="128" height="214" rx="24" className="f-deep" />
        <rect x="416" y="38" width="112" height="198" rx="18" className="f-surface" />
        <rect x="428" y="54" width="88" height="56" rx="10" className="f-tint" />
        <rect x="428" y="124" width="88" height="12" rx="6" className="f-tint2" />
        <rect x="428" y="146" width="64" height="12" rx="6" className="f-tint2" />
        <rect x="428" y="168" width="76" height="12" rx="6" className="f-tint2" />
        <rect x="428" y="198" width="88" height="26" rx="8" className="f-mid" />
      </g>

      {/* Dashboard */}
      <g className="layer" style={L(3)}>
        <rect x="200" y="262" width="320" height="190" rx="18" className="f-deep" />
        <path d="M258 262H218a18 18 0 0 0-18 18V434a18 18 0 0 0 18 18H258Z" className="f-ink" />
        <rect x="214" y="284" width="30" height="6" rx="3" className="f-mid" />
        <rect x="214" y="304" width="30" height="6" rx="3" className="f-mid" />
        <rect x="214" y="324" width="30" height="6" rx="3" className="f-mid" />
        <rect x="214" y="344" width="30" height="6" rx="3" className="f-mid" />
        <rect x="274" y="284" width="68" height="40" rx="9" className="f-deep2" />
        <rect x="352" y="284" width="68" height="40" rx="9" className="f-deep2" />
        <rect x="430" y="284" width="74" height="40" rx="9" className="f-deep2" />
        {barHeights.map((h, k) => (
          <rect key={k} x={278 + k * 36} y={434 - h} width="24" height={h} rx="6" className={k === 5 ? "f-surface" : "f-tint2"} />
        ))}
      </g>
    </svg>
  );
}