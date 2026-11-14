/* eslint-disable @next/next/no-img-element */

type Project = {
  label: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  tags: string[];
  featured?: boolean;
  badge?: string;
  metrics?: Array<{ value: string; label: string }>;
  image?: string;
  imageAlt?: string;
  invertPlot?: boolean;
  diagram?: "pinshift" | "seed" | "rota";
};

const projects: Project[] = [
  {
    label: "01 / Research · Open Source",
    title: "SelectiveLLM",
    badge: "Apache-2.0",
    description:
      "Adaptive model-capacity orchestration for language models. Treats LoRA adapters and experts as a budgeted runtime resource — analyzer → router → memory-budget planner → runtime manager with dependency-aware caching, eviction, and CUDA/MPS telemetry.",
    href: "https://github.com/AltanCetinCelik/SelectiveLLM",
    external: true,
    featured: true,
    metrics: [
      { value: "0.83 F1", label: "semantic routing vs. 0.61 keyword" },
      { value: "~286 MB", label: "live VRAM saved on Apple M4 (1.5B)" },
      { value: "≥70% CI", label: "pytest · ruff · mypy · negative results logged" },
    ],
    tags: [
      "PyTorch",
      "PEFT / LoRA",
      "Adaptive Inference",
      "Benchmarking",
      "GitHub Actions",
    ],
    image:
      "https://raw.githubusercontent.com/AltanCetinCelik/SelectiveLLM/main/results/real/latest/plots/real_quality_vs_memory.png",
    imageAlt:
      "SelectiveLLM benchmark comparing task quality versus live accelerator memory across routing strategies",
    invertPlot: true,
  },
  {
    label: "02 / Startup · Co-founder",
    title: "PinShift",
    badge: "Private · Active",
    description:
      "Supply-chain and datasheet-aware copilot for KiCad and Altium Designer. Proposes drop-in replacement parts when components go EOL or out of stock, audits pinout, thermal-tab, and LDO stability hazards against 99 documented real-world failure cases, and runs a 45° octile A* local rerouter.",
    href: "#experience",
    external: false,
    tags: ["FastAPI", "KiCad Python", "Altium C#/.NET", "45° A*", "Nexar / LCSC"],
    diagram: "pinshift",
  },
  {
    label: "03 / Agents · Public Core",
    title: "seed-showcase",
    badge: "GitHub",
    description:
      "Dependency-free public core of Seed, a modular local-first agent architecture. Combines an LLM gateway with health checks and provider failover (Ollama, Groq), hybrid semantic + keyword memory, risk-tiered human approval gates, and recoverable self-editing.",
    href: "https://github.com/AltanCetinCelik/seed-showcase",
    external: true,
    tags: ["Python", "Agent Architecture", "Hybrid RAG", "Approval Gates", "Local-First"],
    diagram: "seed",
  },
  {
    label: "04 / Fintech · Solana",
    title: "ROTA",
    badge: "Crypto World's Fair '26",
    description:
      "Non-custodial cross-border payment request platform built for the Superteam Türkiye × Arf track. Generates Solana Pay links and QR codes, detects on-chain settlement with verifiable receipts, and computes live FX cost comparisons against SWIFT, Wise, and Western Union.",
    href: "https://github.com/AltanCetinCelik/rota",
    external: true,
    tags: ["Next.js 16", "TypeScript", "@solana/web3.js", "Solana Pay", "Vercel"],
    diagram: "rota",
  },
  {
    label: "05 / Edge & Thesis · IIoT",
    title: "Industrial IIoT & MCT",
    badge: "GitHub + Thesis",
    description:
      "Telemetry ingestion pipelines, monitoring dashboards, and MCT — an undergraduate thesis predictive-maintenance platform running a multi-master CAN bus (Raspberry Pi 5 master, STM32 nodes, ESP32 IoT gateway) with FFT-based motor vibration fault analysis.",
    href: "https://github.com/AltanCetinCelik/My-Projects",
    external: true,
    tags: ["FastAPI", "CAN bus", "STM32 / ESP32", "MQTT / Modbus", "OPC UA"],
    image:
      "https://raw.githubusercontent.com/AltanCetinCelik/My-Projects/main/industrial-iot-edge-demo/screenshots/dashboard.png",
    imageAlt: "Industrial IoT edge telemetry monitoring dashboard",
  },
];

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  badge: string;
  summary: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: "Oct 2026 – Present",
    role: "Co-founder & Software / AI Lead",
    org: "PinShift",
    badge: "Pre-MVP · 3-person team",
    summary:
      "Architecting an engineering copilot for KiCad and Altium Designer that prevents costly board respins from EOL parts and subtle datasheet mismatches.",
    highlights: [
      "Built the FastAPI core engine integrating live distributor APIs (Nexar/Octopart, LCSC), a deterministic hardware rule linter, and a 45° octile A* local rerouter.",
      "Designed dual EDA plugins (KiCad Python/pcbnew, Altium C#/.NET + WebView2) and curated 99 documented real-world hardware failure cases powering the checks.",
    ],
  },
  {
    period: "Oct 2026 – Present",
    role: "AI Training Writer (Contract)",
    org: "Mercor",
    badge: "Remote Contract",
    summary:
      "Authoring, evaluating, and refining LLM training data and prompt-response pairs under strict rubric, factual accuracy, and style guidelines.",
    highlights: [
      "Audit model reasoning consistency, instruction adherence, edge-case failure modes, and verifiable technical correctness across structured evaluation rubrics.",
    ],
  },
  {
    period: "2023 – Present",
    role: "Freelance Software Developer",
    org: "Independent",
    badge: "Client Delivery",
    summary:
      "Delivered production-bound industrial monitoring prototypes and commissioned interactive software.",
    highlights: [
      "Built the real-time data acquisition and transmission core of a factory-network monitoring dashboard prototype later taken to production by the client's engineers.",
      "Built and shipped a commissioned 3D game (Unity + Python) for a paying client.",
    ],
  },
  {
    period: "Expected Jun 2027",
    role: "B.Sc. Electrical and Electronics Engineering",
    org: "Pamukkale University",
    badge: "Undergraduate Thesis",
    summary:
      "Final-year EE engineering focused on embedded control, signal processing, and applied AI infrastructure.",
    highlights: [
      "Undergraduate thesis (MCT): ESP32 IoT gateway and real-time web dashboard for a 4-person multi-master CAN bus predictive-maintenance platform.",
    ],
  },
];

