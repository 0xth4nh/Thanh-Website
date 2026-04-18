import React from "react";
import styled from "styled-components";
import { Block, SectionTitle } from "../common/CommonStyles";

const Job = styled.article`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  align-items: start;
  padding: 30px 32px;
  border-bottom: 1px solid var(--line);
  transition: background .2s;

  &:last-child { border-bottom: 0; }
  &:hover { background: var(--bg-1); }

  .when {
    font-size: 11px;
    color: var(--ink-dim);
    letter-spacing: .04em;
    padding-top: 4px;
  }
  .when .now {
    display: inline-block;
    margin-left: 6px;
    padding: 1px 6px;
    font-size: 9.5px;
    background: var(--ink);
    color: var(--bg);
    letter-spacing: .1em;
  }

  .core h3 {
    font-family: var(--sans);
    font-size: 20px;
    margin: 0 0 4px;
    font-weight: 500;
    letter-spacing: -.01em;
    color: var(--ink);
  }
  .core .co {
    font-family: var(--sans);
    font-size: 14px;
    color: var(--ink-dim);
    margin-bottom: 14px;
  }
  .core .co a {
    color: var(--ink);
    font-weight: 500;
    border-bottom: 1px solid var(--line-2);
    transition: border-color .2s;
  }
  .core .co a:hover { border-color: var(--ink); }
  .core p {
    font-family: var(--sans);
    font-size: 14.5px;
    color: var(--ink-dim);
    margin: 0;
    line-height: 1.6;
    max-width: 64ch;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 26px 20px;
  }
`;

const experiences = [
  {
    company: "Base",
    url: "https://www.base.org/",
    role: "SWE, Smart Contract Engineer",
    date: "2026 — INCOMING",
    location: "Chicago",
    desc: "Joining the Base protocol team to build and audit smart contracts powering Coinbase's L2 — wallet primitives, paymaster logic, and the infra between L1 and L2.",
    now: true,
  },
  {
    company: "Base",
    url: "https://www.base.org/",
    role: "Protocol Intern",
    date: "2025 · SUMMER",
    location: "Remote",
    desc: "Worked on protocol-level tooling for Base. Returned full-time after graduation.",
  },
  {
    company: "Infinifi",
    url: "https://infinifi.xyz/",
    role: "Founding Intern",
    date: "2025 · SPRING",
    location: "Remote",
    desc: "Early engineering on a DeFi yield protocol — contributed to contracts, testing, and deployment flow.",
  },
  {
    company: "Cambrian Network",
    url: "https://www.cambrian.org/",
    role: "Intern",
    date: "2024 · FALL",
    location: "Remote",
    desc: "On-chain data infrastructure — indexing and analytics plumbing.",
  },
  {
    company: "Semiotic Labs",
    url: "https://semiotic.ai/",
    role: "Intern",
    date: "2024 · FALL",
    location: "Remote",
    desc: "Research-flavored work at the intersection of ML and web3.",
  },
  {
    company: "Revest Finance",
    url: "https://revestlabs.com/",
    role: "Intern",
    date: "2024 · SUMMER",
    location: "Remote",
    desc: "Smart contract development on a DeFi primitives protocol.",
  },
  {
    company: "Revest Finance",
    url: "https://revestlabs.com/",
    role: "Intern",
    date: "2023 · SUMMER",
    location: "Remote",
    desc: "First internship in crypto — shipped contract work and learned how a small team ships fast.",
  },
];

const ExperienceSection = () => (
  <Block id="work">
    <SectionTitle idx="§02 / EXPERIENCE" />
    <div>
      {experiences.map((exp, i) => (
        <Job key={i}>
          <div className="when">
            {exp.date}
            {exp.now && <span className="now">NOW</span>}
          </div>
          <div className="core">
            <h3>{exp.role}</h3>
            <div className="co">
              <a href={exp.url} target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
              {" · "}
              {exp.location}
            </div>
            <p>{exp.desc}</p>
          </div>
        </Job>
      ))}
    </div>
  </Block>
);

export default ExperienceSection;
