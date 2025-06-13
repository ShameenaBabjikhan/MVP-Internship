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

    {/* Main content styled with auth-box */}
    <main className="auth-box">
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

export default function RegisterPage() {
  return (
    <Layout title="Register - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" placeholder="Jane Doe" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" placeholder="••••••••" className="w-full border px-3 py-2 rounded" />
        </div>
        <button type="submit" className="btn w-full">Register</button>
        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="underline">Login here</a>
        </p>
      </form>
    </Layout>
  );
}
