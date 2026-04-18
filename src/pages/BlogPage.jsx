import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import Navbar from "../components/Navbar";
import { Block, SectionTitle } from "../components/common/CommonStyles";
import { blogPosts } from "../data/blogData";

const Shell = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1120px;
  margin: 0 auto;
`;

const Lede = styled.div`
  padding: 96px 32px 72px;
  border-bottom: 1px solid var(--line);
  font-family: var(--sans);

  h1 {
    font-weight: 400;
    font-size: clamp(36px, 5vw, 60px);
    letter-spacing: -.03em;
    line-height: 1;
    margin: 0 0 18px;
  }
  p {
    color: var(--ink-dim);
    font-size: 16.5px;
    max-width: 60ch;
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 860px) { padding: 64px 20px 48px; }
`;

const Post = styled(Link)`
  display: grid;
  grid-template-columns: 110px 1fr 120px 40px;
  gap: 24px;
  align-items: center;
  padding: 22px 32px;
  border-bottom: 1px solid var(--line);
  transition: background .15s;
  color: var(--ink);

  &:last-child { border-bottom: 0; }
  &:hover { background: var(--bg-1); }
  &:hover .arr { transform: translateX(4px); color: var(--ink); }

  .date {
    color: var(--ink-dim);
    font-size: 11px;
    letter-spacing: .04em;
  }
  .title {
    font-family: var(--sans);
    font-size: 16.5px;
    color: var(--ink);
    font-weight: 500;
  }
  .excerpt {
    font-family: var(--sans);
    font-size: 13.5px;
    color: var(--ink-dim);
    line-height: 1.55;
    margin-top: 6px;
    max-width: 72ch;
  }
  .tag {
    font-size: 10.5px;
    color: var(--ink-dim);
    border: 1px solid var(--line-2);
    padding: 3px 8px;
    justify-self: start;
  }
  .arr {
    color: var(--ink-dimmer);
    justify-self: end;
    transition: transform .18s, color .18s;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 22px 20px;
    gap: 6px;
    .arr { display: none; }
  }
`;

const BlogPage = () => (
  <>
    <AnimatedBackground />
    <Navbar />
    <Shell>
      <Lede>
        <h1>writing.</h1>
        <p>
          Notes on smart contracts, system architecture, and the mechanical parts
          of crypto.
        </p>
      </Lede>
      <Block>
        <SectionTitle
          idx="§01 / POSTS"
          meta={`${blogPosts.length} ENTRIES`}
        />
        <div>
          {blogPosts.map((post) => (
            <Post key={post.id} to={`/blog/${post.id}`}>
              <div className="date">{post.date}</div>
              <div>
                <div className="title">{post.title}</div>
                <div className="excerpt">{post.excerpt}</div>
              </div>
              <div className="tag">{post.category}</div>
              <div className="arr">→</div>
            </Post>
          ))}
        </div>
      </Block>
    </Shell>
  </>
);

export default BlogPage;
