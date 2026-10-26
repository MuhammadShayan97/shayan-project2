
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "TruthLens AI",
    category: "AI · Journalism · Research",
    status: "Concept",
    description:
      "A proposed news research assistant that gathers sources, compares supporting and contradicting evidence, and helps turn complex claims into transparent, source-linked reports.",
    tags: ["AI Agents", "Media Literacy", "Source Analysis"],
    theme: "truth",
    mark: "T",
  },
  {
    number: "02",
    name: "MediaMind",
    category: "AI · Media Research",
    status: "Concept",
    description:
      "A proposed research companion for organizing references, discovering recurring themes, and comparing how different sources cover the same story.",
    tags: ["Media Research", "Information Design", "AI"],
    theme: "media",
    mark: "M",
  },
  {
    number: "03",
    name: "ClipForge AI",
    category: "AI · Content Creation",
    status: "Concept",
    description:
      "A proposed content repurposing tool that explores turning long-form videos or transcripts into short-form content ideas, captions, and potential clip selections.",
    tags: ["Digital Media", "Content Strategy", "Automation"],
    theme: "clip",
    mark: "C",
  },
];

const learningGroups = [
  {
    title: "Media & Communication",
    number: "01",
    description: "The creative foundation",
    items: [
      "Digital storytelling",
      "Media research",
      "Audience understanding",
      "Content creation",
      "Communication",
    ],
  },
  {
    title: "AI & Emerging Technology",
    number: "02",
    description: "Exploring what's possible",
    items: [
      "Artificial intelligence",
      "AI agents",
      "Agent workflows",
      "AI-powered applications",
      "Prompt design",
    ],
  },
  {
    title: "Development & Tools",
    number: "03",
    description: "Learning by building",
    items: [
      "Python",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "Creative Thinking",
    number: "04",
    description: "Connecting ideas",
    items: [
      "Creative problem-solving",
      "Visual communication",
      "Research & analysis",
      "Experimentation",
      "Digital experiences",
    ],
  },
];

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4v16m-7-7 7 7 7-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.8 14.7 9.3 21.2 12l-6.5 2.7L12 21.2l-2.7-6.5L2.8 12l6.5-2.7L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Portrait() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="portrait-wrap" aria-label="Portrait of Muhammad Shayan">
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />

      <div className="portrait-frame">
        {!imageFailed ? (
          /*
           * Add your real portrait to:
           * public/images/shayan.jpg
           *
           * Next.js serves files in public from the website root,
           * so the corresponding URL is /images/shayan.jpg.
           * If your image has a different extension, update this path.
           * This component never generates or substitutes your face.
           */
          <img
            src="/shayan.jpeg.jpeg"
            alt="Muhammad Shayan"
            className="portrait-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="portrait-placeholder">
            <div className="placeholder-grid" />
            <div className="placeholder-symbol">
              <span>S</span>
              <i />
            </div>
            <span className="placeholder-label">YOUR PORTRAIT</span>
            <span className="placeholder-instruction">
              Add your photo to
              <br />
              public/images/shayan.jpg
            </span>
          </div>
        )}
        <div className="portrait-shade" />
        <div className="portrait-index">
          <span>PERSONAL ARCHIVE</span>
          <span>01 / 01</span>
        </div>
      </div>

      <div className="portrait-crosshair crosshair-top" />
      <div className="portrait-crosshair crosshair-bottom" />

      <div className="floating-note floating-note-top">
        <span className="note-icon">
          <Sparkle size={15} />
        </span>
        <span>
          <small>CURRENTLY EXPLORING</small>
          <strong>AI & creative tech</strong>
        </span>
      </div>

      <div className="floating-note floating-note-bottom">
        <span className="status-dot" />
        <span>
          <small>MY APPROACH</small>
          <strong>Curiosity → Creation</strong>
        </span>
      </div>

      <span className="portrait-coordinate coordinate-top">
        32° 04&apos; N
      </span>
      <span className="portrait-coordinate coordinate-bottom">
        IDEAS INTO REALITY ↗
      </span>
    </div>
  );
}

