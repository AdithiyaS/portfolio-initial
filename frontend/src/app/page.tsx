"use client";
import { useState, useEffect, useRef } from "react";
import { portfolio } from "@/lib/data";

/* ── tiny helpers ─────────────────────────────── */
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ── animated counter ────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(value / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(start);
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── typewriter ──────────────────────────────── */
function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length + 1));
        if (displayed.length + 1 === word.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setDisplayed(word.slice(0, displayed.length - 1));
        if (displayed.length === 0) { setDeleting(false); setIndex(i => i + 1); }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-accent font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

/* ── nav ─────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm text-accent tracking-widest">AS</span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted hover:text-paper transition-colors duration-200 font-mono tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${portfolio.email}`}
          className="text-sm border border-accent text-accent px-4 py-1.5 font-mono hover:bg-accent hover:text-ink transition-all duration-200"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}

/* ── section wrapper ─────────────────────────── */
function Section({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-accent text-sm tracking-widest uppercase">{children}</span>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}

/* ── hero ────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#f4f1eb 1px, transparent 1px), linear-gradient(90deg, #f4f1eb 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      {/* accent orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #e8541a 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Available for opportunities
        </p>

        <h1 className="font-display text-6xl md:text-8xl leading-none mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Adithiya<br />
          <span className="text-gradient">Srinivasan</span>
        </h1>

        <div className="text-xl md:text-2xl text-muted mb-8 font-body font-light opacity-0 animate-fade-up" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
          I build{" "}
          <Typewriter words={[
            "scalable APIs",
            "cloud microservices",
            "real-time systems",
            "3D spatial tools",
            "enterprise backends",
          ]} />
        </div>

        <p className="max-w-xl text-muted leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
          {portfolio.tagline}
        </p>

        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}>
          <a href="#projects" className="bg-accent text-ink px-8 py-3 font-mono text-sm tracking-wide hover:bg-paper transition-colors duration-200">
            View Work
          </a>
          <a href="#contact" className="border border-line text-paper px-8 py-3 font-mono text-sm tracking-wide hover:border-accent transition-colors duration-200">
            Get in Touch
          </a>
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer"
            className="border border-line text-muted px-8 py-3 font-mono text-sm tracking-wide hover:text-paper hover:border-accent transition-colors duration-200">
            GitHub ↗
          </a>
        </div>

        {/* stats row */}
        <div className="mt-20 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          {[
            { label: "Years Experience", value: 3, suffix: "+" },
            { label: "Users Served", value: 100, suffix: "K+" },
            { label: "Efficiency Gains", value: 40, suffix: "%" },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-3xl text-accent">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-mono text-xs text-muted mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}

/* ── about ───────────────────────────────────── */
function About() {
  return (
    <Section id="about" className="border-t border-line">
      <SectionLabel>About</SectionLabel>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl mb-6">
            Engineer by craft,<br />
            <span className="italic text-muted">researcher by curiosity.</span>
          </h2>
          <p className="text-muted leading-relaxed">{portfolio.about}</p>
        </div>
        <div className="space-y-4">
          {[
            { label: "Location", value: portfolio.location },
            { label: "Education", value: "M.S. Computer Science, CSUSB" },
            { label: "Certification", value: "SAFe 5.1 Practitioner" },
            { label: "Email", value: portfolio.email },
          ].map(item => (
            <div key={item.label} className="flex justify-between items-start border-b border-line pb-4">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">{item.label}</span>
              <span className="text-sm text-paper text-right max-w-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── experience ──────────────────────────────── */
function Experience() {
  const [active, setActive] = useState(0);
  const exp = portfolio.experience;

  return (
    <Section id="experience" className="border-t border-line">
      <SectionLabel>Experience</SectionLabel>
      <div className="grid md:grid-cols-3 gap-0">
        {/* tab list */}
        <div className="flex md:flex-col border-b md:border-b-0 md:border-r border-line overflow-x-auto md:overflow-visible">
          {exp.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "text-left px-6 py-4 font-mono text-sm transition-all duration-200 whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                active === i
                  ? "border-accent text-accent bg-subtle"
                  : "border-transparent text-muted hover:text-paper hover:bg-subtle/50"
              )}
            >
              <div>{e.company.split(",")[0]}</div>
              <div className="text-xs opacity-60 mt-0.5">{e.period.split("—")[0].trim()}</div>
            </button>
          ))}
        </div>

        {/* content */}
        <div className="md:col-span-2 px-0 md:px-10 pt-8 md:pt-0">
          <div className="mb-1 text-sm text-muted font-mono">{exp[active].period}</div>
          <h3 className="font-display text-2xl mb-1">{exp[active].role}</h3>
          <div className="text-accent font-mono text-sm mb-6">{exp[active].company}</div>
          <ul className="space-y-3">
            {exp[active].highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ── projects ────────────────────────────────── */
function Projects() {
  return (
    <Section id="projects" className="border-t border-line">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid md:grid-cols-3 gap-px bg-line">
        {portfolio.projects.map((p, i) => (
          <div key={i} className="bg-ink p-8 group hover:bg-subtle transition-colors duration-300">
            <div className="font-mono text-xs text-accent mb-4 tracking-widest">{String(i + 1).padStart(2, "0")}</div>
            <div className="inline-block bg-accent/10 text-accent font-mono text-xs px-3 py-1 mb-4">
              {p.highlight}
            </div>
            <h3 className="font-display text-xl mb-1">{p.title}</h3>
            <p className="text-muted text-xs font-mono mb-4">{p.subtitle}</p>
            <p className="text-muted text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="font-mono text-xs text-muted border border-line px-2 py-0.5 group-hover:border-accent/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── skills ──────────────────────────────────── */
function Skills() {
  return (
    <Section id="skills" className="border-t border-line">
      <SectionLabel>Skills</SectionLabel>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(portfolio.skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill} className="font-mono text-sm text-paper border border-line px-3 py-1 hover:border-accent hover:text-accent transition-all duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── education ───────────────────────────────── */
function Education() {
  return (
    <Section id="education" className="border-t border-line">
      <SectionLabel>Education</SectionLabel>
      <div className="space-y-8">
        {portfolio.education.map((e, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-4 border-b border-line pb-8">
            <div className="font-mono text-xs text-muted">{e.period}</div>
            <div className="md:col-span-2">
              <div className="font-display text-xl mb-1">{e.degree}</div>
              <div className="text-accent font-mono text-sm mb-2">{e.institution}</div>
              <div className="text-muted text-sm mb-3">GPA: <span className="text-paper">{e.gpa}</span></div>
              {e.courses.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {e.courses.map(c => (
                    <span key={c} className="font-mono text-xs text-muted border border-line px-2 py-0.5">{c}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── contact ─────────────────────────────────── */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="border-t border-line">
      <SectionLabel>Contact</SectionLabel>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl mb-6">
            Let&apos;s build<br />
            <span className="italic text-muted">something together.</span>
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Open to full-time roles.
          </p>
          <div className="space-y-3">
            {[
              { label: "Email", href: `mailto:${portfolio.email}`, value: portfolio.email },
              { label: "Phone", href: `tel:${portfolio.phone}`, value: portfolio.phone },
              { label: "LinkedIn", href: portfolio.linkedin, value: "linkedin.com/in/adithiya-srinivasan" },
              { label: "GitHub", href: portfolio.github, value: "github.com/AdithiyaS" },
            ].map(item => (
              <div key={item.label} className="flex gap-4">
                <span className="font-mono text-xs text-muted w-16 mt-0.5">{item.label}</span>
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-paper hover:text-accent transition-colors font-mono">
                  {item.value} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map(f => (
            <div key={f.id}>
              <label htmlFor={f.id} className="font-mono text-xs text-muted tracking-widest uppercase block mb-2">{f.label}</label>
              <input
                id={f.id}
                type={f.type}
                required
                value={form[f.id as "name" | "email"]}
                onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                className="w-full bg-subtle border border-line px-4 py-3 text-paper text-sm font-mono focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="font-mono text-xs text-muted tracking-widest uppercase block mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              value={form.message}
              onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
              className="w-full bg-subtle border border-line px-4 py-3 text-paper text-sm font-mono focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full bg-accent text-ink py-3 font-mono text-sm tracking-wide hover:bg-paper transition-colors duration-200 disabled:opacity-50"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent ✓"}
            {status === "error" && "Failed — Retry"}
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ── footer ──────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted">© 2025 Adithiya Srinivasan</span>
        <span className="font-mono text-xs text-muted">
          Built with Next.js · TypeScript · FastAPI · Docker
        </span>
      </div>
    </footer>
  );
}

/* ── page ────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
