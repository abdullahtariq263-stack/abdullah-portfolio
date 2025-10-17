"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Download,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

/* ========= Small UI helpers ========= */
const SectionHeader = ({
  kicker,
  title,
  blurb,
}: { kicker: string; title: string; blurb?: string }) => (
  <div className="max-w-3xl mx-auto text-center mb-10">
    <p className="uppercase tracking-widest text-sm text-indigo-500 font-semibold">{kicker}</p>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
    {blurb && <p className="text-slate-600 mt-3">{blurb}</p>}
  </div>
);

const Card = ({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl p-6 shadow-sm border border-slate-200 bg-white ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
    {children}
  </span>
);

/* ========= Your data (edit anytime) ========= */
const PROFILE = {
  name: "Abdullah Tariq",
  headline: "Aspiring Cloud Engineer • Data/AI Projects • Melbourne, Australia",
  summary:
    "Master of Information Systems (Deakin). Hands-on with analytics, ML, cloud fundamentals and CRO mindset. I ship polished deliverables — dashboards, models, and strategies that move the needle.",
  location: "Melbourne, Australia",
  email: "abdullahtariq263@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdu11aaah/",
  github: "https://github.com/abdullah-tariq",
  resumeUrl: "/resume.pdf",
  photo: "/profile.jpg",
};

const SKILLS = [
  "Python","SQL","Power BI","Excel","R","Scikit-Learn","Altair/Matplotlib",
  "Azure (fundamentals)","AWS basics","Git","Power Query","DAX","ServiceNow",
  "TechnologyOne","Prompt Engineering",
];

const PROJECTS = [
  {
    title: "Data2Intel – Early Writing Risk Prediction",
    tags: ["Classification", "Clustering", "Education Analytics"],
    blurb:
      "Built models to predict Year-3 writing at-risk students using a 2,000-student dataset. Delivered insights, guidance, and two predictive models plus a clustering approach.",
  },
  {
    title: "RasoiRaga – Sustainability & Operations Dashboards",
    tags: ["Power BI", "Carbon Footprint", "SME"],
    blurb:
      "End-to-end BI dashboards for a catering business: carbon insights, order profitability, supplier analysis, stakeholder map, and TOWS recommendations.",
  },
  {
    title: "PQC Gaming – Player Analytics & ML",
    tags: ["EDA", "ML", "Feature Engineering"],
    blurb:
      "Explored 24,813-game dataset; correlation studies; prediction baselines; interactive visuals; reproducible notebooks and pipeline.",
  },
  {
    title: "Bank Australia – Digital Transformation Roadmap",
    tags: ["Consulting", "Ethical Banking", "Strategy"],
    blurb:
      "Recommendations for emerging tech with an implementation plan aligned to COBIT 2019 in an Australian context.",
  },
];

const EXPERIENCE = [
  {
    role: "Amazon — Data Analytics & Operations Associate",
    period: "2025 — Present",
    points: [
      "Use operational data to identify inefficiencies and suggest process improvements.",
      "Track throughput metrics; highlight trends for shift leads.",
      "Support internal teams with data-driven reporting for workflow decisions.",
    ],
  },
  {
    role: "Customer & Data Centre Support (Qatar)",
    period: "2017 — 2019",
    points: ["Service quality, incident response, stakeholder communication."],
  },
];

const EDUCATION = [
  {
    title: "Master of Information Systems (M722)",
    org: "Deakin University, Melbourne",
    period: "2024 — 2026 (in progress)",
  },
];

/* ========= Page ========= */
export default function Page() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src={PROFILE.photo}
              alt="Abdullah Tariq"
              width={36}
              height={36}
              className="rounded-full ring-2 ring-indigo-200"
              priority
            />
            <span className="font-semibold">
              Abdullah <span className="text-indigo-600">Tariq</span>
            </span>
          </a>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>

          <a
            href={PROFILE.resumeUrl}
            download="Abdullah-Tariq-Resume.pdf"
            className="inline-flex items-center gap-2 text-sm bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
          >
            <Download size={16} /> Download Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 text-indigo-600 font-medium">
              <Sparkles size={18} /> Available for internships & graduate roles
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
              {PROFILE.name}
            </h1>
            <p className="text-xl mt-3 text-slate-700">{PROFILE.headline}</p>
            <p className="mt-4 text-slate-600 max-w-2xl">{PROFILE.summary}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-indigo-700">
                See Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 rounded-xl hover:border-slate-400">
                Contact Me <Mail size={16} />
              </a>
            </div>
            <div className="flex gap-4 mt-6 text-slate-600">
              <div className="inline-flex items-center gap-2"><MapPin size={16} /> {PROFILE.location}</div>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={PROFILE.linkedin}><Linkedin size={16} /> LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={PROFILE.github}><Github size={16} /> GitHub</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Card className="relative bg-white/80">
              <div className="absolute -top-6 -right-6 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">Open to Work</div>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-200 to-indigo-100 flex items-center justify-center">
                  <Code2 />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">What I bring</h3>
                  <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                    <li>Analytical thinking: turn messy data into decisions.</li>
                    <li>Clear communication: stakeholder-ready docs & decks.</li>
                    <li>Bias for action: prototype, test, iterate fast.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionHeader
          kicker="About"
          title="A global learner with real-world hustle"
          blurb="Thirty countries travelled, multi-industry experience (retail, events, data-centre), now channelled into cloud & data value."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-semibold">Focus areas</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Cloud Engineering","Data & ML","Dashboards & Storytelling","Process Optimisation","Conversion Thinking"].map((t) => <Pill key={t}>{t}</Pill>)}
            </div>
          </Card>
          <Card>
            <h4 className="font-semibold">Currently learning</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Azure fundamentals & IAM</li>
              <li>Data modelling (Star schema) & SQL performance</li>
              <li>A/B testing and CRO playbooks</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-semibold">Quick facts</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Deakin MIS student • Melbourne</li>
              <li>Available for internships & grad roles</li>
              <li>Work rights in Australia</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionHeader kicker="Skills" title="Tools & technologies I use" />
        <Card>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => <Pill key={s}>{s}</Pill>)}
          </div>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionHeader kicker="Projects" title="Selected work" blurb="Curated highlights with measurable outcomes and clean documentation." />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                  </div>
                </div>
                <a href="#" className="text-indigo-600 inline-flex items-center gap-1 text-sm">
                  View <ExternalLink size={14} />
                </a>
              </div>
              <p className="mt-3 text-slate-700">{p.blurb}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionHeader kicker="Experience" title="Where I’ve learned by doing" />
        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIENCE.map((e) => (
            <Card key={e.role}>
              <div className="flex items-center gap-2 mb-2"><Briefcase className="text-indigo-600" size={18} /><span className="font-semibold">{e.role}</span></div>
              <div className="text-sm text-slate-500">{e.period}</div>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
                {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </Card>
          ))}
          <Card>
            <div className="flex items-center gap-2 mb-2"><GraduationCap className="text-indigo-600" size={18} /><span className="font-semibold">{EDUCATION[0].title}</span></div>
            <div className="text-sm text-slate-500">{EDUCATION[0].org} — {EDUCATION[0].period}</div>
            <p className="mt-3 text-slate-700">Focus: analytics, AI, cloud, and ethical tech. Distinction-level writing and stakeholder-ready deliverables.</p>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionHeader kicker="Contact" title="Let’s Connect" blurb="Reach out via email or LinkedIn. I respond fast." />
        <Card>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="space-y-3">
              <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={`mailto:${PROFILE.email}`}><Mail size={18} /> {PROFILE.email}</a>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={PROFILE.linkedin}><Linkedin size={18} /> LinkedIn</a>
            </div>
            <div className="md:col-span-2">
              <motion.a
                href={PROFILE.linkedin}
                initial={{ y: 6, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-indigo-700 hover:bg-indigo-100"
              >
                <Sparkles size={18} /> Work With Me <ArrowRight size={16} />
              </motion.a>

              <form className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Your name" className="border rounded-xl px-3 py-2" />
                <input placeholder="Email" type="email" className="border rounded-xl px-3 py-2" />
                <textarea placeholder="How can I help?" className="border rounded-xl px-3 py-2 sm:col-span-2 h-28" />
                <button type="button" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700">
                  Send <ArrowRight size={16} />
                </button>
                <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 rounded-xl hover:border-slate-400">
                  <Mail size={16} /> Copy email
                </button>
                {emailCopied && <span className="text-sm text-emerald-600">Copied!</span>}
              </form>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Crafted with ❤️ in Melbourne.
      </footer>
    </div>
  );
}