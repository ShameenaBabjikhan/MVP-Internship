import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const Layout = ({ title, children }) => (
  <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}>
    <Head>
      <title>{title}</title>
    </Head>

    {/* Header */}
    <header className="navbar">
      <div className="container flex justify-between items-center">
        <h1>SmartScan Legal</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/upload">Upload</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main className="summary-page">
      {children}
    </main>

    {/* Footer */}
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; 2025 SmartScan Legal. All rights reserved.</p>
        <nav className="mt-2 flex justify-center gap-4">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  </div>
);

export default function SummaryPage() {
  const exportSummary = () => {
    alert("Download initiated! (Placeholder)");
  };

  return (
    <Layout title="Summary - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-4 text-center">Summary Result</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1">Summary:</h3>
        <p id="summaryText" className="border p-4 mt-2 bg-gray-50 rounded">
          AI-generated summary will appear here.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1">Key Clauses</h3>
        <ul id="clausesList" className="list-disc list-inside pl-4 text-sm text-gray-800">
          {/* Example placeholder */}
          {/* <li>Confidentiality Clause</li> */}
        </ul>
      </div>

      <div className="text-center">
        <button onClick={exportSummary} className="btn">
          Download Summary
        </button>
      </div>
    </Layout>
  );
}
