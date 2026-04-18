import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import Navbar from "../components/Navbar";
import { blogContent } from "../data/blogData";

const Shell = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1120px;
  margin: 0 auto;
`;

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 40px 80px;
  font-family: var(--sans);

  @media (max-width: 960px) { padding: 40px 24px 60px; }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-dim);
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: 36px;
  transition: color .2s;

  &::before { content: "←"; }
  &:hover { color: var(--ink); }
`;

const Header = styled.header`
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);

  h1 {
    font-family: var(--sans);
    color: var(--ink);
    font-size: clamp(30px, 4vw, 44px);
    font-weight: 500;
    letter-spacing: -.02em;
    line-height: 1.1;
    margin: 0 0 18px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-dim);
  letter-spacing: .04em;

  span {
    border: 1px solid var(--line);
    padding: 3px 8px;
  }
`;

const Content = styled.div`
  color: var(--ink-dim);
  line-height: 1.75;
  font-size: 16px;

  p { margin: 0 0 18px; }
  h2 {
    color: var(--ink);
    font-family: var(--sans);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -.01em;
    margin: 40px 0 16px;
  }
  h3 {
    color: var(--ink);
    font-family: var(--sans);
    font-size: 18px;
    font-weight: 500;
    margin: 28px 0 12px;
  }
  ul, ol { margin: 0 0 20px; padding-left: 22px; }
  li { margin-bottom: 8px; }
  strong, b { color: var(--ink); font-weight: 500; }

  a {
    color: var(--ink);
    border-bottom: 1px solid var(--line-2);
    transition: border-color .2s;
  }
  a:hover { border-color: var(--ink); }

  code {
    background: var(--bg-2);
    color: var(--ink);
    border: 1px solid var(--line);
    padding: 1px 6px;
    font-family: var(--mono);
    font-size: .9em;
  }
  pre {
    background: var(--bg-1);
    border: 1px solid var(--line);
    padding: 16px;
    overflow-x: auto;
    margin: 0 0 20px;
    code { background: none; border: 0; padding: 0; }
  }
  blockquote {
    border-left: 2px solid var(--ink);
    padding-left: 16px;
    margin: 20px 0;
    color: var(--ink-dim);
  }
`;

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <>
        <AnimatedBackground />
        <Navbar />
        <Shell>
          <Article>
            <BackLink to="/blog">Back to Blog</BackLink>
            <Header><h1>Post Not Found</h1></Header>
            <Content><p>Sorry, the blog post you're looking for doesn't exist.</p></Content>
          </Article>
        </Shell>
      </>
    );
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Shell>
        <Article>
          <BackLink to="/blog">Back to Blog</BackLink>
          <Header>
            <h1>{post.title}</h1>
            <Meta>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.category}</span>
            </Meta>
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </Article>
      </Shell>
    </>
  );
};

export default BlogPostPage;
