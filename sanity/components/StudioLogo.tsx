// sanity/components/StudioLogo.tsx
// 'use client' not needed — Sanity Studio handles its own React context

export function StudioLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 4px",
      }}
    >
      <div
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "6px",
          background: "#f97316",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "-0.5px",
          }}
        >
          SP
        </span>
      </div>
      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--card-fg-color, #101112)",
          fontFamily: "monospace",
          letterSpacing: "-0.3px",
        }}
      >
        Spandan Poudel
      </span>
    </div>
  );
}
