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

    {/* Main Dashboard Content */}
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

export default function DashboardPage() {
  return (
    <Layout title="Dashboard - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <p className="mb-4">Welcome to the SmartScan Legal dashboard. Here you can manage user activity, document flow, and system performance.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Monitor uploaded contracts</li>
        <li>View user statistics and activity logs</li>
        <li>Manage access control and permissions</li>
        <li>System diagnostics and performance metrics</li>
      </ul>
    </Layout>
    
  );
}
