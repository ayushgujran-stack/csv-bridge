"use client";

import { useEffect, useState, startTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      {/* ── Global Keyframes ── */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════════
          NAVIGATION
      ════════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              CSV Bridge
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden items-center gap-1 md:flex">
            {["Features", "Open Source", "Docs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100 hover:bg-white/[0.04]"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button
                size="sm"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:brightness-110 transition-all cursor-pointer"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute top-20 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[128px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-40 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[128px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-violet-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-300 mb-8 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            100% FREE &amp; OPEN SOURCE &bull; MIT LICENSED
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight ${
              mounted ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            <span className="block text-zinc-100">The Embeddable</span>
            <span className="block mt-1 bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              CSV Importer
            </span>
            <span className="block text-zinc-100">for SaaS Teams</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 font-normal sm:text-lg sm:leading-8 ${
              mounted ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Stop wasting 100+ hours building CSV import from scratch. CSV Bridge gives
            your users a beautiful, drop-in importer that handles validation, mapping,
            and error handling — so you can ship faster.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${
              mounted ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 transition-all cursor-pointer"
              >
                Get Started Free
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Link href="#docs">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-semibold border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.07] hover:text-white transition-all cursor-pointer"
              >
                View Documentation
              </Button>
            </Link>
          </div>

          {/* Code Snippet Card */}
          <div
            className={`mx-auto mt-16 max-w-xl ${
              mounted ? "animate-fade-in-up delay-500" : "opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Glow behind card */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-violet-600/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="relative rounded-xl border border-white/[0.08] bg-zinc-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-medium text-zinc-500">
                    App.tsx
                  </span>
                </div>

                {/* Code content */}
                <div className="px-5 py-5 font-mono text-sm leading-7 text-left overflow-x-auto">
                  <pre>
                    <code>
                      <span className="text-zinc-500">{"// Import the component"}</span>
                      <br />
                      <span className="text-violet-400">import</span>{" "}
                      <span className="text-emerald-400">{"{ CSVBridge }"}</span>{" "}
                      <span className="text-violet-400">from</span>{" "}
                      <span className="text-amber-300">&quot;@csvbridge/react&quot;</span>
                      <br />
                      <br />
                      <span className="text-zinc-500">{"// Drop it in your app"}</span>
                      <br />
                      <span className="text-zinc-300">export default function </span>
                      <span className="text-indigo-400">App</span>
                      <span className="text-zinc-300">{"() {"}</span>
                      <br />
                      <span className="text-zinc-300">  return (</span>
                      <br />
                      <span className="text-zinc-300">    </span>
                      <span className="text-zinc-500">{"<"}</span>
                      <span className="text-indigo-400">{"CSVBridge"}</span>
                      <br />
                      <span className="text-zinc-300">      </span>
                      <span className="text-cyan-400">apiKey</span>
                      <span className="text-zinc-500">=</span>
                      <span className="text-amber-300">&quot;csvb_sk_...&quot;</span>
                      <br />
                      <span className="text-zinc-300">      </span>
                      <span className="text-cyan-400">webhookUrl</span>
                      <span className="text-zinc-500">=</span>
                      <span className="text-amber-300">&quot;https://n8n.mycompany.com/webhook/csv-sync&quot;</span>
                      <br />
                      <span className="text-zinc-300">    </span>
                      <span className="text-zinc-500">{"/>"}</span>
                      <br />
                      <span className="text-zinc-300">  )</span>
                      <br />
                      <span className="text-zinc-300">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FEATURES SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="relative py-24 sm:py-32">
        {/* Subtle top border gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p
              className={`text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3 ${
                mounted ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              Features
            </p>
            <h2
              className={`text-2xl font-semibold tracking-tight sm:text-3xl text-zinc-100 ${
                mounted ? "animate-fade-in delay-300" : "opacity-0"
              }`}
            >
              Everything you need for CSV imports
            </h2>
            <p
              className={`mt-4 text-zinc-500 font-normal max-w-xl mx-auto ${
                mounted ? "animate-fade-in delay-400" : "opacity-0"
              }`}
            >
              A complete toolkit that handles the entire CSV import lifecycle, from file
              upload to validated data delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — Drop-in Integration */}
            <FeatureCard
              mounted={mounted}
              delay="delay-400"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>
              }
              title="Drop-in Integration"
              description="Embed a production-ready CSV importer in your app with just 3 lines of code. Works with React, Vue, Angular, or vanilla JS."
            />

            {/* Card 2 — Smart Column Mapping */}
            <FeatureCard
              mounted={mounted}
              delay="delay-500"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4" />
                  <path d="M12 19v4" />
                  <path d="m4.6 4.6 2.8 2.8" />
                  <path d="m16.6 16.6 2.8 2.8" />
                  <path d="M1 12h4" />
                  <path d="M19 12h4" />
                  <path d="m4.6 19.4 2.8-2.8" />
                  <path d="m16.6 7.4 2.8-2.8" />
                </svg>
              }
              title="Smart Column Mapping"
              description="AI-powered auto-mapping matches user columns to your schema instantly. Users can review and adjust with a beautiful drag-and-drop UI."
            />

            {/* Card 3 — Webhook Delivery */}
            <FeatureCard
              mounted={mounted}
              delay="delay-600"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              }
              title="Webhook Delivery"
              description="Validated, cleaned data is delivered to your backend in real-time via webhooks. Automatic retries, signing, and delivery logs included."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p
              className={`text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3 ${
                mounted ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              How It Works
            </p>
            <h2
              className={`text-2xl font-semibold tracking-tight sm:text-3xl text-zinc-100 ${
                mounted ? "animate-fade-in delay-300" : "opacity-0"
              }`}
            >
              Three steps to CSV nirvana
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Install & Configure",
                description:
                  "Add the SDK to your project, set your API key, and define your data schema in minutes.",
              },
              {
                step: "02",
                title: "Your Users Upload",
                description:
                  "Users drag-and-drop their CSV. Our AI maps columns, validates rows, and highlights errors automatically.",
              },
              {
                step: "03",
                title: "Receive Clean Data",
                description:
                  "Validated data is delivered to your webhook endpoint in real-time, ready for your database or pipeline.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`group relative text-center sm:text-left ${
                  mounted
                    ? `animate-fade-in-up delay-${(i + 4) * 100}`
                    : "opacity-0"
                }`}
              >
                {/* Step number */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] mb-5">
                  <span className="text-xl font-semibold bg-gradient-to-br from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>

                {/* Connector line (only between steps on larger screens) */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}

                <h3 className="text-lg font-medium text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          OPEN SOURCE SECTION (100% Free Forever)
      ════════════════════════════════════════════════════════════════════ */}
      <section id="open-source" className="relative py-24 sm:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p
              className={`text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-3 ${
                mounted ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              100% Free &amp; Open Source
            </p>
            <h2
              className={`text-2xl font-semibold tracking-tight sm:text-3xl text-zinc-100 ${
                mounted ? "animate-fade-in delay-300" : "opacity-0"
              }`}
            >
              Zero Paywalls. No Subscriptions.
            </h2>
            <p
              className={`mt-4 text-zinc-500 font-normal max-w-lg mx-auto ${
                mounted ? "animate-fade-in delay-400" : "opacity-0"
              }`}
            >
              CSV Bridge is completely free under the permissive MIT License. Use it in personal or commercial SaaS apps with zero artificial row limits or monthly fees.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* MIT License */}
            <div
              className={`group relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] ${
                mounted ? "animate-fade-in-up delay-400" : "opacity-0"
              }`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <p className="text-sm font-medium text-zinc-400 mb-1">MIT Licensed</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-semibold text-zinc-100">$0</span>
                <span className="text-sm text-emerald-400 font-medium ml-1">Free Forever</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-500 font-normal">
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Commercial &amp; personal use
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  No credit card or trial expiration
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Full source code auditability
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Unlimited imports &amp; rows
                </li>
              </ul>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="w-full h-10 text-sm font-medium border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.07] hover:text-white transition-all cursor-pointer"
                >
                  Start Building
                </Button>
              </Link>
            </div>

            {/* Self-Hostable — highlighted */}
            <div
              className={`group relative rounded-xl border border-violet-500/30 bg-white/[0.03] p-7 transition-all duration-300 hover:border-violet-500/50 hover:bg-white/[0.05] shadow-lg shadow-violet-500/5 ${
                mounted ? "animate-fade-in-up delay-500" : "opacity-0"
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-violet-500/20 border border-violet-500/30 px-3 py-0.5 text-xs font-medium text-violet-300">
                  Full Data Privacy
                </span>
              </div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 20 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <p className="text-sm font-medium text-zinc-400 mb-1">Self-Hosted</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-semibold text-zinc-100">Supabase</span>
                <span className="text-sm text-zinc-500 ml-1">Powered</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-500 font-normal">
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Your database, your cloud
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Row Level Security (RLS)
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Built-in API key management
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Zero vendor lock-in
                </li>
              </ul>
              <Link href="/dashboard">
                <Button
                  size="default"
                  className="w-full h-10 text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:brightness-110 transition-all cursor-pointer"
                >
                  Open Dashboard
                </Button>
              </Link>
            </div>

            {/* Drop-in Component */}
            <div
              className={`group relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] ${
                mounted ? "animate-fade-in-up delay-600" : "opacity-0"
              }`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <p className="text-sm font-medium text-zinc-400 mb-1">React Library</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-semibold text-zinc-100">Drop-in</span>
                <span className="text-sm text-zinc-500 ml-1">Widget</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-500 font-normal">
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Client-side CSV parsing
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Bring Your Own Key (BYOK)
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  Custom webhook or API target
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 shrink-0"><path d="M5 12l5 5L20 7" /></svg>
                  TypeScript &amp; Tailwind ready
                </li>
              </ul>
              <Link href="#docs">
                <Button
                  variant="outline"
                  className="w-full h-10 text-sm font-medium border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.07] hover:text-white transition-all cursor-pointer"
                >
                  View Code Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className={`relative overflow-hidden rounded-2xl border border-white/[0.08] ${
              mounted ? "animate-fade-in delay-300" : "opacity-0"
            }`}
          >
            {/* BG gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-indigo-600/10 to-violet-600/5" />
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-500/15 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-[80px]" />

            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-zinc-100">
                Ready to simplify CSV imports?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-zinc-500 font-normal leading-relaxed">
                Join developers and teams who eliminated their CSV import headaches.
                100% free and open source — deploy in minutes.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 transition-all cursor-pointer"
                  >
                    Get Started Free
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <Link href="#docs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base font-semibold border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.07] hover:text-white transition-all cursor-pointer"
                  >
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-indigo-600">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-zinc-400">
              CSV Bridge
            </span>
          </div>

          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} CSV Bridge. Released under the MIT License.
          </p>

          <div className="flex items-center gap-5">
            {["Documentation", "GitHub", "Community"].map((link) => (
              <Link
                key={link}
                href={link === "Documentation" ? "#docs" : "#"}
                className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURE CARD COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function FeatureCard({
  icon,
  title,
  description,
  mounted,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  mounted: boolean;
  delay: string;
}) {
  return (
    <div
      className={`group relative rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-7 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.05] ${
        mounted ? `animate-fade-in-up ${delay}` : "opacity-0"
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-violet-400">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-zinc-100 mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500 font-normal">{description}</p>
      </div>
    </div>
  );
}
