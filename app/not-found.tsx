import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero wrap" style={{ minHeight: "70vh" }}>
      <h1 className="page-hero__title">Mis&shy;gevaren</h1>
      <p className="page-hero__lead">Deze pagina bestaat niet (meer). <Link className="link" href="/">Terug naar de kade</Link>.</p>
    </section>
  );
}
