import React from "react";
import styled from "styled-components";

export const Block = styled.section`
  border-bottom: 1px solid var(--line);
`;

const SecHead = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 1px solid var(--line);
  font-size: 11px;
  color: var(--ink-dim);
  letter-spacing: .14em;
  text-transform: uppercase;

  .idx {
    color: var(--ink);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .idx .sq {
    width: 7px; height: 7px;
    background: var(--ink);
  }
  .name {
    font-family: var(--sans);
    font-size: 13px;
    letter-spacing: .02em;
    text-transform: none;
    color: var(--ink);
  }
  .meta { color: var(--ink-dim); }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 14px 20px;
    gap: 6px;
  }
`;

export const SectionTitle = ({ idx, name, meta = "—" }) => (
  <SecHead>
    <div className="idx"><span className="sq" />{idx}</div>
    <div className="name">{name}</div>
    <div className="meta">{meta}</div>
  </SecHead>
);

export const StyledLink = styled.a`
  color: var(--ink);
  font-weight: 500;
  border-bottom: 1px solid var(--line-2);
  transition: border-color .2s;
  margin: 0 2px;

  &:hover { border-color: var(--ink); }
`;

export const StyledSpan = styled.span`
  color: var(--ink);
  font-weight: 500;
  border-bottom: 1px dashed var(--line-2);
  margin: 0 2px;
`;
