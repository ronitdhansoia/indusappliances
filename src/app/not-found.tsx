import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="shell py-32">
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-ink">That page is not on the line.</h1>
        <p className="mt-6 max-w-md text-lg text-body">The address may have changed. Start from the home page or the list of divisions.</p>
        <p className="mt-8 flex gap-6">
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/divisions" className="hero-link !text-ink">All divisions</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
