
"use client";

import React, { useState } from "react";

const projects = [
  {
    number: "01",
    name: "TruthLens AI",
    category: "AI · MEDIA LITERACY",
    status: "Concept",
    description:
      "A proposed news research assistant exploring how AI can gather sources, compare supporting and contradicting evidence, and create transparent, source-linked reports.",
    tags: ["AI Research", "Fact Checking", "Source Analysis"],
    accent: "cyan",
    mark: "TL",
  },
  {
    number: "02",
    name: "MediaMind",
    category: "AI · MEDIA RESEARCH",
    status: "Concept",
    description:
      "A proposed research companion for organizing references, identifying recurring themes, and comparing how different media outlets cover a story.",
    tags: ["Media Studies", "Research", "AI Agents"],
    accent: "violet",
    mark: "MM",
  },
  {
    number: "03",
    name: "ClipForge AI",
    category: "AI · CONTENT CREATION",
    status: "Concept",
    description:
      "A proposed content repurposing tool that explores turning long-form videos or transcripts into short-form content ideas, captions, and clip suggestions.",
    tags: ["Digital Media", "Content Ideas", "Automation"],
    accent: "blue",
    mark: "CF",
  },
];

const skillGroups = [
  {
    title: "01 / Media & Communication",
    description: "My academic foundation and creative interests.",
    skills: [
      ["Digital storytelling", "Foundation"],
      ["Media research", "Foundation"],
      ["Audience & communication", "Foundation"],
      ["Content creation", "Exploring"],
    ],
  },
  {
    title: "02 / AI & Emerging Technology",
    description: "Understanding how intelligent systems can help people.",
    skills: [
      ["AI agents", "Learning"],
      ["Generative AI", "Exploring"],
      ["AI-assisted research", "Exploring"],
      ["Workflow automation", "Learning"],
    ],
  },
  {
    title: "03 / Development & Tools",
    description: "Learning by experimenting, building, and iterating.",
    skills: [
      ["Python", "Learning"],
      ["TypeScript", "Learning"],
      ["Next.js", "Learning"],
      ["Tailwind CSS", "Learning"],
      ["Git & GitHub", "Learning"],
    ],
  },
  {
    title: "04 / Creative Thinking",
    description: "The perspective I bring to the problems I explore.",
    skills: [
      ["Creative problem-solving", "Developing"],
      ["Visual communication", "Developing"],
      ["Idea exploration", "Practice"],
      ["Human-centered design", "Exploring"],
    ],
  },
];

