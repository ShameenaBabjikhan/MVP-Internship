import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const Layout = ({ title, children }) => (
  <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}>
    <Head>
      <title>{title}</title>
    </Head>
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

    <main className="flex-grow">{children}</main>

    <footer className="footer">
      <div className="container text-center">
        <p>© 2025 SmartScan Legal. All rights reserved.</p>
        <nav className="mt-2 flex justify-center gap-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  </div>
);

export default function AboutPage() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: "The Platform",
      content: "We act as an extension of your legal team, redlining contracts per your policies – like an attorney, but faster and more consistent.",
    },
    {
      title: "Digital Playbook",
      content: "Enable standardized legal reviews and compliance using our Digital Playbook feature.",
    },
    {
      title: "Artificial Intelligence",
      content: "Analyze contracts and detect risks instantly using our advanced AI engine.",
    },
    {
      title: "Analytics",
      content: "Gain contract insights, risk profiles, and compliance trends using visual analytics.",
    },
  ];

  const handleAskGemini = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response || "No response received.");
    } catch (error) {
      setResponse("An error occurred while communicating with Gemini.");
    }

    setLoading(false);
  };

  return (
    <Layout title="About - SmartScan Legal">
      {/* Background Video */}
      <section className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[400px] object-cover"
          src="/video1.mp4"
        />
        <div className="absolute top-0 left-0 h-full flex items-center pl-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-md">
            From Contract to Clarity in Seconds
          </h2>
        </div>
      </section>

      {/* About */}
      <section className="py-8">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">About SmartScan Legal</h2>
          <p className="mb-4">
            SmartScan Legal is an AI-powered platform that helps you analyze legal contracts in seconds. Our mission is to simplify legal review using natural language processing to identify key clauses, risks, and obligations instantly.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="container">
        <img src="/image3.png" alt="SmartScan Legal" className="w-full h-auto" />
      </section>

      {/* Features */}
      <section className="py-8">
        <div className="container flex">
          <div className="w-1/3 pr-8">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <div className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`w-full text-left py-2 px-4 font-semibold rounded-lg transition-colors ${
                    activeFeature === index
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--card)] hover:bg-[var(--card-muted)]"
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          <div className="w-2/3 pl-8">
            {activeFeature !== null && (
              <div className="p-4 bg-[var(--card)] rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">{features[activeFeature].title}</h4>
                <p className="text-[var(--foreground)]">{features[activeFeature].content}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gemini AI Integration */}
      <section className="py-8 text-center bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Ask Gemini AI</h3>
        <input
          type="text"
          placeholder="Ask a legal question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 w-full max-w-lg border rounded-md mb-4"
        />
        <br />
        <button onClick={handleAskGemini} className="btn">
          {loading ? "Processing..." : "Ask Gemini"}
        </button>
        {response && (
          <div className="mt-4 max-w-2xl mx-auto p-4 bg-white border rounded-md shadow-sm text-left">
            <h4 className="font-semibold mb-2">Gemini Response:</h4>
            <p>{response}</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
