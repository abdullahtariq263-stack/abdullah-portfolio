"use client";

import { useState } from "react";
import type { ReactNode } from "react";
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
  GraduationCap,
  Code2,
  Trophy,
  Calendar,
} from "lucide-react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  blurb?: string;
};

type CardProps = {
  children: ReactNode;
  className?: string;
};

type HighlightStat = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  tags: string[];
  blurb: string;
  impact: string;
  link?: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

type Education = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
};

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const SectionHeader = ({ kicker, title, blurb }: SectionHeaderProps) => (
  <motion.div
    className="mx-auto mb-12 max-w-3xl text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-120px" }}
    variants={fadeIn}
    transition={{ duration: 0.5 }}
  >
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">{kicker}</p>
    <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
    {blurb && <p className="mt-3 text-slate-600">{blurb}</p>}
  </motion.div>
);

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700">
    {children}
  </span>
);

const PROFILE = {
  name: "Abdullah Tariq",
  headline: "Aspiring Cloud Engineer • Data/AI Projects • Melbourne, Australia",
  summary:
    "Master of Information Systems (Deakin). Hands-on with analytics, ML, cloud fundamentals, and CRO mindset. I ship polished deliverables — dashboards, models, and strategies that move the needle.",
  location: "Melbourne, Australia",
  email: "abdullahtariq263@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdu11aaah/",
  github: "https://github.com/abdullah-tariq",
  resumeUrl: "/resume.pdf",
  photo: "/profile.jpg",
};

const HIGHLIGHTS: HighlightStat[] = [
  { label: "Analytics & ML builds", value: "12+" },
  { label: "Countries travelled", value: "30+" },
  { label: "Stakeholder workshops", value: "20+" },
];

const FOCUS_AREAS = [
  "Cloud engineering",
  "Data & ML product delivery",
  "Dashboards & storytelling",
  "Process optimisation",
  "Conversion rate experimentation",
];

const CURRENT_LEARNING = [
  "Azure identity & landing zones",
  "Data modelling (star schema) & SQL performance",
  "Experiment design, CRO playbooks, and instrumentation",
];

const QUICK_FACTS = [
  "Deakin MIS student (distinction average)",
  "Available for internships & graduate roles",
  "Full work rights in Australia",
];

const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Scikit-Learn",
  "Altair/Matplotlib",
  "Azure (fundamentals)",
  "AWS basics",
  "Git",
  "Power Query",
  "DAX",
  "ServiceNow",
  "TechnologyOne",
  "Prompt Engineering",
];

const PROJECTS: Project[] = [
  {
    title: "Data2Intel – Early Writing Risk Prediction",
    tags: ["Classification", "Clustering", "Education Analytics"],
    blurb:
      "Trained supervised models with explainability tooling to identify Year-3 students at risk based on a 2,000-student longitudinal dataset.",
    impact:
      "Enabled intervention planning that surfaced 28% more at-risk students ahead of national assessments while keeping teachers in the loop.",
  },
  {
    title: "RasoiRaga – Sustainability & Operations Dashboards",
    tags: ["Power BI", "Carbon Footprint", "SME"],
    blurb:
      "Built executive and operational dashboards for a catering business covering carbon insights, order profitability, supplier exposure, and TOWS strategy.",
    impact:
      "Improved leadership visibility on emissions intensity and menu profitability, highlighting a 17% margin opportunity across SKUs.",
  },
  {
    title: "PQC Gaming – Player Analytics & ML",
    tags: ["EDA", "ML", "Feature Engineering"],
    blurb:
      "Explored a 24,813-game dataset to profile player retention, engineered predictive baselines, and delivered interactive visualisations.",
    impact:
      "Delivered actionable cohorts and uplift tactics, accelerating experiment design for the product and marketing pods.",
  },
  {
    title: "Bank Australia – Digital Transformation Roadmap",
    tags: ["Consulting", "Ethical Banking", "Strategy"],
    blurb:
      "Produced an emerging-tech roadmap with governance guardrails (COBIT 2019) tailored to Bank Australia's ethical banking mandate.",
    impact:
      "Mapped investments to customer value streams and produced a phased rollout plan with risk controls and measurable KPIs.",
  },
];

