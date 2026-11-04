// app/template.tsx
// A template re-mounts on every route change, so the curtain plays on each navigation (and on first load).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="curtain" aria-hidden="true" />
      {children}
    </>
  );
}