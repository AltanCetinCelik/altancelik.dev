const projects = [
  {
    label: "01 / Research",
    title: "SelectiveLLM",
    description:
      "Adaptive model-capacity orchestration for language models. Select, load, cache, and budget adapters, experts, models, and future model blocks instead of treating all available capacity as permanently resident.",
    href: "https://github.com/AltanCetinCelik/SelectiveLLM",
    tags: ["ML systems", "PEFT / LoRA", "adaptive inference", "routing"],
    featured: true,
    note: "Current focus: learned + calibrated capacity routing",
  },
  {
    label: "02 / Agents",
    title: "seed-showcase",
    description:
      "A dependency-free distillation of a local-first agent architecture with model routing, hybrid memory, approval gates, risk-aware capabilities, and recoverable self-editing.",
    href: "https://github.com/AltanCetinCelik/seed-showcase",
    tags: ["agents", "RAG", "guardrails", "local-first"],
  },
  {
    label: "03 / Edge",
    title: "Industrial systems",
    description:
      "Public engineering work around industrial telemetry, edge-side data handling, monitoring dashboards, backend services, and automation-oriented system design.",
    href: "https://github.com/AltanCetinCelik/My-Projects",
    tags: ["edge AI", "FastAPI", "telemetry", "IIoT"],
  },
  {
    label: "04 / Product",
    title: "luna-companion",
    description:
      "A stateful interactive web prototype exploring memory-driven UX, character interaction, responsive UI, and lightweight product architecture.",
    href: "https://github.com/AltanCetinCelik/luna-companion",
    tags: ["React", "TypeScript", "state", "product"],
  },
];

const capabilities = [
  "Adaptive inference",
  "Conditional computation",
  "Model / expert / adapter routing",
  "Agent orchestration",
  "RAG & memory systems",
  "Backend infrastructure",
  "Edge AI",
  "Industrial telemetry",
];

const stack = [
  ["Languages", "Python · TypeScript · C · C++ · SQL"],
  ["AI / ML", "PyTorch · Transformers · PEFT · RAG · LLM routing"],
  ["Systems", "FastAPI · Pydantic · Docker · Linux · WebSockets"],
  ["Edge", "Raspberry Pi · STM32 · ESP32 · MQTT · Modbus · OPC UA"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Altan Çetin Çelik",
    url: "https://altancelik.dev",
    sameAs: [
      "https://github.com/AltanCetinCelik",
      "https://www.linkedin.com/in/altan-celik-004bb1248/",
    ],
    jobTitle: "AI/ML Systems Engineer",
    knowsAbout: [
      "Adaptive inference",
      "Machine learning systems",
      "AI agents",
      "Edge AI",
      "Industrial IoT",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="site-shell">
        <header className="nav">
          <a className="wordmark" href="#top" aria-label="Altan Çetin Çelik home">
            AÇ
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#research">Research</a>
            <a href="#about">About</a>
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

        <main id="top">
          <section className="hero section">
            <div className="hero-kicker">
              <span className="status-dot" />
              Building SelectiveLLM
            </div>

            <h1>
              I build AI systems that decide
              <span className="muted"> what computation is actually needed.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-copy">
                I&apos;m Altan Çetin Çelik — an Electrical-Electronics Engineering
                student working across adaptive LLM inference, agent architecture,
                backend systems, and edge AI.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#work">
                  View selected work <span>↓</span>
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

            <div className="system-strip" aria-label="Current engineering focus">
              <div>
                <span className="eyebrow">Input</span>
                <strong>Request / state</strong>
              </div>
              <span className="flow-arrow">→</span>
              <div>
                <span className="eyebrow">Controller</span>
                <strong>Route · budget · abstain</strong>
              </div>
              <span className="flow-arrow">→</span>
              <div>
                <span className="eyebrow">Runtime</span>
                <strong>Minimum sufficient compute</strong>
              </div>
            </div>
          </section>

          <section className="section projects-section" id="work">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2>Systems, not isolated demos.</h2>
              </div>
              <p>
                I like projects where architecture, runtime behavior, measurement,
                and failure modes are visible — not hidden behind a polished output.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <a
                  key={project.title}
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-top">
                    <span className="eyebrow">{project.label}</span>
                    <span className="project-arrow">
                      <Arrow />
                    </span>
                  </div>

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  {project.note ? <p className="project-note">{project.note}</p> : null}

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </a>
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
                context, tool, or escalation path for the request in front of it.
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
                  separable enough to inspect and replace.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Real baselines</h3>
                <p>
                  Compare against simple controls before treating a more complex
                  mechanism as an improvement.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Failure is evidence</h3>
                <p>
                  Preserve null and contradictory results instead of optimizing the
                  story around a demo.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Human control</h3>
                <p>
                  High-impact actions should expose approval, fallback, and
                  abstention paths rather than assume autonomy is always desirable.
                </p>
              </article>
            </div>
          </section>

          <section className="section about-section" id="about">
            <div className="about-copy">
              <span className="eyebrow">About</span>
              <h2>
                Electrical engineering background.
                <br />
                Software-first execution.
              </h2>
              <p>
                My work spans ML systems, agents, backend infrastructure, and
                hardware-adjacent edge systems. I&apos;m especially interested in the
                layer between a model&apos;s capability and the runtime decisions that
                make that capability practical.
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
          </section>

          <section className="section contact-section">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s build something that has to work outside a demo.</h2>
            <div className="contact-links">
              <a
                href="https://github.com/AltanCetinCelik"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/altan-celik-004bb1248/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a href="mailto:altancelik35@gmail.com">
                Email <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>Altan Çetin Çelik</span>
          <span>AI/ML systems · adaptive inference · edge AI</span>
          <span>altancelik.dev</span>
        </footer>
      </div>
    </>
  );
}