const EXPERIENCE: Experience[] = [
  {
    role: "Data Analytics & Operations Associate",
    company: "Amazon",
    period: "2025 — Present",
    location: "Melbourne, Australia",
    points: [
      "Turn fulfilment data into actionable insights that remove bottlenecks across shifts.",
      "Track throughput metrics and surface trends for shift leads using near-real-time dashboards.",
      "Support internal teams with reporting cadences that inform workflow decisions and labour planning.",
    ],
    stack: ["SQL", "Operational dashboards", "Process improvement"],
  },
  {
    role: "Customer & Data Centre Support Specialist",
    company: "Qatar (Events & Data Centre)",
    period: "2017 — 2019",
    location: "Doha, Qatar",
    points: [
      "Maintained uptime and service quality across large-scale events and infrastructure environments.",
      "Led incident response communications between technical teams and business stakeholders.",
      "Captured process learnings that shaped customer service playbooks and onboarding materials.",
    ],
    stack: ["ServiceNow", "Stakeholder management", "Knowledge management"],
  },
];

const EDUCATION: Education[] = [
  {
    title: "Master of Information Systems (M722)",
    org: "Deakin University, Melbourne",
    period: "2024 — 2026 (in progress)",
    highlights: [
      "Focus: analytics, AI, cloud strategy, and ethical tech.",
      "Distinction-level research and stakeholder-ready deliverables.",
      "Project leadership across multi-disciplinary teams.",
    ],
  },
];

const ACHIEVEMENTS = [
  "30+ countries travelled — global context for customer empathy.",
  "Trusted to deliver polished documentation and executive-ready decks.",
  "Bias for action: prototype, test, and iterate fast with stakeholders.",
];

