"use client";

import { useState } from "react";
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
import Image from "next/image";

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

const PROJECTS = [
  {
    title: "Data2Intel – Early Writing Risk Prediction",
    tags: ["Classification", "Clustering", "Education Analytics"],
    blurb:
      "Built models to predict Year-3 writing at-risk students using 2,000-student dataset (SES, literacy, numeracy). Delivered insights + ethical guidance and two predictive models + a clustering approach.",
  },
  {
    title: "RasoiRaga – Sustainability & Operations Dashboards",
    tags: ["Power BI", "Carbon Footprint", "SME"],
    blurb:
      "Designed end-to-end BI dashboards for a Melbourne catering business: carbon insights, order profitability, supplier analysis, stakeholder map, and TOWS recommendations.",
  },
  {
    title: "PQC Gaming – Player Analytics & ML",
    tags: ["EDA", "ML", "Feature Engineering"],
    blurb:
      "Explored 24,813-game dataset; correlation studies; prediction baselines; interactive visuals; reproducible Python notebooks and pipeline.",
  },
  {
    title: "Bank Australia – Digital Transformation Roadmap",
    tags: ["Consulting", "Ethical Banking", "Strategy"],
    blurb:
      "Authored a unique report recommending emerging tech with implementation plan, governance (COBIT 2019), and Australian context.",
  },
];

const EXPERIENCE = [
  {
    role: "Amazon – Data Analytics & Operations Associate",
    period: "2025 — Present",
    points: [
      "Use operational data to identify inefficiencies and suggest process improvements.",
      "Track throughput metrics and highlight trends using analytics tools.",
      "Support internal teams with data-driven reporting to improve workflow decisions.",
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

const SectionHeader = ({
  kicker,
  title,
  blurb,
}: {
  kicker: string;
  title: string;
  blurb?: string;
}) => (
  <div className="max-w-3xl mx-auto text-center mb-10">
    <p className="uppercase tracking-widest text-sm text-indigo-500 font-semibold">
      {kicker}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
    {blurb && <p className="text-slate-600 mt-3">{blurb}</p>}
  </div>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl p-6 shadow-sm border border-slate-200 bg-white ${className}`}
  >
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
    {children}
  </span>
);

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
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight">
            AT<span className="text-indigo-500">.</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
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
            className="inline-flex items-center gap-2 text-sm bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
          >
            <Download size={16} /> Download Resume
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-indigo-600 font-medium">
              <Sparkles size={18} /> Available for internships & graduate roles
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
              {PROFILE.name}
            </h1>
            <p className="text-xl mt-3 text-slate-700">{PROFILE.headline}</p>
            <p className="mt-4 text-slate-600 max-w-2xl">{PROFILE.summary}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-indigo-700"
              >
                See Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 rounded-xl hover:border-slate-400"
              >
                Contact Me <Mail size={16} />
              </a>
            </div>
            <div className="flex gap-4 mt-6 text-slate-600">
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {PROFILE.location}
              </div>
              <a
                className="inline-flex items-center gap-2 hover:text-indigo-600"
                href={PROFILE.linkedin}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-indigo-600"
                href={PROFILE.github}
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <Image
                src={PROFILE.photo}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
