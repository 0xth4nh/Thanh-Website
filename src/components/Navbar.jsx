import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  border-bottom: 1px solid var(--line);
  padding: 18px 32px;
  font-size: 12px;
  position: sticky;
  top: 0;
  z-index: 19;
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr auto;
    padding: 14px 20px;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);

  b {
    letter-spacing: .06em;
    font-weight: 500;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 24px;
  justify-self: center;

  a {
    color: var(--ink-dim);
    transition: color .15s;
  }
  a:hover, a.active { color: var(--ink); }

  @media (max-width: 860px) { display: none; }
`;

const Meta = styled.div`
  justify-self: end;
  color: var(--ink-dim);
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 10px;

  .dot {
    width: 6px;
    height: 6px;
    background: var(--ink);
    border-radius: 50%;
    animation: pulse 1.8s infinite;
  }

  @media (max-width: 860px) { display: none; }
`;

const NAV_IDS = ["about", "work", "writing", "contact"];

const useScrollSpy = () => {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 160;
      let cur = "about";
      NAV_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
};

const Navbar = () => {
  const active = useScrollSpy();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <NavWrap>
      <Brand to="/"><b>THANH.SH</b></Brand>
      <Links>
        {onHome ? (
          NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {id}
            </a>
          ))
        ) : (
          <>
            <Link to="/">home</Link>
            <Link to="/blog" className="active">blog</Link>
          </>
        )}
      </Links>
      <Meta>
        <span className="dot" />
        <span>available</span>
      </Meta>
    </NavWrap>
  );
};

export default Navbar;