const capabilities = [
  "Adaptive LLM inference & routing",
  "LLM evaluation & automated benchmarking",
  "Conditional computation & LoRA budgeting",
  "Local-first agent orchestration & guardrails",
  "Python / FastAPI / asyncio backends",
  "Pandas data & experiment pipelines",
  "Edge AI & CAN-bus / industrial telemetry",
  "EDA plugins & PCB automation tooling",
];

const stack = [
  ["Languages", "Python · TypeScript · C · C++ · C# · SQL"],
  [
    "AI / ML",
    "PyTorch · Hugging Face Transformers · PEFT / LoRA · LLM Evaluation · Benchmarking · RAG · Agent Systems · Ollama",
  ],
  [
    "Backend & Data",
    "FastAPI · asyncio · Pydantic · Pandas · REST · WebSockets · Next.js · React · Docker · Linux · GitHub Actions · pytest",
  ],
  [
    "Embedded & HW",
    "STM32 · ESP32 · Raspberry Pi · CAN bus · MQTT · Modbus · OPC UA · KiCad · Altium Designer · Unity",
  ],
  ["Spoken", "Turkish (native) · English (C1, fluent)"],
];

const heroSignals = [
  {
    metric: "0.83 F1",
    title: "Adaptive routing",
    detail: "vs. 0.61 keyword baseline",
  },
  {
    metric: "~286 MB",
    title: "VRAM saved",
    detail: "Apple M4 · Qwen2.5-1.5B",
  },
  {
    metric: "99 cases",
    title: "Hardware failure DB",
    detail: "Backing PinShift rule linter",
  },
  {
    metric: "45° A*",
    title: "Local PCB rerouter",
    detail: "FastAPI + KiCad / Altium",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div
        className={`project-visual image-visual ${project.invertPlot ? "plot-visual" : ""}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt ?? project.title}
          loading="eager"
        />
      </div>
    );
  }

  if (project.diagram === "pinshift") {
    return (
      <div className="project-visual flow-visual" aria-hidden="true">
        <div className="flow-node">EOL Part</div>
        <span className="flow-sep">→</span>
        <div className="flow-node flow-node-accent">Nexar + Rule DB</div>
        <span className="flow-sep">→</span>
        <div className="flow-node flow-node-strong">45° A* Reroute</div>
      </div>
    );
  }

  if (project.diagram === "seed") {
    return (
      <div className="project-visual seed-visual" aria-hidden="true">
        <div className="seed-node seed-goal">Goal</div>
        <span>→</span>
        <div className="seed-node seed-agent">Gateway</div>
        <span>→</span>
        <div className="seed-node">Approval</div>
        <span>→</span>
        <div className="seed-node seed-run">Action</div>
      </div>
    );
  }

  return (
    <div className="project-visual luna-visual" aria-hidden="true">
      <div className="luna-window">
        <div className="luna-bar">
          <i />
          <i />
          <i />
          <span>solana-pay · fx-compare</span>
        </div>
        <div className="luna-content">
          <span>on-chain settlement</span>
          <strong>Solana Pay QR → verified receipt · vs. SWIFT / Wise / WU</strong>
          <div className="luna-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const personId = "https://altancelik.dev/#person";
  const websiteId = "https://altancelik.dev/#website";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: "https://altancelik.dev",
        name: "Altan Çetin Çelik — AI Systems, LLM Evaluation & Backend Engineer",
        description:
          "Portfolio and technical systems showcase of Altan Çetin Çelik.",
        publisher: { "@id": personId },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://altancelik.dev/#webpage",
        url: "https://altancelik.dev",
        name: "Altan Çetin Çelik — AI Systems, LLM Evaluation & Backend Engineer",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        dateCreated: "2026-10-19T12:00:00+03:00",
        dateModified: "2026-11-14T11:20:00+03:00",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Altan Çetin Çelik",
        alternateName: ["Altan Cetin Celik", "Altan Çelik", "Altan Celik"],
        url: "https://altancelik.dev",
        image: "https://altancelik.dev/altan-portrait.webp",
        email: "mailto:altancelik35@gmail.com",
        jobTitle: "AI Systems & Backend Engineer",
        description:
          "Final-year Electrical-Electronics Engineering student building and evaluating AI systems end to end: adaptive LLM inference, automated benchmarking pipelines, local-first agents, Python/FastAPI backends, and edge IIoT.",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Pamukkale University",
        },
        worksFor: [
          { "@type": "Organization", name: "PinShift" },
          { "@type": "Organization", name: "Mercor" },
        ],
        sameAs: [
          "https://github.com/AltanCetinCelik",
          "https://www.linkedin.com/in/altan-celik-004bb1248/",
        ],
        knowsLanguage: ["tr", "en"],
        knowsAbout: [
          "Adaptive LLM Inference",
          "LLM Evaluation",
          "Automated Benchmarking",
          "Python",
          "FastAPI",
          "asyncio",
          "Pandas",
          "PyTorch",
          "PEFT / LoRA",
          "AI Agent Architectures",
          "Edge AI",
          "Industrial IoT",
          "CAN bus",
          "STM32",
          "KiCad",
          "Altium Designer",
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://altancelik.dev/#projects",
        name: "Selected Software & AI Engineering Systems",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareSourceCode",
              name: "SelectiveLLM",
              codeRepository: "https://github.com/AltanCetinCelik/SelectiveLLM",
              license: "https://opensource.org/licenses/Apache-2.0",
              programmingLanguage: ["Python", "PyTorch"],
              author: { "@id": personId },
              description:
                "Adaptive model-capacity orchestration for language models using budgeted LoRA adapters and calibrated semantic routing.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareSourceCode",
              name: "seed-showcase",
              codeRepository: "https://github.com/AltanCetinCelik/seed-showcase",
              programmingLanguage: "Python",
              author: { "@id": personId },
              description:
                "Dependency-free public core of a local-first agent architecture with LLM routing, hybrid memory, and human approval gates.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "SoftwareSourceCode",
              name: "ROTA",
              codeRepository: "https://github.com/AltanCetinCelik/rota",
              programmingLanguage: ["TypeScript", "Next.js"],
              author: { "@id": personId },
              description:
                "Non-custodial Solana Pay cross-border payment request platform with on-chain receipts and live FX comparisons.",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "SoftwareSourceCode",
              name: "Industrial IIoT & Telemetry Systems",
              codeRepository: "https://github.com/AltanCetinCelik/My-Projects",
              programmingLanguage: ["Python", "C", "C++"],
              author: { "@id": personId },
              description:
                "Industrial telemetry dashboards, FastAPI services, and CAN bus edge monitoring systems.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <div className="site-shell">
        <header className="nav">
          <a
            className="wordmark"
            href="#top"
            aria-label="Altan Çetin Çelik home"
          >
            AÇ
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="nav-cta"
            href="https://github.com/AltanCetinCelik"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </header>

        <nav className="mobile-subnav" aria-label="Quick section navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <main id="top">
          <section className="hero section">
            <div className="hero-kicker">
              <span className="status-dot" />
              Altan Çetin Çelik · Open to Remote AI Systems &amp; Backend Roles
            </div>

            <h1>
              I build and evaluate AI systems
              <span className="muted"> built for real constraints.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-copy">
                I&apos;m <strong>Altan Çetin Çelik</strong> — a final-year
                Electrical-Electronics Engineering student working across
                adaptive LLM inference, automated evaluation &amp; benchmarking
                pipelines, Python/FastAPI backends, and edge IIoT telemetry.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#work">
                  View selected work <span aria-hidden="true">↓</span>
                </a>
                <a className="button secondary" href="#experience">
                  Experience
                </a>
                <a
                  className="button secondary"
                  href="https://www.linkedin.com/in/altan-celik-004bb1248/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
              </div>
            </div>

            <div
              className="signal-strip"
              aria-label="Verified engineering benchmarks"
            >
              {heroSignals.map((item) => (
                <div className="signal-cell" key={item.title}>
                  <span className="signal-metric">{item.metric}</span>
                  <strong>{item.title}</strong>
                  <span className="signal-detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section projects-section" id="work">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2>Systems, not isolated demos.</h2>
              </div>
              <p>
                Architecture, runtime telemetry, baselines, and failure modes stay
                visible — whether in model routing, EDA software, or embedded
                buses.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <a
                  key={project.title}
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer" : undefined}
                >
                  <div className="project-top">
                    <span className="eyebrow">{project.label}</span>
                    <div className="project-top-right">
                      {project.badge ? (
                        <span className="project-badge">{project.badge}</span>
                      ) : null}
                      <span className="project-arrow">
                        {project.external ? <Arrow /> : <span aria-hidden="true">↓</span>}
                      </span>
                    </div>
                  </div>

                  {project.featured ? (
                    <div className="featured-body">
                      <div className="featured-copy">
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>

                        {project.metrics ? (
                          <div className="kpi-grid">
                            {project.metrics.map((m) => (
                              <div className="kpi-item" key={m.value}>
                                <strong>{m.value}</strong>
                                <span>{m.label}</span>
                              </div>
                            ))}
                          </div>
                        ) : null}

                        <div className="tag-list">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      <ProjectVisual project={project} />
                    </div>
                  ) : (
                    <>
                      <ProjectVisual project={project} />

                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>

                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </>
                  )}
                </a>
              ))}
            </div>
          </section>

          <section className="section experience-section" id="experience">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Experience &amp; education</span>
                <h2>Built under real constraints.</h2>
              </div>
              <p>
                From startup engineering and FastAPI backends to rubric-driven
                LLM evaluation and production telemetry.
              </p>
            </div>

            <div className="experience-list">
              {experiences.map((item) => (
                <article className="experience-row" key={`${item.org}-${item.role}`}>
                  <div className="experience-meta">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-badge">{item.badge}</span>
                  </div>

                  <div className="experience-body">
                    <h3>
                      {item.role}{" "}
                      <span className="experience-org">— {item.org}</span>
                    </h3>
                    <p className="experience-summary">{item.summary}</p>
                    <ul className="experience-bullets">
                      {item.highlights.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section research-section" id="research">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Research direction</span>
                <h2>Make the runtime choose.</h2>
              </div>
              <p>
                The recurring question in my work is whether an AI system can spend
                resources selectively — choosing the right model capacity, memory,
                tool, or human escalation path for the request in front of it.
              </p>
            </div>

            <div className="research-layout">
              <div className="research-statement">
                <p>
                  “What is the minimum computation required to produce a useful,
                  reliable answer under real memory and latency constraints?”
                </p>
              </div>

              <div className="capability-list">
                {capabilities.map((item, index) => (
                  <div className="capability-row" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section principles">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Engineering principles</span>
                <h2>Measure the system you claim to have built.</h2>
              </div>
            </div>

            <div className="principle-grid">
              <article>
                <span>01</span>
                <h3>Explicit boundaries</h3>
                <p>
                  Keep decision, execution, memory, risk, and resource cost
                  separable enough to inspect, benchmark, and replace.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Real baselines</h3>
                <p>
                  Compare against simple, fast controls before treating a heavier
                  architecture as an improvement.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Failure is evidence</h3>
                <p>
                  Preserve null and contradictory benchmark results instead of
                  optimizing the narrative around a cherry-picked demo.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Human control</h3>
                <p>
                  High-impact actions should expose approval, fallback, and
                  abstention paths rather than assume unchecked autonomy.
                </p>
              </article>
            </div>
          </section>

          <section className="section about-section" id="about">
            <div className="about-portrait">
              <img
                src="/altan-portrait.webp"
                alt="Portrait of Altan Çetin Çelik"
                width={720}
                height={900}
              />
              <div className="portrait-caption">
                <span>Altan Çetin Çelik</span>
                <span>Türkiye · C1 English</span>
              </div>
            </div>

            <div className="about-main">
              <div className="about-copy">
                <span className="eyebrow">About</span>
                <h2>
                  Electrical engineering background.
                  <br />
                  Software-first execution.
                </h2>
                <p>
                  I study Electrical-Electronics Engineering at Pamukkale
                  University and build across ML systems, LLM evaluation
                  pipelines, Python/FastAPI backends, and embedded telemetry.
                  I&apos;m most effective where model capability meets deterministic
                  systems engineering — measurement, constraints, and reliability.
                </p>
              </div>

              <div className="stack-list">
                {stack.map(([title, value]) => (
                  <div className="stack-row" key={title}>
                    <span>{title}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section contact-section" id="contact">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build something that works outside a demo.</h2>
            <p className="contact-sub">
              Available for remote AI/ML evaluation, Python/FastAPI backend, and
              applied AI systems engineering engagements.
            </p>
            <div className="contact-links">
              <a className="button primary" href="mailto:altancelik35@gmail.com">
                altancelik35@gmail.com <Arrow />
              </a>
              <a
                className="button secondary"
                href="https://github.com/AltanCetinCelik"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/altan-celik-004bb1248/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>Altan Çetin Çelik</span>
          <span>AI systems · LLM evaluation · FastAPI · edge IIoT</span>
          <span>altancelik.dev</span>
        </footer>
      </div>
    </>
  );
}
