import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>404</h1>
      <p style={{ margin: 0, opacity: 0.65 }}>Esta página no existe.</p>
      <Link href="/" style={{ marginTop: 8, textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </main>
  );
}
