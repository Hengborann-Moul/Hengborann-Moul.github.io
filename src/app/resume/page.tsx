import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  ArrowLeft,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume',
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className={styles.skillBarRow}>
      <span className={styles.skillBarLabel}>{name}</span>
      <div className={styles.skillBarTrack}>
        <div
          className={styles.skillBarFill}
          style={{ width: `${level * 100}%` }}
        />
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}

function JobEntry({
  title,
  company,
  period,
  location,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
}) {
  return (
    <div className={styles.jobEntry}>
      <div className={styles.jobTitle}>{title}</div>
      <div className={styles.jobCompany}>{company}</div>
      <div className={styles.jobMeta}>
        <span><strong>Period:</strong> {period}</span>
        <span><strong>Location:</strong> {location}</span>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backBtn}>
        <ArrowLeft size={16} />
        Back
      </Link>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>Hengborann MOUL</h1>
        <p className={styles.title}>
          Senior Software Engineer, Data Engineering &amp; Visualization
        </p>

        <div className={styles.contactRow}>
          <a
            href="mailto:moulhengborann@gmail.com"
            className={styles.contactLink}
          >
            <Mail size={14} />
            moulhengborann@gmail.com
          </a>
          <span className={styles.contactItem}>
            <Phone size={14} />
            011836711
          </span>
          <a
            href="https://github.com/hengborann-moul"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <Globe size={14} />
            @hengborann-moul
          </a>
          <a
            href="https://www.linkedin.com/in/hengborann-moul"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <Globe size={14} />
            Hengborann MOUL
          </a>
          <span className={styles.contactItem}>
            <MapPin size={14} />
            Phnom Penh, Cambodia
          </span>
        </div>

        <a
          href="/Hengborann-CV.pdf"
          download
          className={styles.downloadBtn}
        >
          <Download size={16} />
          Download PDF
        </a>
      </header>

      {/* Summary */}
      <p className={styles.summary}>
        Highly skilled <strong>Software Engineer and Data Specialist</strong> offering{' '}
        <strong>6+ years</strong> of experience in delivering{' '}
        <strong>robust, scalable solutions</strong> across diverse industries,
        including <strong>Telecommunications, EdTech, and SaaS</strong>. Core
        technical competencies include <strong>Python, TypeScript, Angular, and
        React</strong>, underpinned by expertise in{' '}
        <strong>Machine Learning, system architecture, and modern data workflow
        design</strong>. Currently pursuing an{' '}
        <strong>M.Sc. in Data Science</strong> to specialize further in{' '}
        <strong>AI Software Engineering, Data Engineering, and Machine
        Learning</strong>.
      </p>

      {/* Two-column layout */}
      <div className={styles.columns}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <Section title="Experiences">
            <JobEntry
              title="Data Engineering & Visualization"
              company="CamGSM Co. Ltd (Cellcard)"
              period="May 2025 -- Jan 2026"
              location="Onsite -- Phnom Penh"
            />

            <div className={styles.subSection}>
              <p className={styles.subHeading}>
                + Leadership &amp; Strategic Impact
              </p>
              <ul className={styles.bulletList}>
                <li>
                  Led the <strong>end-to-end strategy and delivery</strong> of a
                  company-wide <strong>ETL/ELT data pipeline modernization</strong>{' '}
                  initiative, aligning engineering priorities with annual business
                  planning objectives and reducing{' '}
                  <strong>data-to-report latency</strong> by streamlining
                  source-to-BI workflows.
                </li>
                <li>
                  Served as the <strong>technical lead</strong> for{' '}
                  <strong>Customer Value Management analytics</strong>, translating
                  business requirements into actionable{' '}
                  <strong>data architectures</strong> and directing campaign design,
                  execution, and post-campaign performance evaluation cycles.
                </li>
                <li>
                  Defined the <strong>roadmap</strong> and championed the adoption
                  of the <strong>Model Context Protocol (MCP)</strong>, enabling the
                  team to build an <strong>Agentic Chatbot</strong> that delivers
                  accurate, real-time query responses from an internal mini data
                  warehouse.
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <p className={styles.subHeading}>+ Technical Delivery</p>
              <ul className={styles.bulletList}>
                <li>
                  Designed and implemented a{' '}
                  <strong>fully automated ETL/ELT pipeline</strong> that reliably
                  moves data from multiple source systems to{' '}
                  <strong>Power BI</strong>, enabling scalable, self-service BI
                  reporting.
                </li>
                <li>
                  Applied <strong>Machine Learning clustering models</strong> to
                  segment the customer base by usage patterns, delivering{' '}
                  <strong>personalized marketing insights</strong> that directly
                  increased product adoption metrics.
                </li>
              </ul>
            </div>

            <JobEntry
              title="Senior Software Engineer"
              company="Spiral PBKH Co., Ltd."
              period="November 2018 -- April 2025 (6.5 years)"
              location="Onsite -- Phnom Penh"
            />

            <div className={styles.subSection}>
              <p className={styles.subHeading}>
                + Technical Leadership &amp; Architecture Ownership
              </p>
              <ul className={styles.bulletList}>
                <li>
                  Owned the <strong>architecture and delivery</strong> of a scalable,
                  enterprise-grade <strong>Data Platform UI</strong>, enabling
                  end-to-end <strong>data governance</strong>, administration, and
                  monitoring workflows — coordinating requirements across product,
                  design, and backend teams.
                </li>
                <li>
                  Led the design and deployment of a{' '}
                  <strong>Kong API Gateway</strong> layer as a centralized middleware
                  solution, setting standards for{' '}
                  <strong>authentication enforcement</strong>, request governance,
                  and <strong>cross-service scalability</strong> across a distributed
                  microservices ecosystem.
                </li>
                <li>
                  Established and enforced{' '}
                  <strong>automated CI/CD pipeline standards</strong> across the
                  engineering team, reducing <strong>release cycle times</strong>,
                  decreasing production incidents, and building team confidence in
                  continuous delivery practices.
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <p className={styles.subHeading}>
                + People Leadership &amp; Mentorship
              </p>
              <ul className={styles.bulletList}>
                <li>
                  Drove a <strong>team-wide migration</strong> from legacy
                  authentication systems to{' '}
                  <strong>modern identity management standards</strong>, leading
                  planning, execution, and stakeholder communication — significantly
                  improving <strong>security posture</strong> and developer UX.
                </li>
                <li>
                  Championed <strong>engineering best practices</strong> through
                  rigorous <strong>peer code reviews</strong>, proactively
                  identifying improvements in security, performance, and clean
                  architecture — fostering a <strong>culture of quality</strong> and
                  continuous improvement.
                </li>
                <li>
                  Led <strong>cross-team collaboration</strong> to deliver a scalable{' '}
                  <strong>HR Management System (HRMS)</strong>, coordinating
                  requirements and delivery across local and{' '}
                  <strong>offshore teams in Japan</strong>.
                </li>
              </ul>
            </div>

            <div className={styles.subSection}>
              <p className={styles.subHeading}>
                + Strategic &amp; Cross-Functional Projects
              </p>
              <ul className={styles.bulletList}>
                <li>
                  Designed and delivered <strong>interactive BI dashboards</strong>{' '}
                  enabling <strong>data-driven decision-making</strong> across
                  business stakeholders — translating complex datasets into clear,{' '}
                  <strong>actionable visual insights</strong>.
                </li>
                <li>
                  Architected and shipped scalable{' '}
                  <strong>RESTful APIs</strong> within a{' '}
                  <strong>Java/Spring Boot microservice architecture</strong>,
                  implementing custom middleware plugins for{' '}
                  <strong>granular access control</strong> and security hardening.
                </li>
                <li>
                  Led the <strong>full-stack engineering</strong> of enterprise{' '}
                  <strong>Angular + TypeScript</strong> frontend platforms,
                  establishing <strong>modular architecture</strong> and type-safe
                  development standards adopted across multiple products.
                </li>
              </ul>
            </div>
          </Section>
        </div>

        {/* Right column */}
        <div className={styles.rightColumn}>
          <Section title="Objective">
            <p className={styles.paragraph}>
              Seeking to advance my skills and build a strong career with a company
              that values innovation and creativity, and sees the benefit of AI
              Integration.
            </p>
          </Section>

          <Section title="Education">
            <div className={styles.educationItem}>
              <strong>Institute of Technology of Cambodia</strong>
              <div>Phnom Penh, Cambodia</div>
              <div>M.Sc in Master of Engineering in Data Science</div>
            </div>
            <div className={styles.educationItem}>
              <strong>Kirirom Institute of Technology</strong>
              <div>Kampong Speu, Cambodia</div>
              <div>B.Sc in Software Engineering</div>
            </div>
          </Section>

          <Section title="Technical Expertise">
            <SkillBar name="Python" level={0.8} />
            <SkillBar name="Angular" level={0.85} />
            <SkillBar name="React" level={0.8} />
            <SkillBar name="TypeScript" level={0.8} />
            <SkillBar name="JavaScript" level={0.8} />
            <SkillBar name="Machine Learning" level={0.7} />
            <SkillBar name="Plotly" level={0.7} />
            <SkillBar name="Rust" level={0.5} />
            <SkillBar name="Java" level={0.5} />
            <SkillBar name="Spring Boot" level={0.65} />
            <SkillBar name="SQL" level={0.78} />
            <SkillBar name="Power BI" level={0.72} />
            <SkillBar name="Microsoft Fabric" level={0.6} />
          </Section>

          <Section title="Skills / Exposure">
            <p className={styles.tagParagraph}>
              Python • JavaScript • TypeScript • Angular • React • SCSS • Node.js •
              Express • PHP • Laravel • Java • Spring • Spring-boot • Spring-web-flow
              • MongoDB • AWS • Docker • Git • SQL • Keras • TensorFlow • PyTorch •
              Power BI • R
            </p>
          </Section>

          <Section title="Methodology / Approach">
            <p className={styles.tagParagraph}>
              Lean • Kanban • Design Thinking • Test-Driven Development • Pair
              Programming
            </p>
          </Section>

          <Section title="Tools">
            <p className={styles.tagParagraph}>
              Git • GitHub • Gitlab • Slack • Postman • Jupyter • Vim • Neovim •
              Gemini-CLI • Claude-CLI
            </p>
          </Section>

          <Section title="Certifications">
            <div className={styles.certItem}>
              <strong>Microsoft Data Visualization</strong>
              <p>
                Completed the program, focus on builds expertise in Power BI.
              </p>
            </div>
            <div className={styles.certItem}>
              <strong>IBM Data Engineering Professional Certificate</strong>
              <p>
                On-going 80% completed, focus on builds expertise in Data
                Engineering, Big Data, building Data Pipeline and Data Platform.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
