import * as React from 'react';
import BlogPreviewCard from '@components/BlogPreviewCard';
import * as G from '@components/Shared';

const BlogPreviewSection = () => {
  return (
    <G.Container>
      <G.CenteredHeader>
        <h1>Blog</h1>
      </G.CenteredHeader>
      <div>
        <BlogPreviewCard />
      </div>
    </G.Container>
  );
};

export default BlogPreviewSection;
