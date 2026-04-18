import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0a0a0a;
    --bg-1: #0e0e0e;
    --line: #1e1e1e;
    --line-2: #262626;
    --ink: #ececea;
    --ink-dim: #8a8a87;
    --ink-dimmer: #555552;
    --mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
    --sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--mono);
    font-size: 13px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }

  a { text-decoration: none; color: inherit; }

  ::selection { background: #ececea; color: #0a0a0a; }

  #root {
    max-width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .25; } }
  @keyframes blink { 50% { opacity: 0; } }
`;

export default GlobalStyle;
