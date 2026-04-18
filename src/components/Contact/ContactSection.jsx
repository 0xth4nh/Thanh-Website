import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Block, SectionTitle } from "../common/CommonStyles";
import { blogPosts } from "../../data/blogData";

const Post = styled(Link)`
  display: grid;
  grid-template-columns: 110px 1fr 120px 40px;
  gap: 24px;
  align-items: center;
  padding: 22px 32px;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
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
    letter-spacing: -.005em;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-self: start;
  }
  .tags span {
    font-size: 10.5px;
    color: var(--ink-dim);
    border: 1px solid var(--line-2);
    padding: 3px 8px;
  }
  .arr {
    color: var(--ink-dimmer);
    justify-self: end;
    transition: transform .18s, color .18s;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 20px 20px;
    .arr { display: none; }
  }
`;

const ContactSection = () => (
  <Block id="writing">
    <SectionTitle
      idx="§03 / WRITING"
      meta={`${blogPosts.length} ENTRIES`}
    />
    <div>
      {blogPosts.map((post) => (
        <Post key={post.id} to={`/blog/${post.id}`}>
          <div className="date">{post.date}</div>
          <div className="title">{post.title}</div>
          <div className="tags">
            {post.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="arr">→</div>
        </Post>
      ))}
    </div>
  </Block>
);

export default ContactSection;