function ProjectArtwork({ theme }: { theme: string }) {
  if (theme === "truth") {
    return (
      <div className="artwork artwork-truth" aria-hidden="true">
        <div className="truth-topline">
          <span>CLAIM / EVIDENCE</span>
          <span>FIG. 001</span>
        </div>
        <div className="truth-rings">
          <div className="truth-ring ring-one" />
          <div className="truth-ring ring-two" />
          <div className="truth-ring ring-three" />
          <div className="truth-core">
            <svg viewBox="0 0 48 48" fill="none">
              <circle
                cx="20"
                cy="20"
                r="12"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="m29 29 9 9M15 20h10m-5-5v10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="truth-node node-a" />
          <span className="truth-node node-b" />
          <span className="truth-node node-c" />
          <span className="truth-node node-d" />
        </div>
        <div className="truth-caption">
          <span>FOLLOW THE EVIDENCE</span>
          <span className="tiny-line" />
        </div>
      </div>
    );
  }

  if (theme === "media") {
    return (
      <div className="artwork artwork-media" aria-hidden="true">
        <div className="media-heading">
          <span>MEDIA / LANDSCAPE</span>
          <span>FIG. 002</span>
        </div>
        <div className="media-collage">
          <div className="media-paper paper-one">
            <span className="paper-number">A / 01</span>
            <div className="paper-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="media-paper paper-two">
            <span className="paper-number">B / 02</span>
            <div className="paper-circle">
              <span />
            </div>
            <div className="paper-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="media-center">
            <span>THE</span>
            <strong>STORY</strong>
            <span>BETWEEN SOURCES</span>
          </div>
          <div className="media-paper paper-three">
            <span className="paper-number">C / 03</span>
            <div className="paper-lines">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="media-footer">
          <span>OBSERVE</span>
          <span>COMPARE</span>
          <span>UNDERSTAND</span>
        </div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-clip" aria-hidden="true">
      <div className="clip-heading">
        <span>STORY / IN MOTION</span>
        <span>FIG. 003</span>
      </div>
      <div className="clip-editor">
        <div className="clip-preview">
          <div className="clip-sun" />
          <div className="clip-mountain mountain-one" />
          <div className="clip-mountain mountain-two" />
          <div className="clip-play">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m9 6 10 6-10 6V6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="preview-duration">00:18</span>
        </div>
        <div className="clip-timeline">
          <div className="timeline-label">
            <span>TRANSCRIPT / TIMELINE</span>
            <span>00:00 — 01:24</span>
          </div>
          <div className="waveform">
            {Array.from({ length: 44 }, (_, index) => (
              <i
                key={index}
                style={{
                  height: `${15 + ((index * 17 + 13) % 37)}%`,
                }}
              />
            ))}
          </div>
          <div className="timeline-track">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="clip-footer">
        <span>ONE STORY</span>
        <ArrowUpRight size={13} />
        <span>MANY FORMATS</span>
      </div>
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;450;500;550;600;650;700;750;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

        :root {
          --bg: #070a12;
          --bg-soft: #0b101c;
          --surface: #0d1421;
          --surface-light: #121c2d;
          --text: #f0f4fc;
          --muted: #919db1;
          --subtle: #58677d;
          --line: rgba(179, 202, 240, 0.12);
          --cyan: #73e7f4;
          --blue: #6b8cff;
          --violet: #a18aff;
          --mono: "DM Mono", monospace;
          --display: "Space Grotesk", sans-serif;
          --body: "DM Sans", sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
          background: var(--bg);
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body::selection,
        body *::selection {
          color: #070a12;
          background: var(--cyan);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font: inherit;
        }

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 5px;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .site-shell {
          position: relative;
          min-height: 100vh;
          overflow: clip;
          background:
            radial-gradient(
              ellipse at 84% 7%,
              rgba(46, 81, 153, 0.13),
              transparent 32rem
            ),
            radial-gradient(
              ellipse at 2% 43%,
              rgba(26, 99, 123, 0.07),
              transparent 27rem
            ),
            var(--bg);
        }

        .site-shell::before {
          position: absolute;
          z-index: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          pointer-events: none;
          opacity: 0.16;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.86' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E");
        }

        .site-shell > * {
          position: relative;
          z-index: 1;
        }

        .container {
          width: min(1160px, calc(100% - 64px));
          margin-inline: auto;
        }

        .mono {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .section {
          padding-block: 112px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--cyan);
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .section-heading::before {
          width: 22px;
          height: 1px;
          content: "";
          background: currentColor;
        }

        .section-title {
          margin: 20px 0 0;
          font-family: var(--display);
          font-size: clamp(36px, 5vw, 57px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .section-description {
          max-width: 500px;
          margin-top: 18px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .accent {
          color: var(--cyan);
        }

        .gradient-text {
          color: transparent;
          background: linear-gradient(
            105deg,
            #eaf7ff 2%,
            #7de8f5 48%,
            #a6a0ff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #b4c1d7;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 14px rgba(115, 231, 244, 0.65);
        }

        .site-nav {
          position: sticky;
          z-index: 50;
          top: 0;
          border-bottom: 1px solid rgba(179, 202, 240, 0.09);
          background: rgba(7, 10, 18, 0.83);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .nav-inner {
          display: flex;
          height: 76px;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .wordmark {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .wordmark-icon {
          display: grid;
          width: 37px;
          height: 37px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.42);
          border-radius: 11px;
          background: linear-gradient(
            140deg,
            rgba(115, 231, 244, 0.15),
            rgba(107, 140, 255, 0.09)
          );
          color: var(--cyan);
          font-family: var(--display);
          font-size: 18px;
          font-weight: 700;
        }

        .wordmark-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .wordmark-name {
          font-family: var(--display);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .wordmark-sub {
          color: var(--subtle);
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-left: auto;
        }

        .nav-links a {
          color: #a4afc1;
          font-size: 12px;
          transition: color 180ms ease;
        }

        .nav-links a:hover {
          color: var(--cyan);
        }

        .button {
          display: inline-flex;
          min-height: 47px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 19px;
          border: 1px solid transparent;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          border-color: rgba(115, 231, 244, 0.5);
          background: var(--cyan);
          color: #061018;
          box-shadow: 0 0 30px rgba(115, 231, 244, 0.07);
        }

        .button-primary:hover {
          background: #a2f4fc;
          box-shadow: 0 5px 30px rgba(115, 231, 244, 0.14);
        }

        .button-secondary {
          border-color: var(--line);
          background: rgba(255, 255, 255, 0.018);
          color: #e0e8f5;
        }

        .button-secondary:hover {
          border-color: rgba(115, 231, 244, 0.38);
          background: rgba(115, 231, 244, 0.05);
        }

        .nav-cta {
          min-height: 40px;
          padding-inline: 15px;
          font-size: 11px;
        }

        .mobile-menu-button {
          display: none;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          border-radius: 5px;
          background: transparent;
          color: var(--text);
          cursor: pointer;
        }

        .hero {
          position: relative;
          display: grid;
          min-height: 675px;
          grid-template-columns: 1.08fr 0.92fr;
          align-items: center;
          gap: 35px;
          padding-top: 78px;
          padding-bottom: 94px;
        }

        .hero-copy {
          position: relative;
          z-index: 3;
          padding-bottom: 15px;
        }

        .hero h1 {
          max-width: 720px;
          margin: 30px 0 0;
          font-family: var(--display);
          font-size: clamp(49px, 6.15vw, 79px);
          font-weight: 500;
          line-height: 0.99;
          letter-spacing: -0.075em;
        }

        .hero h1 .line {
          display: block;
        }

        .hero h1 .line-indent {
          padding-left: 0.4em;
        }

        .hero-subtitle {
          max-width: 455px;
          margin: 27px 0 0;
          color: #a7b2c4;
          font-size: 15px;
          line-height: 1.9;
        }

        .hero-subtitle strong {
          color: #e7edf8;
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 31px;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 45px;
          color: #738198;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .meta-line {
          width: 17px;
          height: 1px;
          background: var(--subtle);
        }

        .hero-visual {
          position: relative;
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: center;
        }

        .portrait-wrap {
          position: relative;
          width: min(100%, 410px);
          aspect-ratio: 0.82;
          margin: 8px auto 0;
        }

        .portrait-frame {
          position: absolute;
          z-index: 2;
          inset: 8% 9% 8% 9%;
          overflow: hidden;
          border: 1px solid rgba(150, 215, 255, 0.42);
          border-radius: 155px 155px 9px 9px;
          background:
            radial-gradient(
              ellipse at 50% 25%,
              rgba(71, 148, 199, 0.3),
              transparent 65%
            ),
            #101b2d;
          box-shadow:
            0 0 0 8px rgba(105, 171, 224, 0.025),
            0 0 0 9px rgba(115, 231, 244, 0.08),
            0 0 85px rgba(58, 127, 212, 0.11),
            inset 0 0 45px rgba(55, 131, 188, 0.13);
        }

        .portrait-frame::before {
          position: absolute;
          z-index: 2;
          inset: 0;
          border: 1px solid rgba(234, 246, 255, 0.1);
          border-radius: inherit;
          content: "";
          pointer-events: none;
        }

        .portrait-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }

        .portrait-shade {
          position: absolute;
          z-index: 1;
          inset: 30% 0 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            transparent 35%,
            rgba(7, 10, 18, 0.05) 60%,
            rgba(7, 10, 18, 0.65) 100%
          );
        }

        .portrait-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 37%,
              rgba(115, 231, 244, 0.16),
              transparent 28%
            ),
            linear-gradient(145deg, #13283d, #0a1221 70%);
        }

        .placeholder-grid {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image:
            linear-gradient(rgba(143, 196, 235, 0.11) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(143, 196, 235, 0.11) 1px,
              transparent 1px
            );
          background-size: 26px 26px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .placeholder-symbol {
          position: relative;
          display: grid;
          width: 128px;
          height: 128px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.43);
          border-radius: 50%;
          color: #b7f4fc;
          font-family: var(--display);
          font-size: 70px;
          font-weight: 400;
          box-shadow:
            0 0 45px rgba(115, 231, 244, 0.09),
            inset 0 0 35px rgba(115, 231, 244, 0.06);
        }

        .placeholder-symbol::before,
        .placeholder-symbol::after {
          position: absolute;
          inset: 9px;
          border: 1px dashed rgba(115, 231, 244, 0.23);
          border-radius: 50%;
          content: "";
        }

        .placeholder-symbol::after {
          inset: -11px;
          border-color: rgba(115, 231, 244, 0.15);
        }

        .placeholder-symbol i {
          position: absolute;
          top: 14px;
          right: 12px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 14px var(--cyan);
        }

        .placeholder-label {
          z-index: 1;
          margin-top: 29px;
          color: var(--cyan);
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.17em;
        }

        .placeholder-instruction {
          z-index: 1;
          margin-top: 12px;
          color: #98a9bf;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        .portrait-index {
          position: absolute;
          z-index: 3;
          right: 17px;
          bottom: 17px;
          left: 17px;
          display: flex;
          justify-content: space-between;
          gap: 8px;
          color: rgba(235, 244, 255, 0.67);
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.1em;
        }

        .portrait-orbit {
          position: absolute;
          border: 1px solid rgba(115, 231, 244, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .portrait-orbit-one {
          inset: 0 -3% 1% 0;
          transform: rotate(-18deg);
        }

        .portrait-orbit-two {
          inset: 7% -10% 7% 8%;
          border-color: rgba(133, 140, 255, 0.15);
          transform: rotate(22deg);
        }

        .portrait-crosshair {
          position: absolute;
          z-index: 3;
          width: 18px;
          height: 18px;
          border-color: var(--cyan);
          border-style: solid;
          opacity: 0.8;
        }

        .crosshair-top {
          top: 13%;
          left: 3%;
          border-width: 1px 0 0 1px;
        }

        .crosshair-bottom {
          right: 4%;
          bottom: 14%;
          border-width: 0 1px 1px 0;
        }

        .floating-note {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 15px;
          border: 1px solid rgba(170, 198, 238, 0.17);
          border-radius: 7px;
          background: rgba(12, 20, 34, 0.91);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(14px);
        }

        .floating-note-top {
          top: 23%;
          right: -4%;
        }

        .floating-note-bottom {
          bottom: 20%;
          left: -6%;
        }

        .note-icon {
          display: grid;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.2);
          border-radius: 5px;
          color: var(--cyan);
          background: rgba(115, 231, 244, 0.07);
        }

        .floating-note > span:last-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .floating-note small {
          color: #8290a7;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.08em;
        }

        .floating-note strong {
          color: #edf4ff;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 13px rgba(115, 231, 244, 0.5);
        }

        .portrait-coordinate {
          position: absolute;
          z-index: 3;
          color: #74869e;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        .coordinate-top {
          top: 3%;
          right: 8%;
        }

        .coordinate-bottom {
          bottom: 2%;
          left: 9%;
          color: var(--cyan);
        }

        .hero-bottom {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          padding-block: 23px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .hero-bottom-label {
          color: #8190a6;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-bottom-topics {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 12px;
          color: #c4cede;
          font-size: 11px;
        }

        .hero-bottom-topics span {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .hero-bottom-topics span:not(:last-child)::after {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--cyan);
          content: "";
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 95px;
          align-items: start;
        }

        .about-side-note {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 34px;
          padding-top: 22px;
          border-top: 1px solid var(--line);
        }

        .about-side-note p {
          max-width: 270px;
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
        }

        .about-content {
          padding-top: 36px;
        }

        .about-lead {
          margin: 0;
          font-family: var(--display);
          font-size: clamp(23px, 3vw, 34px);
          line-height: 1.5;
          letter-spacing: -0.045em;
        }

        .about-lead .muted {
          color: #66758b;
        }

        .about-body {
          margin-top: 24px;
          color: #9ca9bc;
          font-size: 14px;
          line-height: 2;
        }

        .about-body p {
          margin: 0 0 17px;
        }

        .about-signature {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-top: 15px;
          color: #dfe8f5;
          font-family: var(--display);
          font-size: 15px;
        }

        .signature-mark {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.3);
          border-radius: 50%;
          color: var(--cyan);
        }

        .journey-section {
          border-block: 1px solid var(--line);
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(62, 101, 180, 0.08),
              transparent 60%
            ),
            rgba(12, 17, 28, 0.43);
        }

        .journey-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 58px;
        }

        .journey-header .section-description {
          max-width: 330px;
          margin-bottom: 5px;
        }

        .journey-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .journey-grid::before {
          position: absolute;
          top: 28px;
          right: 16%;
          left: 16%;
          height: 1px;
          content: "";
          background: linear-gradient(
            90deg,
            rgba(115, 231, 244, 0.1),
            rgba(115, 231, 244, 0.4),
            rgba(161, 138, 255, 0.1)
          );
        }

        .journey-card {
          position: relative;
          padding: 0 24px 25px;
          border-right: 1px solid var(--line);
        }

        .journey-card:first-child {
          padding-left: 0;
        }

        .journey-card:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .journey-marker {
          position: relative;
          z-index: 1;
          display: grid;
          width: 56px;
          height: 56px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.28);
          border-radius: 50%;
          background: #0b111d;
          color: var(--cyan);
          font-family: var(--mono);
          font-size: 11px;
        }

        .journey-card:nth-child(2) .journey-marker {
          border-color: rgba(107, 140, 255, 0.45);
          color: #a8b8ff;
        }

        .journey-card:nth-child(3) .journey-marker {
          border-color: rgba(161, 138, 255, 0.45);
          color: #c5b5ff;
        }

        .journey-phase {
          display: block;
          margin-top: 33px;
          color: #7c8ca5;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .journey-card h3 {
          margin: 12px 0 0;
          font-family: var(--display);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .journey-card p {
          max-width: 300px;
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .journey-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 23px;
          color: #9eabc0;
          font-family: var(--mono);
          font-size: 9px;
        }

        .journey-status::before {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--cyan);
          content: "";
        }

        .skills-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 48px;
        }

        .skills-key {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          color: #8492a8;
          font-family: var(--mono);
          font-size: 9px;
        }

        .skills-key span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .key-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--cyan);
        }

        .key-dot.key-learning {
          border: 1px solid #8192b1;
          background: transparent;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .skill-card {
          padding: 25px 26px 27px;
          border: 1px solid var(--line);
          border-radius: 7px;
          background: linear-gradient(
            145deg,
            rgba(19, 29, 46, 0.65),
            rgba(11, 16, 27, 0.6)
          );
          transition:
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .skill-card:hover {
          transform: translateY(-3px);
          border-color: rgba(115, 231, 244, 0.22);
          background: linear-gradient(
            145deg,
            rgba(22, 37, 56, 0.8),
            rgba(11, 16, 27, 0.8)
          );
        }

        .skill-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .skill-number {
          color: #6e7e95;
          font-family: var(--mono);
          font-size: 10px;
        }

        .skill-card h3 {
          margin: 12px 0 0;
          font-family: var(--display);
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .skill-card .skill-subtitle {
          margin-top: 6px;
          color: #76869e;
          font-size: 11px;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 10px;
          border: 1px solid rgba(159, 182, 218, 0.13);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.018);
          color: #b6c3d6;
          font-size: 10px;
        }

        .skill-chip::before {
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #8192b1;
          content: "";
        }

        .skill-chip.learning::before {
          border: 1px solid var(--cyan);
          background: transparent;
        }

        .skill-footnote {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 23px;
          color: #7d8ba0;
          font-size: 11px;
          line-height: 1.8;
        }

        .skill-footnote svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--cyan);
        }

        .projects-section {
          border-block: 1px solid var(--line);
          background:
            radial-gradient(
              ellipse at 96% 32%,
              rgba(64, 83, 169, 0.09),
              transparent 36rem
            ),
            rgba(11, 16, 27, 0.45);
        }

        .projects-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 44px;
        }

        .projects-count {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          padding-bottom: 6px;
          color: #8090a8;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.09em;
          text-align: right;
        }

        .projects-count strong {
          color: var(--cyan);
          font-size: 19px;
          font-weight: 400;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .project-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(179, 202, 240, 0.13);
          border-radius: 7px;
          background: linear-gradient(
            180deg,
            rgba(16, 24, 39, 0.9),
            rgba(9, 14, 24, 0.95)
          );
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(115, 231, 244, 0.3);
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.18);
        }

        .project-card:nth-child(2):hover {
          border-color: rgba(161, 138, 255, 0.38);
        }

        .project-card:nth-child(3):hover {
          border-color: rgba(107, 140, 255, 0.38);
        }

        .project-artwork-wrap {
          position: relative;
          height: 225px;
          overflow: hidden;
          border-bottom: 1px solid var(--line);
          background: #0b1321;
        }

        .artwork {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .artwork-truth {
          background:
            radial-gradient(
              ellipse at 50% 55%,
              rgba(37, 132, 156, 0.18),
              transparent 57%
            ),
            #0a1622;
        }

        .artwork-media {
          background:
            radial-gradient(
              ellipse at 50% 50%,
              rgba(116, 95, 184, 0.16),
              transparent 68%
            ),
            #111020;
        }

        .artwork-clip {
          background:
            radial-gradient(
              ellipse at 50% 45%,
              rgba(53, 104, 195, 0.17),
              transparent 65%
            ),
            #0a1322;
        }

        .truth-topline,
        .media-heading,
        .clip-heading {
          position: absolute;
          top: 17px;
          right: 17px;
          left: 17px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #829bb1;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.09em;
        }

        .truth-rings {
          position: absolute;
          top: 49%;
          left: 50%;
          width: 170px;
          height: 145px;
          transform: translate(-50%, -50%);
        }

        .truth-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(115, 231, 244, 0.19);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-one {
          width: 65px;
          height: 65px;
        }

        .ring-two {
          width: 105px;
          height: 105px;
          border-style: dashed;
        }

        .ring-three {
          width: 145px;
          height: 145px;
          border-color: rgba(115, 231, 244, 0.1);
        }

        .truth-core {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.48);
          border-radius: 50%;
          background: #102332;
          color: var(--cyan);
          box-shadow: 0 0 28px rgba(115, 231, 244, 0.11);
          transform: translate(-50%, -50%);
        }

        .truth-core svg {
          width: 29px;
          height: 29px;
        }

        .truth-node {
          position: absolute;
          z-index: 2;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 11px rgba(115, 231, 244, 0.7);
        }

        .node-a {
          top: 0;
          left: 50%;
        }

        .node-b {
          top: 50%;
          right: 0;
        }

        .node-c {
          bottom: 4%;
          left: 23%;
        }

        .node-d {
          top: 24%;
          left: 14%;
          background: #9c9cff;
        }

        .truth-caption {
          position: absolute;
          right: 18px;
          bottom: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #829bb1;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.11em;
        }

        .tiny-line {
          height: 1px;
          flex: 1;
          background: rgba(115, 231, 244, 0.25);
        }

        .media-collage {
          position: absolute;
          inset: 48px 17px 36px;
        }

        .media-paper {
          position: absolute;
          width: 94px;
          height: 113px;
          padding: 10px;
          border: 1px solid rgba(183, 166, 255, 0.28);
          background: rgba(38, 32, 58, 0.85);
          box-shadow: 0 9px 22px rgba(0, 0, 0, 0.2);
        }

        .paper-one {
          top: 12px;
          left: 8%;
          transform: rotate(-9deg);
        }

        .paper-two {
          top: 4px;
          right: 8%;
          transform: rotate(8deg);
        }

        .paper-three {
          right: 15%;
          bottom: -17px;
          height: 80px;
          transform: rotate(4deg);
        }

        .paper-number {
          color: #c2b7ee;
          font-family: var(--mono);
          font-size: 7px;
        }

        .paper-lines {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 12px;
        }

        .paper-lines i {
          height: 2px;
          background: rgba(194, 183, 238, 0.25);
        }

        .paper-lines i:nth-child(2) {
          width: 75%;
        }

        .paper-lines i:nth-child(3) {
          width: 88%;
        }

        .paper-lines i:nth-child(4) {
          width: 58%;
        }

        .paper-circle {
          display: grid;
          width: 24px;
          height: 24px;
          margin-top: 8px;
          place-items: center;
          border: 1px solid rgba(194, 183, 238, 0.7);
          border-radius: 50%;
        }

        .paper-circle span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b8a7ff;
        }

        .media-center {
          position: absolute;
          z-index: 2;
          top: 47%;
          left: 50%;
          display: flex;
          width: 145px;
          height: 100px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: 1px solid rgba(205, 196, 255, 0.32);
          background: rgba(20, 18, 37, 0.94);
          box-shadow: 0 0 35px rgba(161, 138, 255, 0.12);
          transform: translate(-50%, -50%);
        }

        .media-center span {
          color: #a99ce6;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .media-center strong {
          color: #f0ebff;
          font-family: var(--display);
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.06em;
        }

        .media-footer {
          position: absolute;
          right: 17px;
          bottom: 15px;
          left: 17px;
          display: flex;
          justify-content: space-between;
          color: #a39abf;
          font-family: var(--mono);
          font-size: 7px;
          letter-spacing: 0.07em;
        }

        .clip-editor {
          position: absolute;
          inset: 48px 18px 38px;
        }

        .clip-preview {
          position: relative;
          height: 103px;
          overflow: hidden;
          border: 1px solid rgba(107, 140, 255, 0.28);
          background: linear-gradient(165deg, #213c65, #17263f 63%, #111c2c);
        }

        .clip-sun {
          position: absolute;
          top: 15px;
          right: 22%;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #9bc8ff;
          opacity: 0.8;
          box-shadow: 0 0 30px rgba(132, 177, 255, 0.4);
        }

        .clip-mountain {
          position: absolute;
          right: -5%;
          bottom: -1px;
          left: -5%;
          height: 64px;
          clip-path: polygon(0 100%, 25% 14%, 42% 58%, 65% 0, 100% 100%);
        }

        .mountain-one {
          background: linear-gradient(140deg, #2c5d8e, #233a68);
        }

        .mountain-two {
          height: 45px;
          background: linear-gradient(110deg, #193858, #101d35);
          clip-path: polygon(0 100%, 31% 25%, 53% 70%, 75% 14%, 100% 100%);
        }

        .clip-play {
          position: absolute;
          top: 50%;
          left: 50%;
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          background: rgba(8, 16, 29, 0.47);
          color: white;
          transform: translate(-50%, -50%);
        }

        .clip-play svg {
          width: 16px;
          height: 16px;
        }

        .preview-duration {
          position: absolute;
          right: 7px;
          bottom: 7px;
          padding: 3px 5px;
          border-radius: 2px;
          background: rgba(5, 9, 17, 0.75);
          color: white;
          font-family: var(--mono);
          font-size: 8px;
        }

        .clip-timeline {
          margin-top: 12px;
        }

        .timeline-label {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          color: #8395b1;
          font-family: var(--mono);
          font-size: 7px;
        }

        .waveform {
          display: flex;
          height: 25px;
          align-items: center;
          gap: 3px;
          margin-top: 6px;
          overflow: hidden;
        }

        .waveform i {
          width: 3px;
          flex: 1;
          max-width: 6px;
          border-radius: 2px;
          background: #6489e7;
          opacity: 0.8;
        }

        .timeline-track {
          display: flex;
          height: 6px;
          gap: 4px;
          margin-top: 5px;
        }

        .timeline-track i {
          flex: 1;
          border-radius: 2px;
          background: rgba(107, 140, 255, 0.4);
        }

        .timeline-track i:nth-child(2) {
          background: rgba(115, 231, 244, 0.58);
        }

        .clip-footer {
          position: absolute;
          right: 18px;
          bottom: 14px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #91a8d5;
          font-family: var(--mono);
          font-size: 7px;
          letter-spacing: 0.1em;
        }

        .clip-footer svg {
          margin-left: auto;
          color: var(--cyan);
        }

        .project-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px 21px 21px;
        }

        .project-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .project-number {
          color: #7b8ca5;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .project-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 7px;
          border: 1px solid rgba(115, 231, 244, 0.17);
          border-radius: 3px;
          color: #9edee8;
          font-family: var(--mono);
          font-size: 8px;
          white-space: nowrap;
        }

        .project-status::before {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--cyan);
          content: "";
        }

        .project-card:nth-child(2) .project-status {
          border-color: rgba(161, 138, 255, 0.2);
          color: #c5b7ff;
        }

        .project-card:nth-child(2) .project-status::before {
          background: #b5a0ff;
        }

        .project-card:nth-child(3) .project-status {
          border-color: rgba(107, 140, 255, 0.2);
          color: #a9bdff;
        }

        .project-card:nth-child(3) .project-status::before {
          background: #89a4ff;
        }

        .project-content h3 {
          margin: 18px 0 0;
          font-family: var(--display);
          font-size: 25px;
          font-weight: 500;
          letter-spacing: -0.055em;
        }

        .project-category {
          margin-top: 7px;
          color: #8595ad;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.06em;
        }

        .project-description {
          min-height: 126px;
          margin: 17px 0 0;
          color: #9ba8ba;
          font-size: 12px;
          line-height: 1.9;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 20px;
        }

        .project-tags span {
          padding: 6px 7px;
          border: 1px solid rgba(160, 181, 218, 0.1);
          border-radius: 3px;
          color: #8999b0;
          font-size: 9px;
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 24px;
          padding-top: 15px;
          border-top: 1px solid var(--line);
          color: #8190a7;
          font-family: var(--mono);
          font-size: 9px;
        }

        .project-footer a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #b9c8dd;
          transition: color 180ms ease;
        }

        .project-footer a:hover {
          color: var(--cyan);
        }

        .concept-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 23px;
          padding: 15px 17px;
          border: 1px solid rgba(161, 138, 255, 0.14);
          border-radius: 5px;
          background: rgba(161, 138, 255, 0.035);
          color: #929db4;
          font-size: 11px;
          line-height: 1.8;
        }

        .concept-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #b6a5ff;
        }

        .philosophy {
          position: relative;
          padding-block: 125px;
          border-bottom: 1px solid var(--line);
          background:
            radial-gradient(
              ellipse at 48% 55%,
              rgba(45, 102, 159, 0.12),
              transparent 62%
            );
        }

        .philosophy-inner {
          position: relative;
          max-width: 910px;
          margin-inline: auto;
          text-align: center;
        }

        .philosophy-mark {
          display: inline-grid;
          width: 45px;
          height: 45px;
          place-items: center;
          border: 1px solid rgba(115, 231, 244, 0.24);
          border-radius: 50%;
          color: var(--cyan);
          background: rgba(115, 231, 244, 0.04);
        }

        .philosophy-label {
          margin-top: 24px;
          color: #8d9ab0;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .philosophy blockquote {
          margin: 27px 0 0;
          font-family: var(--display);
          font-size: clamp(30px, 5.2vw, 59px);
          font-weight: 500;
          line-height: 1.24;
          letter-spacing: -0.06em;
        }

        .philosophy blockquote span {
          color: var(--cyan);
        }

        .philosophy-note {
          max-width: 430px;
          margin: 23px auto 0;
          color: #8997ac;
          font-size: 13px;
          line-height: 1.9;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 80px;
          align-items: start;
        }

        .contact-title {
          max-width: 600px;
          margin: 22px 0 0;
          font-family: var(--display);
          font-size: clamp(42px, 5.5vw, 66px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.07em;
        }

        .contact-description {
          max-width: 420px;
          margin-top: 22px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .contact-note {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: #a7b6cb;
          font-size: 11px;
        }

        .contact-note svg {
          color: var(--cyan);
        }

        .contact-panel {
          padding: 27px;
          border: 1px solid var(--line);
          border-radius: 7px;
          background: linear-gradient(
            145deg,
            rgba(18, 29, 46, 0.74),
            rgba(10, 15, 25, 0.78)
          );
        }

        .contact-panel-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-bottom: 19px;
          border-bottom: 1px solid var(--line);
          color: #8d9db4;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.11em;
        }

        .contact-panel-label span:last-child {
          color: var(--cyan);
        }

        .contact-link {
          display: flex;
          min-height: 74px;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid var(--line);
          transition: padding 180ms ease;
        }

        .contact-link:last-of-type {
          border-bottom: 0;
        }

        .contact-link:hover {
          padding-inline: 4px;
        }

        .contact-icon {
          display: grid;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--line);
          border-radius: 5px;
          color: #a7bdd5;
          background: rgba(255, 255, 255, 0.025);
        }

        .contact-link:hover .contact-icon {
          border-color: rgba(115, 231, 244, 0.3);
          color: var(--cyan);
        }

        .contact-link-text {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 5px;
        }

        .contact-link-text small {
          color: #7f8ea5;
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .contact-link-text strong {
          overflow-wrap: anywhere;
          color: #e0e8f5;
          font-size: 12px;
          font-weight: 500;
        }

        .contact-link > svg {
          flex-shrink: 0;
          color: #71819a;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .contact-link:hover > svg {
          color: var(--cyan);
          transform: translate(2px, -2px);
        }

        .contact-placeholder {
          color: #8796ac !important;
          font-style: italic;
        }

        .contact-panel-foot {
          margin: 17px 0 0;
          color: #74839a;
          font-size: 10px;
          line-height: 1.8;
        }

        .footer {
          border-top: 1px solid var(--line);
          background: rgba(6, 9, 15, 0.65);
        }

        .footer-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding-block: 27px;
        }

        .footer-tagline {
          margin-top: 7px;
          color: #7e8da3;
          font-size: 10px;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          color: #9aa7ba;
          font-size: 11px;
        }

        .footer-links a {
          transition: color 180ms ease;
        }

        .footer-links a:hover {
          color: var(--cyan);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-block: 15px 20px;
          border-top: 1px solid rgba(179, 202, 240, 0.07);
          color: #66758a;
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.07em;
        }

        .footer-bottom span:last-child {
          text-align: right;
        }

        @media (min-width: 1500px) {
          .hero {
            min-height: 750px;
          }
        }

        @media (max-width: 1000px) {
          .container {
            width: min(100% - 48px, 860px);
          }

          .hero {
            min-height: 620px;
            grid-template-columns: 1fr 0.85fr;
            gap: 18px;
            padding-top: 65px;
          }

          .hero h1 {
            font-size: clamp(48px, 7vw, 68px);
          }

          .portrait-wrap {
            width: 100%;
          }

          .floating-note-top {
            right: -3%;
          }

          .floating-note-bottom {
            left: -5%;
          }

          .about-grid {
            gap: 50px;
          }

          .project-grid {
            gap: 12px;
          }

          .project-content {
            padding-inline: 15px;
          }

          .project-artwork-wrap {
            height: 205px;
          }

          .project-description {
            min-height: 155px;
          }

          .contact-grid {
            gap: 45px;
          }
        }

        @media (max-width: 760px) {
          html {
            scroll-padding-top: 78px;
          }

          .container {
            width: calc(100% - 38px);
          }

          .section {
            padding-block: 78px;
          }

          .nav-inner {
            height: 68px;
          }

          .nav-links {
            position: absolute;
            top: calc(100% + 1px);
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            margin: 0;
            padding: 10px 19px 18px;
            border-bottom: 1px solid var(--line);
            background: rgba(7, 10, 18, 0.98);
          }

          .nav-links.is-open {
            display: flex;
            flex-direction: column;
          }

          .nav-links a {
            padding-block: 14px;
            border-bottom: 1px solid rgba(179, 202, 240, 0.07);
            font-size: 13px;
          }

          .nav-links a:last-child {
            border-bottom: 0;
          }

          .nav-cta {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .hero {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 25px;
            padding-top: 66px;
            padding-bottom: 48px;
          }

          .hero-copy {
            padding-bottom: 0;
          }

          .hero h1 {
            max-width: 630px;
            margin-top: 25px;
            font-size: clamp(49px, 10.5vw, 77px);
          }

          .hero-subtitle {
            max-width: 520px;
            margin-top: 22px;
            font-size: 14px;
          }

          .hero-meta {
            margin-top: 27px;
          }

          .hero-visual {
            width: 100%;
            max-width: 470px;
            margin: 0 auto;
          }

          .portrait-wrap {
            width: min(100%, 365px);
            margin-top: 10px;
          }

          .floating-note-top {
            top: 21%;
            right: -2%;
          }

          .floating-note-bottom {
            bottom: 19%;
            left: -2%;
          }

          .hero-bottom {
            grid-template-columns: 1fr;
            gap: 14px;
            padding-block: 19px;
          }

          .hero-bottom-topics {
            justify-content: flex-start;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .about-side-note {
            margin-top: 22px;
          }

          .about-side-note p {
            max-width: 420px;
          }

          .about-content {
            padding-top: 8px;
          }

          .journey-header,
          .skills-header,
          .projects-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .journey-header .section-description {
            margin-top: 0;
          }

          .journey-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .journey-grid::before {
            top: 28px;
            bottom: 28px;
            left: 27px;
            width: 1px;
            height: auto;
            background: linear-gradient(
              180deg,
              rgba(115, 231, 244, 0.45),
              rgba(161, 138, 255, 0.18)
            );
          }

          .journey-card,
          .journey-card:first-child,
          .journey-card:last-child {
            display: grid;
            grid-template-columns: 56px minmax(0, 1fr);
            column-gap: 20px;
            padding: 0 0 10px;
            border: 0;
          }

          .journey-marker {
            grid-row: 1 / span 4;
          }

          .journey-phase {
            margin-top: 4px;
          }

          .journey-card h3 {
            margin-top: 8px;
          }

          .journey-card p {
            margin-top: 9px;
          }

          .journey-status {
            margin-top: 13px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 22px;
          }

          .projects-count {
            align-items: flex-start;
            text-align: left;
          }

          .project-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .project-artwork-wrap {
            height: 235px;
          }

          .project-content {
            padding: 22px;
          }

          .project-description {
            min-height: auto;
          }

          .project-tags {
            margin-top: 17px;
          }

          .philosophy {
            padding-block: 85px;
          }

          .philosophy blockquote {
            font-size: clamp(32px, 7.4vw, 48px);
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .contact-title {
            font-size: clamp(45px, 10vw, 65px);
          }

          .contact-panel {
            padding: 22px;
          }

          .footer-main {
            align-items: flex-start;
            flex-direction: column;
            gap: 22px;
          }

          .footer-links {
            gap: 17px;
          }
        }

        @media (max-width: 420px) {
          .container {
            width: calc(100% - 30px);
          }

          .wordmark-sub {
            font-size: 7px;
          }

          .hero h1 {
            font-size: clamp(43px, 11vw, 52px);
          }

          .hero-actions {
            align-items: stretch;
          }

          .hero-actions .button {
            flex: 1;
            padding-inline: 12px;
            font-size: 11px;
          }

          .portrait-wrap {
            width: calc(100% - 18px);
          }

          .floating-note {
            gap: 8px;
            padding: 10px;
          }

          .floating-note-top {
            right: -3%;
          }

          .floating-note-bottom {
            left: -3%;
          }

          .floating-note small {
            font-size: 7px;
          }

          .floating-note strong {
            font-size: 10px;
          }

          .hero-meta {
            gap: 12px;
            font-size: 8px;
          }

          .hero-bottom-topics {
            gap: 8px;
            font-size: 10px;
          }

          .hero-bottom-topics span {
            gap: 8px;
          }

          .skill-card {
            padding: 19px;
          }

          .contact-panel {
            padding: 17px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 9px;
          }

          .footer-bottom span:last-child {
            text-align: left;
          }
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

      <header className="site-nav">
        <nav className="container nav-inner" aria-label="Main navigation">
          <a
            className="wordmark"
            href="#home"
            aria-label="Muhammad Shayan — home"
            onClick={closeMenu}
          >
            <span className="wordmark-icon">S.</span>
            <span className="wordmark-text">
              <span className="wordmark-name">Muhammad Shayan</span>
              <span className="wordmark-sub">Media × Intelligence</span>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#journey" onClick={closeMenu}>
              Journey
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <a href="#contact" className="button button-primary nav-cta">
            Let&apos;s connect <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
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
                width="19"
                height="19"
                viewBox="0 0 24 24"
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
          <span id="mobile-navigation" className="sr-only">
            {menuOpen ? "Navigation menu open" : "Navigation menu closed"}
          </span>
        </nav>
      </header>

      <section id="home" className="container hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A creative mind entering the world of AI
          </div>

          <h1>
            <span className="line">Exploring the</span>
            <span className="line line-indent gradient-text">future of</span>
            <span className="line">media &amp; AI.</span>
          </h1>

          <p className="hero-subtitle">
            I&apos;m <strong>Muhammad Shayan</strong> — a Media Studies student
            learning to turn creative ideas into useful technology through AI
            agents, thoughtful research, and hands-on building.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <ArrowUpRight size={15} />
            </a>
            <a href="#contact" className="button button-secondary">
              Let&apos;s connect <ArrowDown size={14} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="meta-line" />
              Based in Pakistan
            </span>
            <span>
              <span className="meta-line" />
              Learning by building
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <Portrait />
        </div>
      </section>

      <div className="container hero-bottom">
        <span className="hero-bottom-label">Where my interests meet</span>
        <div className="hero-bottom-topics">
          <span>Media &amp; storytelling</span>
          <span>Artificial intelligence</span>
          <span>Creative technology</span>
        </div>
      </div>

      <section id="about" className="container section">
        <div className="about-grid">
          <div>
            <div className="section-heading">A little about me</div>
            <h2 className="section-title">
              Creative roots.
              <br />
              <span className="gradient-text">Technical curiosity.</span>
            </h2>
            <div className="about-side-note">
              <span className="mono accent">CURRENT CHAPTER / 001</span>
              <p>
                BS Media Studies
                <br />
                University of Sargodha
                <br />
                Pakistan
              </p>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I&apos;m interested in what happens when{" "}
              <span className="accent">human creativity</span> meets{" "}
              <span className="accent">intelligent technology.</span>
            </p>
            <div className="about-body">
              <p>
                My journey begins with Media Studies at the University of
                Sargodha, where I&apos;m exploring how stories are told, how
                audiences connect with information, and how digital
                communication shapes the way we understand the world.
              </p>
              <p>
                Alongside my studies, I&apos;m learning programming, exploring
                artificial intelligence, and discovering how AI agents can help
                people research, create, and solve everyday problems. I&apos;m
                especially drawn to ideas that make information easier to
                understand and creative work more accessible.
              </p>
              <p>
                I learn by experimenting, building small projects, documenting
                what I discover, and improving one step at a time. This
                portfolio is part introduction, part work in progress — a place
                to share ideas as they develop into real tools.
              </p>
            </div>
            <div className="about-signature">
              <span className="signature-mark">
                <Sparkle size={16} />
              </span>
              Always learning. Always building.
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section section">
        <div className="container">
          <div className="journey-header">
            <div>
              <div className="section-heading">The path so far</div>
              <h2 className="section-title">
                A journey in <span className="gradient-text">progress.</span>
              </h2>
            </div>
            <p className="section-description">
              Not a list of finished milestones. Three connected areas I&apos;m
              exploring as I grow from media student to practical AI builder.
            </p>
          </div>

          <div className="journey-grid">
            <article className="journey-card">
              <div className="journey-marker">01</div>
              <span className="journey-phase">The foundation</span>
              <h3>Media &amp; Communication</h3>
              <p>
                Exploring storytelling, audiences, digital communication, and
                the role of media in shaping information and ideas.
              </p>
              <span className="journey-status">Academic foundation</span>
            </article>

            <article className="journey-card">
              <div className="journey-marker">02</div>
              <span className="journey-phase">The exploration</span>
              <h3>Discovering AI</h3>
              <p>
                Learning programming fundamentals, understanding AI concepts,
                and experimenting with agent-based workflows and modern tools.
              </p>
              <span className="journey-status">Actively learning</span>
            </article>

            <article className="journey-card">
              <div className="journey-marker">03</div>
              <span className="journey-phase">The next step</span>
              <h3>Building &amp; Sharing</h3>
              <p>
                Turning ideas into practical prototypes, learning from each
                iteration, and working toward sharing projects and code on
                GitHub.
              </p>
              <span className="journey-status">Growing through practice</span>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="container section">
        <div className="skills-header">
          <div>
            <div className="section-heading">Tools &amp; interests</div>
            <h2 className="section-title">
              Building my <span className="gradient-text">toolkit.</span>
            </h2>
            <p className="section-description">
              A mix of my academic interests and technologies I&apos;m
              exploring. These labels describe learning areas, not claims of
              advanced proficiency.
            </p>
          </div>
          <div className="skills-key" aria-label="Skill badge legend">
            <span>
              <i className="key-dot" />
              Area of interest
            </span>
            <span>
              <i className="key-dot key-learning" />
              Learning / exploring
            </span>
          </div>
        </div>

        <div className="skills-grid">
          {learningGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <div>
                  <span className="skill-number">{group.number} / 04</span>
                  <h3>{group.title}</h3>
                  <div className="skill-subtitle">{group.description}</div>
                </div>
                <Sparkle size={17} />
              </div>
              <div className="skill-chips">
                {group.items.map((item) => {
                  const isLearning = [
                    "Python",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Git & GitHub",
                    "Artificial intelligence",
                    "AI agents",
                    "Agent workflows",
                    "AI-powered applications",
                    "Prompt design",
                  ].includes(item);

                  return (
                    <span
                      key={item}
                      className={`skill-chip ${isLearning ? "learning" : ""}`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="skill-footnote">
          <Sparkle size={15} />
          <span>
            My toolkit will evolve as I practise, build projects, and gain
            experience. I aim to show progress honestly rather than overstate
            what I know.
          </span>
        </div>
      </section>

      <section id="projects" className="projects-section section">
        <div className="container">
          <div className="projects-heading">
            <div>
              <div className="section-heading">Ideas taking shape</div>
              <h2 className="section-title">
                A lab for <span className="gradient-text">what&apos;s next.</span>
              </h2>
              <p className="section-description">
                Three project concepts at the intersection of AI, media, and
                useful digital tools. Each starts with a problem worth
                exploring.
              </p>
            </div>
            <div className="projects-count">
              <strong>03</strong>
              <span>PROJECT CONCEPTS</span>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-artwork-wrap">
                  <ProjectArtwork theme={project.theme} />
                </div>

                <div className="project-content">
                  <div className="project-topline">
                    <span className="project-number">
                      PROJECT / {project.number}
                    </span>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <div className="project-category">{project.category}</div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>EARLY-STAGE IDEA</span>
                    {/*
                     * Replace this placeholder with the real repository URL
                     * once the project is published. Until then, do not imply
                     * a repository or working demo already exists.
                     */}
                    <a
                      href="#contact"
                      aria-label={`Ask about the ${project.name} concept`}
                    >
                      Discuss idea <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="concept-note">
            <Sparkle size={15} />
            <span>
              <strong>Transparency matters.</strong> These are project concepts,
              not claims of completed software. Repository and demo links will
              be added when real implementations are ready to share.
            </span>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container philosophy-inner">
          <div className="philosophy-mark">
            <Sparkle size={21} />
          </div>
          <div className="philosophy-label">A principle I build around</div>
          <blockquote>
            I believe technology becomes more meaningful when it helps people{" "}
            <span>understand, communicate, and create.</span>
          </blockquote>
          <p className="philosophy-note">
            The goal isn&apos;t to build technology just because it&apos;s new.
            It&apos;s to explore how thoughtful tools can make real human
            experiences a little better.
          </p>
        </div>
      </section>

      <section id="contact" className="container section">
        <div className="contact-grid">
          <div>
            <div className="section-heading">Open to ideas &amp; conversations</div>
            <h2 className="contact-title">
              Have an idea
              <br />
              worth <span className="gradient-text">building?</span>
            </h2>
            <p className="contact-description">
              I&apos;m interested in conversations about AI, digital media,
              creative experiments, and useful projects. If an idea connects
              those worlds, I&apos;d love to hear about it.
            </p>
            <div className="contact-note">
              <Sparkle size={15} />
              Good ideas often start with a conversation.
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-panel-label">
              <span>FIND ME AROUND THE WEB</span>
              <span>03 CHANNELS</span>
            </div>

            {/*
             * Replace the placeholder href values below with your real
             * email address and profile URLs before publishing.
             * No contact form is shown because no delivery backend is configured.
             */}
            <a
              className="contact-link"
              href="mailto:your.email@example.com"
              onClick={(event) => {
                event.preventDefault();
                window.location.href = "mailto:your.email@example.com";
              }}
            >
              <span className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
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
              </span>
              <span className="contact-link-text">
                <small>Email</small>
                <strong className="contact-placeholder">
                  your.email@example.com
                </strong>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              className="contact-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 19c-4.3 1.3-4.3-2.4-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7.1 0C5 1.2 3.8 1.6 3.8 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <small>GitHub</small>
                <strong className="contact-placeholder">
                  Add your GitHub profile
                </strong>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8.5V19M5 5.2v.1M10 19v-6a3 3 0 0 1 6 0v6m0-6a3 3 0 0 1 6 0v6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle cx="5" cy="5" r="1.3" fill="currentColor" />
                  <path
                    d="M10 9v10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <small>LinkedIn</small>
                <strong className="contact-placeholder">
                  Add your LinkedIn profile
                </strong>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <p className="contact-panel-foot">
              Before publishing, update the email address and profile links to
              your actual contact details.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <a className="wordmark" href="#home">
              <span className="wordmark-icon">S.</span>
              <span className="wordmark-text">
                <span className="wordmark-name">Muhammad Shayan</span>
                <span className="footer-tagline">
                  Creative thinking. Emerging intelligence.
                </span>
              </span>
            </a>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} MUHAMMAD SHAYAN
            </span>
            <span>MADE WITH CURIOSITY · BASED IN PAKISTAN</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
