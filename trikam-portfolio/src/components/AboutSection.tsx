import { GraduationCap, Code2, Trophy, Terminal, MapPin, Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const timeline = [
  {
    period: "2025 — 2029",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Swaminarayan University, Kalol",
    description: "Focusing on core CS fundamentals: Data Structures & Algorithms, OOP, DBMS, and Software Engineering principles.",
    icon: GraduationCap,
  },
  {
    period: "2024 — 2025",
    title: "Full-Stack Development & Hackathons",
    institution: "Skill Building & Competitions",
    description: "Built and shipped production-ready applications including SkillSense AI (3rd place at SU Hackathon 2026), Game Hub multiplayer portal, and full-stack dashboards.",
    icon: Trophy,
  },
  {
    period: "2023 — 2024",
    title: "Programming Fundamentals & Web Basics",
    institution: "Foundational Learning",
    description: "Mastered C++ and JavaScript core concepts. Built frontend interfaces using HTML, CSS, React, and RESTful API integrations.",
    icon: Code2,
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About" subtitle="Background and engineering focus">
      <div className="space-y-16 max-w-6xl mx-auto">

        {/* ── Bio ── */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2.5 mb-4 text-muted-foreground">
              <Terminal size={16} />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Engineering Profile</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a first-year Computer Science undergraduate focused on building practical,
              resilient web software. My work connects well-crafted React interfaces with
              scalable Node.js backends and real-time event engines.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Recent work spans asynchronous task pipelines with Redis, WebSocket state
              management in browser games, and integrating LLMs into web platforms for
              intelligent automated workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="shrink-0" />
                Ahmedabad, India
              </span>
              <span className="text-border/80">·</span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={13} className="shrink-0" />
                Open to Software Engineering Internships
              </span>
            </div>
          </div>

          {/* ── What I Build / Learn / Education — plain text, no icon boxes ── */}
          <div className="md:col-span-5 flex flex-col gap-5 border-l border-border pl-8">
            <div>
              <h4 className="text-sm font-bold text-foreground mb-1">What I Build</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full-stack web applications, real-time WebSocket platforms, and AI-assisted software.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-1">Currently Learning</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Advanced Data Structures & Algorithms in C++, distributed caching, and containerized deployments.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-1">Education</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                B.Tech CSE (2025–2029) at Swaminarayan University. First year.
              </p>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div>
          <h3 className="text-base font-bold text-foreground mb-8 flex items-center gap-2.5">
            <span className="text-muted-foreground font-mono text-sm">//</span>
            Timeline
          </h3>
          <div className="grid sm:grid-cols-3 gap-px border border-border rounded-xl overflow-hidden bg-border">
            {timeline.map((item) => (
              <div
                key={item.period}
                className="bg-background p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <item.icon size={16} className="text-muted-foreground" />
                  <span className="text-[10px] font-mono font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1 leading-tight">{item.title}</h4>
                <p className="text-[11px] font-mono text-muted-foreground mb-3">{item.institution}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