export default function Page() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3 font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
              AT
            </span>
            <span className="hidden sm:block">
              Abdullah <span className="text-indigo-600">Tariq</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#experience" className="hover:text-indigo-600">
              Experience
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </div>
          <a
            href={PROFILE.resumeUrl}
            download="Abdullah-Tariq-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            <Download size={16} aria-hidden /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-sky-100" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:px-6 md:py-24">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm backdrop-blur">
                <Sparkles size={18} aria-hidden /> Available for internships & graduate roles
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                {PROFILE.name}
              </h1>
              <p className="mt-4 text-xl text-slate-700">{PROFILE.headline}</p>
              <p className="mt-5 max-w-2xl text-lg text-slate-600">{PROFILE.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  See projects <ArrowRight size={16} aria-hidden />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 font-medium text-slate-700 hover:border-slate-400"
                >
                  Contact me <Mail size={16} aria-hidden />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} aria-hidden /> {PROFILE.location}
                </span>
                <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={PROFILE.linkedin}>
                  <Linkedin size={16} aria-hidden /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:text-indigo-600" href={PROFILE.github}>
                  <Github size={16} aria-hidden /> GitHub
                </a>
              </div>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map((item) => (
                  <Card key={item.label} className="bg-white/80 p-5 text-left">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold text-slate-900">{item.value}</dd>
                  </Card>
                ))}
              </dl>
            </motion.div>

            <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }} className="space-y-6">
              <Card className="relative overflow-hidden bg-white/90">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-indigo-50" />
                <div className="relative flex items-start gap-5">
                  <Image
                    src={PROFILE.photo}
                    alt={PROFILE.name}
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-2xl border-4 border-white object-cover shadow-lg"
                    priority
                  />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-500">Profile</p>
                    <h3 className="mt-2 text-xl font-semibold">Product-minded cloud & data generalist</h3>
                    <p className="mt-3 text-sm text-slate-600">
                      Comfortable straddling analytics, engineering, and business storytelling to ship measurable outcomes.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
                      <Pill>AI & data foundations</Pill>
                      <Pill>Human-centred delivery</Pill>
                      <Pill>Experimentation mindset</Pill>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="relative bg-white/90">
                <div className="absolute -top-6 -right-6 rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg">
                  Open to Work
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-200 to-indigo-100 text-indigo-700">
                    <Code2 aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">What I bring</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>Analytical thinking: turn messy data into decisions.</li>
                      <li>Clear communication: stakeholder-ready docs & decks.</li>
                      <li>Bias for action: prototype, test, iterate fast.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Trophy size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Highlights</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {ACHIEVEMENTS.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader
            kicker="About"
            title="Global perspective with real-world hustle"
            blurb="Thirty countries travelled, multi-industry experience (retail, events, data centre) — now channelled into creating data-informed cloud value."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h4 className="text-lg font-semibold">Focus areas</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {FOCUS_AREAS.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </Card>
            <Card>
              <h4 className="text-lg font-semibold">Currently learning</h4>
              <ul className="mt-4 space-y-2 text-slate-700">
                {CURRENT_LEARNING.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h4 className="text-lg font-semibold">Quick facts</h4>
              <ul className="mt-4 space-y-2 text-slate-700">
                {QUICK_FACTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader kicker="Skills" title="Tools & technologies I rely on" />
          <Card>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </Card>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader
            kicker="Projects"
            title="Selected work with measurable impact"
            blurb="Curated highlights spanning analytics, strategy, and experimentation."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="h-full bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Pill key={tag}>{tag}</Pill>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                      >
                        View <ExternalLink size={14} aria-hidden />
                      </a>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{project.blurb}</p>
                  <p className="mt-4 text-sm font-medium text-slate-800">{project.impact}</p>
                </Card>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader
            kicker="Experience"
            title="Where I’ve learned by doing"
            blurb="A blend of operations, analytics, and service delivery across global environments."
          />
          <div className="relative pl-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-slate-200">
            {EXPERIENCE.map((role, index) => (
              <motion.article
                key={`${role.company}-${role.role}`}
                className="relative pb-10 pl-6 last:pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="absolute left-[-14px] top-5 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-indigo-500 shadow" />
                <Card className="bg-white">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{role.role}</h3>
                      <p className="text-sm font-medium text-indigo-600">{role.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={16} aria-hidden />
                      <span>{role.period}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{role.location}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader kicker="Education" title="Learning that grounds my practice" />
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION.map((school) => (
              <motion.article
                key={school.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                transition={{ duration: 0.45 }}
              >
                <Card className="bg-white">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <GraduationCap size={20} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{school.title}</h3>
                      <p className="text-sm font-medium text-indigo-600">{school.org}</p>
                      <p className="mt-1 text-sm text-slate-500">{school.period}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        {school.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeader
            kicker="Contact"
            title="Let’s build something together"
            blurb="Reach out via email or LinkedIn — I respond fast."
          />
          <Card className="bg-white">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                  <Sparkles size={16} aria-hidden /> Ready to collaborate
                </div>
                <p className="text-sm text-slate-600">
                  I love partnering with teams who care about measurable outcomes and thoughtful customer experiences. Drop a line and I’ll follow up within a day.
                </p>
                <div className="space-y-3 text-sm text-slate-700">
                  <a className="flex items-center gap-2 hover:text-indigo-600" href={`mailto:${PROFILE.email}`}>
                    <Mail size={18} aria-hidden /> {PROFILE.email}
                  </a>
                  <a className="flex items-center gap-2 hover:text-indigo-600" href={PROFILE.linkedin}>
                    <Linkedin size={18} aria-hidden /> LinkedIn
                  </a>
                  <a className="flex items-center gap-2 hover:text-indigo-600" href={PROFILE.github}>
                    <Github size={18} aria-hidden /> GitHub
                  </a>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={18} aria-hidden /> {PROFILE.location}
                  </div>
                </div>
              </div>
              <div>
                <form className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Your name"
                    name="name"
                    autoComplete="name"
                  />
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                  <textarea
                    className="h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:col-span-2"
                    placeholder="How can I help?"
                    name="message"
                  />
                  <div className="flex flex-wrap gap-3 sm:col-span-2">
                    <button
                      type="button"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700"
                    >
                      Send message <ArrowRight size={16} aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-400"
                    >
                      <Mail size={16} aria-hidden /> Copy email
                    </button>
                    {emailCopied && (
                      <span className="self-center text-sm font-medium text-emerald-600" aria-live="polite">
                        Email copied to clipboard!
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Crafted with care in Melbourne.
      </footer>
    </div>
  );
}
