// pages/register.js
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Layout component
const Layout = ({ title, children }) => (
  <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}>
    <Head>
      <title>{title}</title>
    </Head>

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

    <main className="auth-box">{children}</main>

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

// Main Register Page
export default function RegisterPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      alert("✅ Registered successfully!");
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Register - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" placeholder="Jane Doe" className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" placeholder="••••••••" className="w-full border px-3 py-2 rounded" required />
        </div>
        <button type="submit" className="btn w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="underline">Login here</a>
        </p>
      </form>
    </Layout>
  );
}
