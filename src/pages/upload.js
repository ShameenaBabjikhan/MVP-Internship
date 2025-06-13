import { useState } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import FilePreview from "../component/FilePreview";
import UploadStatus from "../component/UploadStatus";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const Layout = ({ title, children }) => (
  <div className={`${geistSans.className} ${geistMono.className} bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}>
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
    <main className="upload-section">
      {children}
    </main>
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; 2025 SmartScan Legal. All rights reserved.</p>
        <nav>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  </div>
);

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [startUpload, setStartUpload] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    if (selectedFile) {
      setStartUpload(true); // triggers progress bar
      alert("Mock upload triggered!");
    } else {
      alert("Please select a file first.");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setStartUpload(false); // reset upload status
  };

  return (
    <Layout title="Upload - SmartScan Legal">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload a Contract</h2>
      <form onSubmit={handleUpload} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Choose File</label>
          <input type="file" className="w-full border px-3 py-2 rounded" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn">Upload Document</button>
      </form>

      <FilePreview file={selectedFile} />
      <UploadStatus start={startUpload} />
    </Layout>
  );
}
