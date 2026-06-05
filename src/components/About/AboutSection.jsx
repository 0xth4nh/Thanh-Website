import React from "react";
import styled from "styled-components";
import { Block, SectionTitle } from "../common/CommonStyles";

const Body = styled.div`
  padding: 72px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 48px 20px;
  }
`;

const Copy = styled.div`
  font-family: var(--sans);
  font-size: 16.5px;
  line-height: 1.7;
  color: var(--ink);
  max-width: 56ch;

  p { margin: 0 0 20px; }
  p:last-child { margin-bottom: 0; }
  .dim { color: var(--ink-dim); }
  b { font-weight: 500; }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-self: start;
  border-top: 1px solid var(--line);

  .row {
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 16px;
    align-items: baseline;
  }
  .row .k {
    font-size: 10.5px;
    color: var(--ink-dimmer);
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .row .v {
    font-family: var(--sans);
    font-size: 15.5px;
    color: var(--ink);
  }
`;

const AboutSection = () => (
  <Block id="about">
    <SectionTitle idx="§01 / ABOUT" />
    <Body>
      <Copy>
        <p>
          Before joining Coinbase, I was at <b>Georgia Tech</b> studying CS with
          a thread in Systems Architecture and Theory, focusing on low-level
          systems and different kinds of proofs and algorithms. I was also a
          smart contract engineer for multiple crypto startups (seen below). In
          my free time, I'm handling everything technical at <b>College.XYZ</b>.
        </p>
        <p className="dim">
          Outside the terminal: I love to play FPS games, collecting watches,
          and occasionally writing about random stuff.
        </p>
      </Copy>
      <Meta>
        <div className="row"><div className="k">ROLE</div><div className="v">Software Engineer</div></div>
        <div className="row"><div className="k">COMPANY</div><div className="v">Coinbase · Base</div></div>
        <div className="row"><div className="k">EDUCATION</div><div className="v">Georgia Institute of Technology</div></div>
        <div className="row"><div className="k">FOCUS</div><div className="v">Smart contracts · EVM · L2</div></div>
        <div className="row"><div className="k">BASED</div><div className="v">Atlanta → Chicago</div></div>
      </Meta>
    </Body>
  </Block>
);

export default AboutSection;
