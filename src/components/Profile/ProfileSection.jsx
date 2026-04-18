import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Hero = styled.section`
  padding: 120px 32px 100px;
  border-bottom: 1px solid var(--line);

  @media (max-width: 860px) {
    padding: 72px 20px 64px;
  }
`;

const Eyebrow = styled.div`
  font-size: 11px;
  color: var(--ink-dim);
  letter-spacing: .22em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  .live {
    width: 6px;
    height: 6px;
    background: var(--ink);
    border-radius: 50%;
    animation: pulse 1.8s infinite;
  }
`;

const Headline = styled.h1`
  font-family: var(--sans);
  font-weight: 400;
  font-size: clamp(44px, 6.4vw, 84px);
  line-height: 1.02;
  letter-spacing: -.035em;
  margin: 0 0 32px;
  max-width: 18ch;

  .dim { color: var(--ink-dimmer); }
  .cursor {
    display: inline-block;
    width: .46em;
    height: .86em;
    background: var(--ink);
    vertical-align: -.04em;
    margin-left: .08em;
    animation: blink 1.1s steps(1) infinite;
  }
`;

const Sub = styled.p`
  font-family: var(--sans);
  font-size: 17px;
  color: var(--ink-dim);
  max-width: 54ch;
  line-height: 1.6;
  margin: 0;

  b { color: var(--ink); font-weight: 500; }
  a {
    color: var(--ink);
    border-bottom: 1px solid var(--line-2);
    transition: border-color .2s;
  }
  a:hover { border-color: var(--ink); }
`;

const PHRASES = [
  "ship things that work.",
  "make things efficient.",
  "love complicated problems.",
];

const useTypingHeadline = () => {
  const [text, setText] = useState("");
  const stateRef = useRef({ pi: 0, ci: 0, dir: 1 });

  useEffect(() => {
    let timeout;
    const step = () => {
      const st = stateRef.current;
      const phrase = PHRASES[st.pi];
      st.ci += st.dir;
      setText(phrase.slice(0, st.ci));
      if (st.dir > 0 && st.ci === phrase.length) {
        st.dir = 0;
        timeout = setTimeout(() => {
          st.dir = -1;
          step();
        }, 2400);
        return;
      }
      if (st.dir < 0 && st.ci === 0) {
        st.dir = 1;
        st.pi = (st.pi + 1) % PHRASES.length;
      }
      timeout = setTimeout(step, st.dir > 0 ? 62 : 32);
    };
    step();
    return () => clearTimeout(timeout);
  }, []);
  return text;
};

const ProfileSection = () => {
  const typed = useTypingHeadline();
  return (
    <Hero id="hero">
      <Eyebrow><span className="live" />SWE · COINBASE / BASE · ATL→CHI</Eyebrow>
      <Headline>
        <span className="dim">I </span>{typed}<span className="cursor" />
      </Headline>
      <Sub>
        <b>Thanh Trinh</b> — incoming software engineer building smart contracts &amp; on-chain
        infrastructure on <a href="https://www.base.org/" target="_blank" rel="noopener noreferrer"><b>Base</b></a> at{" "}
        <b>Coinbase</b>. Recently graduated from <b>Georgia Tech</b>.
      </Sub>
    </Hero>
  );
};

export default ProfileSection;
