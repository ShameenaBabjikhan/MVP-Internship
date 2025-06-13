import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartScan Legal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Upload or scan legal contracts and get AI-driven analysis instantly." />
      </Head>

      <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}>
        {/* Header */}
        <header className="navbar">
          <div className="container flex justify-between items-center">
            <h1 className="text-xl font-bold">SmartScan Legal</h1>
            <nav className="flex gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/upload" className="hover:underline">Upload</a>
              <a href="/dashboard" className="hover:underline">Dashboard</a>
              <a href="/login" className="hover:underline">Login</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Contract Intelligence</h2>
            <p className="text-lg mb-6">Upload or scan your legal contracts and get instant AI-driven summaries, risk insights, and key clauses.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/upload" className="btn">Upload Document</a>
              <a href="/upload#scanner" className="btn-outline">Scan Now</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h3 className="text-center text-xl font-semibold mb-4">Why Choose SmartScan Legal?</h3>
            <ul className="feature-list">
              <li>📄 Clause Detection</li>
              <li>⚠️ Risk Highlighting</li>
              <li>🧠 AI-Powered Summary</li>
              <li>📈 Legal Insight Reports</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; 2025 SmartScan Legal. All rights reserved.</p>
            <nav className="mt-2 flex justify-center gap-4">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy Policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}