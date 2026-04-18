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
    desc: "Joining full-time to keep building smart contracts on Base — continuing the work I started last summer.",
    now: true,
  },
  {
    company: "Base",
    url: "https://www.base.org/",
    role: "Software Engineer Intern · Protocol",
    date: "2025 · SUMMER",
    location: "Remote",
    desc: "I built a smart contract verification tool the Base Foundation uses to validate contracts before they ship, and worked on the early Base-side pieces of the Base ↔ Solana bridge — including the ISM verification flow.",
  },
  {
    company: "Infinifi",
    url: "https://infinifi.xyz/",
    role: "Blockchain Developer Intern",
    date: "2025 · SPRING",
    location: "Remote",
    desc: "I designed an internal yield calculator the BD team uses daily to optimize user deposits and lock duration, and helped design + ship the protocol's smart contracts from scratch — through Spearbit, Cantina, and Certora audit rounds.",
  },
  {
    company: "Cambrian Network",
    url: "https://www.cambrian.org/",
    role: "Blockchain Developer Intern",
    date: "2024 · FALL",
    location: "Remote",
    desc: "I built a working demo of Cambrian's new data indexor — feeding volatility data into a Uniswap V4 hook for a dynamic-fee AMM.",
  },
  {
    company: "Semiotic Labs",
    url: "https://semiotic.ai/",
    role: "Blockchain Developer Intern",
    date: "2024 · FALL",
    location: "Remote",
    desc: "I designed and implemented Optimistically Verifiable Commitments (OVC) in Solidity for The Graph — enabling automated dispute resolution through on-chain refereed and bisection games.",
  },
  {
    company: "Revest Finance",
    url: "https://revestlabs.com/",
    role: "Blockchain Developer Intern",
    date: "2024 · SUMMER",
    location: "Atlanta, GA",
    desc: "I shipped a liquid wrapper on Frax Finance's veFXS and veFPIS (Financial NFTs on Fraxtal) so users can borrow, lend, or exit early on their locked positions — and built DeFi treasury-bill integrations that brought ~$2M in TVL.",
  },
  {
    company: "Revest Finance",
    url: "https://revestlabs.com/",
    role: "Blockchain Developer Intern",
    date: "2023 · SUMMER",
    location: "Atlanta, GA",
    desc: "My first crypto internship — I learned smart contracts here. Designed a new staking system based on Curve's Vested Escrow that factors in user loyalty (not just lock time), and architected a full on-chain metadata manager for Financial NFTs.",
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
