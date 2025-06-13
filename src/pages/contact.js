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

    {/* Page Content */}
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

export default function ContactPage() {
  return (
    <Layout title="Contact - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions, suggestions, or feedback, feel free to reach out to our team.
      </p>
      <div className="space-y-2">
        <p><strong>Email:</strong> support@smartscanlegal.com</p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Address:</strong> 123 LegalTech Avenue, Suite 456, Innovation City, USA</p>
      </div>
    </Layout>
  );
}