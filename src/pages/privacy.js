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

    {/* Content Area */}
    <main className="page-content">
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

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        Your privacy is important to us. SmartScan Legal is committed to protecting your personal data and ensuring transparency about how we collect, use, and store information.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>We collect data to provide and improve our services.</li>
        <li>We do not share your personal data with third parties without your consent.</li>
        <li>All uploaded documents are processed securely and confidentially.</li>
        <li>You have the right to request deletion of your data at any time.</li>
      </ul>
    </Layout>
  );
}