const journey = [
  {
    number: "01",
    period: "THE FOUNDATION",
    title: "Media & Communication",
    text: "Studying how stories travel, how audiences interpret information, and how digital media shapes the way we understand the world.",
    keywords: ["Storytelling", "Audiences", "Digital culture"],
  },
  {
    number: "02",
    period: "THE EXPLORATION",
    title: "Discovering AI",
    text: "Learning programming, exploring artificial intelligence, and understanding how AI agents can reason through tasks and support real workflows.",
    keywords: ["Programming", "AI agents", "Experimentation"],
  },
  {
    number: "03",
    period: "THE NEXT CHAPTER",
    title: "Building & Sharing",
    text: "Turning ideas into small, practical projects, documenting what I learn, and gradually building a public body of work on GitHub.",
    keywords: ["Personal projects", "Iteration", "Open source"],
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "rotate-[-45deg]" : ""}
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 2.5 21.8 14.2 33.5 18l-11.7 3.8L18 33.5l-3.8-11.7L2.5 18l11.7-3.8L18 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl md:mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-cyan-300" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function Portrait() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="portrait-wrap relative mx-auto w-full max-w-[440px]">
      <div className="portrait-halo absolute inset-[8%] rounded-[48%] bg-cyan-400/15 blur-[65px]" />

      <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[44%_44%_12px_12px] border border-white/15 bg-[#101d31]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_35%,rgba(73,205,255,0.19),transparent_53%),linear-gradient(150deg,#162b47_0%,#0c1527_58%,#11162d_100%)]" />

        {!imageFailed ? (
          <img
            // Place your actual photograph at public/images/shayan.jpg.
            // This code intentionally does not invent or generate a portrait.
            src="/shayan.jpeg.jpeg"
            alt="Portrait of Shayan"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            aria-label="Portrait placeholder. Add your photo to public/images/shayan.jpg."
          >
            <div className="relative mb-7 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-200/30 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-violet-400/20 sm:h-48 sm:w-48">
              <div className="absolute inset-3 rounded-full border border-dashed border-white/15" />
              <svg
                viewBox="0 0 140 160"
                className="h-36 w-32 text-cyan-100/65 sm:h-40 sm:w-36"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="70"
                  cy="48"
                  r="27"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 145c2-34 21-54 50-54s48 20 50 54"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M53 52c7 7 27 7 34 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <SparkIcon className="absolute -right-3 top-5 h-7 w-7 text-cyan-200" />
            </div>
            <p className="text-sm font-medium text-white">Your portrait goes here</p>
            <p className="mt-2 max-w-[230px] text-xs leading-6 text-slate-400">
              Add your photograph to{" "}
              <span className="text-cyan-200">public/images/shayan.jpg</span>
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101f]/70 via-transparent to-[#07101f]/5" />
        <div className="pointer-events-none absolute inset-3 rounded-[inherit] border border-white/[0.09]" />
      </div>

      <div className="absolute -left-3 top-[17%] h-12 w-12 rounded-full border border-cyan-200/20 bg-[#0c1728]/90 backdrop-blur-md sm:-left-5 sm:h-16 sm:w-16">
        <div className="absolute inset-0 flex items-center justify-center text-cyan-200">
          <SparkIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
      </div>

      <div className="absolute -right-2 bottom-[17%] flex items-center gap-3 rounded-xl border border-white/10 bg-[#101b2d]/95 px-3 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:-right-8 sm:px-5 sm:py-4">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
        </span>
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Current focus
          </p>
          <p className="mt-1 text-xs font-medium text-white sm:text-sm">
            Building with AI
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-5 -left-3 h-20 w-20 border-b border-l border-cyan-300/30 sm:-bottom-7 sm:-left-6 sm:h-28 sm:w-28" />
      <div className="pointer-events-none absolute -right-2 -top-3 h-16 w-16 border-r border-t border-violet-300/30 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
    </div>
  );
}

function ProjectArtwork({
  index,
  accent,
}: {
  index: number;
  accent: string;
}) {
  return (
    <div
      className={`project-art art-${accent} relative flex h-[185px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07]`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:27px_27px]" />

      {index === 0 && (
        <>
          <div className="absolute left-[12%] top-[24%] h-24 w-24 rounded-full border border-cyan-200/20" />
          <div className="absolute left-[17%] top-[29%] h-14 w-14 rounded-full border border-cyan-200/30" />
          <div className="absolute left-[23%] top-[35%] h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_24px_5px_rgba(103,232,249,0.4)]" />
          <svg
            viewBox="0 0 240 150"
            className="relative h-36 w-[88%] max-w-[310px]"
            fill="none"
          >
            <path
              d="M32 87 79 53l41 26 45-44 45 48"
              stroke="#67e8f9"
              strokeOpacity=".6"
              strokeWidth="1.2"
            />
            <path
              d="M32 87 81 111l39-32 45 37 45-33"
              stroke="#818cf8"
              strokeOpacity=".7"
              strokeWidth="1.2"
            />
            {[32, 79, 120, 165, 210].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy={[87, 53, 79, 35, 83][i]}
                r="4"
                fill="#a5f3fc"
              />
            ))}
            <rect
              x="69"
              y="58"
              width="105"
              height="53"
              rx="8"
              fill="#10263b"
              stroke="#67e8f9"
              strokeOpacity=".65"
            />
            <path
              d="M82 74h49M82 82h64M82 90h39M82 98h52"
              stroke="#a5f3fc"
              strokeOpacity=".65"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
          <span className="absolute bottom-3 right-4 font-mono text-[9px] tracking-[0.22em] text-cyan-100/60">
            EVIDENCE / SIGNAL
          </span>
        </>
      )}

      {index === 1 && (
        <>
          <div className="absolute h-32 w-32 rounded-full border border-violet-200/20" />
          <div className="absolute h-24 w-24 rounded-full border border-violet-200/30" />
          <div className="absolute h-16 w-16 rounded-full border border-cyan-200/30" />
          <div className="absolute h-3 w-3 rounded-full bg-violet-200 shadow-[0_0_24px_6px_rgba(167,139,250,0.5)]" />
          <svg
            viewBox="0 0 240 150"
            className="absolute h-36 w-[90%] max-w-[300px]"
            fill="none"
          >
            <path
              d="M120 75 48 35M120 75l72-40M120 75l-75 43M120 75l75 43"
              stroke="#c4b5fd"
              strokeOpacity=".55"
            />
            {[
              [48, 35],
              [192, 35],
              [45, 118],
              [195, 118],
            ].map(([x, y], i) => (
              <g key={i}>
                <rect
                  x={x - 17}
                  y={y - 12}
                  width="34"
                  height="24"
                  rx="5"
                  fill="#201b3d"
                  stroke="#c4b5fd"
                  strokeOpacity=".8"
                />
                <circle cx={x} cy={y} r="3" fill="#c4b5fd" />
              </g>
            ))}
            <circle
              cx="120"
              cy="75"
              r="23"
              fill="#171c37"
              stroke="#67e8f9"
              strokeWidth="1.2"
            />
            <path
              d="m114 75 5 5 9-11"
              stroke="#a5f3fc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute bottom-3 right-4 font-mono text-[9px] tracking-[0.22em] text-violet-100/60">
            PATTERNS / PERSPECTIVES
          </span>
        </>
      )}

      {index === 2 && (
        <>
          <div className="absolute left-[16%] top-[20%] h-32 w-32 rotate-12 rounded-[26px] border border-blue-200/15" />
          <div className="absolute right-[16%] top-[25%] h-24 w-24 -rotate-12 rounded-[22px] border border-cyan-200/20" />
          <div className="relative flex h-24 w-[72%] max-w-[280px] items-center justify-center gap-2 rounded-xl border border-blue-200/25 bg-[#10233b]/90 px-3 shadow-[0_12px_50px_rgba(37,99,235,0.12)]">
            {[20, 38, 26, 52, 34, 60, 27, 45, 21, 38, 52, 26, 42, 18, 32, 47, 24].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex flex-1 items-center justify-center"
                >
                  <div
                    className={`w-full max-w-2 rounded-full ${
                      i % 3 === 0 ? "bg-cyan-200" : "bg-blue-300/65"
                    }`}
                    style={{ height: `${height}px` }}
                  />
                </div>
              )
            )}
            <div className="absolute inset-y-0 left-[48%] w-px bg-white/70 shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]" />
          </div>
          <span className="absolute bottom-3 right-4 font-mono text-[9px] tracking-[0.22em] text-blue-100/60">
            LONG FORM → SHORT FORM
          </span>
        </>
      )}
    </div>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080e1b] font-sans text-slate-200 selection:bg-cyan-300/25 selection:text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 92px;
        }

        body {
          margin: 0;
          background: #080e1b;
        }

        * {
          box-sizing: border-box;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #67e8f9;
          outline-offset: 5px;
        }

        .page-grid {
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.035) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.035) 1px,
              transparent 1px
            );
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
          -webkit-mask-image: linear-gradient(
            to bottom,
            black,
            transparent 85%
          );
        }

        .hero-title {
          text-wrap: balance;
        }

        .gradient-text {
          background: linear-gradient(
            105deg,
            #f8fafc 0%,
            #a5f3fc 47%,
            #a5b4fc 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass {
          background: linear-gradient(
            145deg,
            rgba(19, 33, 54, 0.82),
            rgba(11, 20, 35, 0.76)
          );
          backdrop-filter: blur(16px);
        }

        .portrait-wrap {
          isolation: isolate;
        }

        .portrait-frame img {
          transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .portrait-frame:hover img {
          transform: scale(1.025);
        }

        .project-card {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background-color 300ms ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(103, 232, 249, 0.3);
        }

        .project-art {
          background-color: #101b30;
        }

        .art-cyan {
          background-image: radial-gradient(
            ellipse at 50% 45%,
            rgba(8, 145, 178, 0.16),
            transparent 70%
          );
        }

        .art-violet {
          background-image: radial-gradient(
            ellipse at 50% 45%,
            rgba(124, 58, 237, 0.18),
            transparent 70%
          );
        }

        .art-blue {
          background-image: radial-gradient(
            ellipse at 50% 45%,
            rgba(37, 99, 235, 0.18),
            transparent 70%
          );
        }

        .journey-line {
          background: linear-gradient(
            to bottom,
            rgba(103, 232, 249, 0.55),
            rgba(129, 140, 248, 0.22),
            transparent
          );
        }

        .section-divider {
          border-color: rgba(148, 163, 184, 0.13);
        }

        .skill-chip {
          transition:
            border-color 200ms ease,
            background-color 200ms ease;
        }

        .skill-chip:hover {
          border-color: rgba(103, 232, 249, 0.35);
          background-color: rgba(34, 211, 238, 0.07);
        }

        .connect-link {
          transition:
            color 200ms ease,
            border-color 200ms ease,
            background-color 200ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e1b]/90 backdrop-blur-2xl">
        <nav
          className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Shayan, back to home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/[0.06]">
              <span className="text-sm font-semibold tracking-[-0.1em] text-cyan-100">
                S<span className="text-violet-300">.</span>
              </span>
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.03em] text-white">
              shayan<span className="text-cyan-300">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white transition-all hover:border-cyan-200/40 hover:bg-cyan-200/[0.07] sm:flex"
          >
            Let&apos;s connect <ArrowIcon diagonal />
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/[0.07] bg-[#0b1322] px-5 pb-5 pt-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-white/[0.06] py-3.5 text-sm text-slate-300 transition-colors hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-semibold text-[#08101d]"
            >
              Let&apos;s connect <ArrowIcon diagonal />
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="page-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-70" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-[1240px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:min-h-[760px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="relative z-10 max-w-[680px]">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-200/15 bg-cyan-200/[0.045] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="text-[10px] font-medium uppercase tracking-[0.19em] text-cyan-100/90 sm:text-[11px]">
                Learning · Experimenting · Building
              </span>
            </div>

            <p className="mb-5 text-sm font-medium tracking-wide text-slate-400">
              Hey, I&apos;m Shayan.
            </p>

            <h1
              id="hero-title"
              className="hero-title text-[clamp(3.35rem,8vw,6.6rem)] font-medium leading-[0.97] tracking-[-0.075em] text-white"
            >
              Exploring the
              <br />
              future of
              <br />
              <span className="gradient-text">Media & AI.</span>
            </h1>

            <p className="mt-7 max-w-[510px] text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
              A Media Studies student exploring artificial intelligence,
              learning to build AI agents, and turning curious ideas into
              practical digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-lg bg-cyan-200 px-5 py-3.5 text-sm font-semibold text-[#08101d] transition-all hover:bg-cyan-100"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.04]"
              >
                Let&apos;s connect <ArrowIcon diagonal />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/[0.09] pt-6">
              <div>
                <p className="text-xs font-medium text-white">
                  BS Media Studies
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  University of Sargodha
                </p>
              </div>
              <span className="hidden h-8 w-px bg-white/10 sm:block" />
              <div>
                <p className="text-xs font-medium text-white">
                  AI & Creative Tech
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  A work in progress
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[430px] lg:ml-auto lg:max-w-[420px]">
            <Portrait />
            <div className="mt-10 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-xs font-medium tracking-wide text-white">
                  Curiosity → Creation
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Learning in public, one idea at a time.
                </p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-6 rounded-full bg-cyan-300" />
                <span className="h-1.5 w-3 rounded-full bg-slate-700" />
                <span className="h-1.5 w-3 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-white/[0.07] bg-white/[0.015]">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-5 sm:px-8 lg:px-12">
            <span className="text-[9px] uppercase tracking-[0.24em] text-slate-500">
              The intersection of
            </span>
            {["MEDIA", "INTELLIGENCE", "CREATIVITY", "TECHNOLOGY"].map(
              (word, index) => (
                <React.Fragment key={word}>
                  <span className="text-[10px] font-medium tracking-[0.16em] text-slate-400 sm:text-[11px]">
                    {word}
                  </span>
                  {index < 3 && (
                    <span className="hidden h-1 w-1 rounded-full bg-cyan-300/60 sm:block" />
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-b section-divider"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="A little about me"
            title={
              <>
                Creative by perspective.
                <br />
                <span className="text-slate-500">Technical by curiosity.</span>
              </>
            }
          />

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="relative">
              <div className="absolute -left-5 top-1 h-16 w-px bg-gradient-to-b from-cyan-300/70 to-transparent" />
              <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-slate-200 sm:text-2xl sm:leading-10">
                I&apos;m interested in what happens when the art of
                communication meets the possibilities of artificial
                intelligence.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-200">
                  <SparkIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">
                    Based in Pakistan
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    University of Sargodha
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-[15px]">
              <p>
                I&apos;m Shayan, a BS Media Studies student at the University of
                Sargodha. My academic background has me thinking about stories,
                audiences, digital communication, and the way information
                shapes people&apos;s understanding of the world.
              </p>
              <p>
                Alongside my studies, I&apos;m exploring artificial intelligence
                and learning how to build with it. I&apos;m interested in AI
                agents, programming, modern web development, and the practical
                ways intelligent tools can support research and creative work.
              </p>
              <p>
                I believe the best way to learn is to make something. That
                means experimenting with ideas, working through problems,
                learning from mistakes, and documenting the process as I go.
                This portfolio is a snapshot of that journey, not a claim that
                I&apos;ve already figured everything out.
              </p>
              <p className="text-slate-200">
                The goal is simple: keep learning, keep building, and create
                technology that is genuinely useful to people.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
            {[
              {
                icon: "01",
                title: "Creative perspective",
                text: "Starting with people, stories, and the problems worth solving.",
              },
              {
                icon: "02",
                title: "Hands-on learning",
                text: "Exploring new tools by building, testing, and improving.",
              },
              {
                icon: "03",
                title: "Purposeful technology",
                text: "Looking for practical uses for AI beyond the hype.",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="bg-[#0c1423] p-6 sm:p-7"
              >
                <span className="font-mono text-xs tracking-widest text-cyan-200">
                  / {item.icon}
                </span>
                <h3 className="mt-5 text-sm font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="scroll-mt-24 border-b section-divider"
        aria-labelledby="journey-heading"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="The journey so far"
            title={
              <>
                From understanding
                <br />
                <span className="gradient-text">to building.</span>
              </>
            }
            description="Three connected areas shaping the way I think, the skills I'm developing, and the projects I want to create."
          />

          <div className="relative grid gap-5 lg:grid-cols-3">
            <div className="journey-line absolute left-[23px] top-8 hidden h-px w-[calc(100%-46px)] lg:block" />
            {journey.map((item) => (
              <article
                key={item.number}
                className="glass relative rounded-2xl border border-white/[0.09] p-6 sm:p-8"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/[0.05] font-mono text-sm text-cyan-200">
                    {item.number}
                  </span>
                  <span className="text-[9px] font-medium tracking-[0.16em] text-slate-500">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 min-h-[105px] text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                  {item.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-[10px] text-slate-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-slate-500">
            These are ongoing learning stages, not a record of completed
            qualifications or professional milestones.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-b section-divider"
        aria-labelledby="skills-heading"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Skills & exploration"
            title={
              <>
                A toolkit in
                <br />
                <span className="text-slate-500">the making.</span>
              </>
            }
            description="I'm building my toolkit one skill at a time. Here's what I'm studying, exploring, and developing through coursework and personal experimentation."
          />

          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] text-slate-400">
            <span className="font-medium uppercase tracking-[0.15em] text-slate-300">
              Status guide
            </span>
            {[
              ["Learning", "bg-cyan-300"],
              ["Exploring", "bg-violet-300"],
              ["Foundation", "bg-slate-400"],
            ].map(([label, color]) => (
              <span key={label} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
                {label}
              </span>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.018] p-5 sm:p-7"
              >
                <h3 className="text-sm font-medium tracking-tight text-white sm:text-base">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map(([skill, status]) => (
                    <div
                      key={skill}
                      className="skill-chip flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#0c1423] px-3 py-2.5"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          status === "Learning"
                            ? "bg-cyan-300"
                            : status === "Exploring"
                              ? "bg-violet-300"
                              : status === "Foundation"
                                ? "bg-slate-400"
                                : "bg-blue-300"
                        }`}
                      />
                      <span className="text-xs text-slate-200">{skill}</span>
                      <span className="text-[9px] text-slate-500">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex gap-3 rounded-xl border border-cyan-200/10 bg-cyan-200/[0.035] p-4 sm:p-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 11v5m0-8h.01"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-xs leading-6 text-slate-400">
              These labels describe learning and exploration, not verified
              proficiency. My aim is to strengthen each area through practical
              projects and consistent practice.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-b section-divider"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Ideas taking shape"
              title={
                <>
                  The ideas I want
                  <br />
                  <span className="gradient-text">to bring to life.</span>
                </>
              }
              description="Three project concepts at the intersection of media, research, and AI. Each represents a direction I'm interested in exploring through practical development."
            />
            <span className="mb-12 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] text-slate-400 md:mb-16">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
              Early-stage concepts
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="project-card flex h-full flex-col rounded-2xl border border-white/[0.09] bg-white/[0.018] p-4 sm:p-5"
              >
                <ProjectArtwork index={index} accent={project.accent} />

                <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[9px] font-medium tracking-[0.18em] text-slate-500">
                      {project.category}
                    </span>
                    <span className="rounded-md border border-violet-300/20 bg-violet-300/[0.06] px-2 py-1 text-[9px] font-medium text-violet-200">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-xs font-semibold ${
                        project.accent === "cyan"
                          ? "border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-200"
                          : project.accent === "violet"
                            ? "border-violet-200/20 bg-violet-200/[0.06] text-violet-200"
                            : "border-blue-200/20 bg-blue-200/[0.06] text-blue-200"
                      }`}
                    >
                      {project.mark}
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <span className="text-[10px] text-slate-500">
                      Proposed project
                    </span>
                    <span className="flex items-center gap-2 text-[10px] text-slate-400">
                      Exploring the idea
                      <ArrowIcon diagonal />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
            <div>
              <p className="text-sm font-medium text-white">
                A portfolio that grows with me.
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                These concepts are not presented as completed applications.
                Repository links and release details will be added when real
                projects are ready to share.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex shrink-0 items-center gap-2 text-xs font-medium text-cyan-200 transition-colors hover:text-cyan-100 sm:mt-0"
            >
              Follow the journey <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="relative overflow-hidden border-b section-divider"
        aria-labelledby="philosophy-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,211,238,0.065),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-cyan-200/[0.07] sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-cyan-200/[0.07] sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <SparkIcon className="h-6 w-6 text-cyan-200" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200 sm:text-xs">
                What I believe
              </span>
            </div>
            <h2
              id="philosophy-heading"
              className="text-3xl font-medium leading-[1.3] tracking-[-0.045em] text-white sm:text-4xl sm:leading-[1.35] md:text-5xl lg:text-[3.6rem]"
            >
              Technology becomes more meaningful when it helps people{" "}
              <span className="gradient-text">
                understand, communicate, and create.
              </span>
            </h2>
            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300/60" />
              <p className="text-xs leading-6 text-slate-400">
                The principle behind what I learn and what I hope to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                  Start a conversation
                </span>
              </div>

              <h2
                id="contact-heading"
                className="text-4xl font-medium leading-[1.1] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl"
              >
                Have an idea
                <br />
                <span className="gradient-text">worth building?</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
                I&apos;m interested in creative technology, AI experiments,
                media research, and ideas that make digital experiences more
                useful. If something here resonates with you, let&apos;s
                connect.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 5h16v14H4z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium text-white">
                    Open to conversations
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Collaboration, ideas, and learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "GitHub",
                  detail: "Projects & experiments",
                  href: "https://github.com/",
                  external: true,
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 19c-4.3 1.3-4.3-2.2-6-2.5M15 21v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6.5 4.3 4.3 0 0 0 18.3 3S17.3 2.7 15 4.5a12.5 12.5 0 0 0-6 0C6.7 2.7 5.7 3 5.7 3a4.3 4.3 0 0 0-.1 3.5A4.7 4.7 0 0 0 4.3 10c0 4.7 2.8 5.7 5.5 6A2.7 2.7 0 0 0 9 18.1V21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  detail: "Professional connections",
                  href: "https://www.linkedin.com/",
                  external: true,
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <rect
                        x="2.5"
                        y="2.5"
                        width="19"
                        height="19"
                        rx="2.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Email",
                  detail: "Replace with your email address",
                  href: "#contact",
                  external: false,
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={
                    !link.external
                      ? (event) => {
                          event.preventDefault();
                          window.alert(
                            "Add your real email address to the Email link in app/page.tsx."
                          );
                        }
                      : undefined
                  }
                  className="connect-link group flex items-center justify-between gap-4 rounded-xl border border-white/[0.09] bg-white/[0.02] p-5 hover:border-cyan-200/25 hover:bg-cyan-200/[0.035] sm:p-6"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-300 transition-colors group-hover:border-cyan-200/20 group-hover:text-cyan-200">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white">
                        {link.name}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {link.detail}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-cyan-200">
                    <ArrowIcon diagonal />
                  </span>
                </a>
              ))}

              <p className="pt-3 text-[11px] leading-6 text-slate-500">
                GitHub and LinkedIn currently link to their official homepages,
                not personal profiles. Replace these destinations with your
                own profile URLs before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex w-fit items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-200/[0.05] text-xs font-semibold text-cyan-100">
              S<span className="text-violet-300">.</span>
            </span>
            <span className="text-xs font-medium text-white">
              Shayan
              <span className="ml-2 font-normal text-slate-500">
                — Media × AI × Creativity
              </span>
            </span>
          </a>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-slate-500 transition-colors hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} Shayan. Made with curiosity.
          </p>
        </div>
      </footer>
    </main>
  );
}
