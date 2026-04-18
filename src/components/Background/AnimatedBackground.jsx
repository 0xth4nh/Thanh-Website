import React from "react";
import styled from "styled-components";

const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: var(--bg);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(255,255,255,.014) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.014) 1px, transparent 1px);
    background-size: 56px 56px;
    -webkit-mask-image: radial-gradient(ellipse at 50% 20%, #000 30%, transparent 85%);
            mask-image: radial-gradient(ellipse at 50% 20%, #000 30%, transparent 85%);
  }
`;

const AnimatedBackground = () => <PageBackground />;

export default AnimatedBackground;
