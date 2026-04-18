import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  padding: 48px 32px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  font-size: 12px;
  color: var(--ink-dim);
  border-top: 1px solid var(--line);

  .col b {
    display: block;
    color: var(--ink-dimmer);
    font-weight: 400;
    letter-spacing: .16em;
    text-transform: uppercase;
    font-size: 10.5px;
    margin-bottom: 14px;
  }
  .col a {
    display: block;
    color: var(--ink);
    margin-bottom: 6px;
    transition: color .15s;
  }
  .col a:hover { color: var(--ink-dim); }

  .last {
    justify-self: end;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .last .sig {
    font-family: var(--sans);
    color: var(--ink);
    font-size: 14px;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    .last { justify-self: flex-start; text-align: left; }
  }
`;

const FooterSection = () => (
  <Foot id="contact">
    <div className="col">
      <b>ELSEWHERE</b>
      <a href="mailto:me@thanh.sh">me@thanh.sh</a>
      <a href="https://x.com/0xthanh" target="_blank" rel="noopener noreferrer">twitter</a>
      <a href="https://github.com/0xth4nh" target="_blank" rel="noopener noreferrer">github</a>
      <a href="https://www.linkedin.com/in/thanhtrinh03/" target="_blank" rel="noopener noreferrer">linkedin</a>
    </div>
    <div className="last">
      <div className="sig">— thanh</div>
      <div>2025 · handwritten</div>
    </div>
  </Foot>
);

export default FooterSection;
