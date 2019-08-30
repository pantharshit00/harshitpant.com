import * as React from 'react';
import BlogPreviewCard from '@components/BlogPreviewCard';
import * as G from '@components/Shared';

const BlogPreviewSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <G.Container>
      <G.CenteredHeader>
        <h1>Blog</h1>
      </G.CenteredHeader>
      <div>
        {data.map((blog: any) => (
          <BlogPreviewCard
            key={blog.id}
            title={blog.frontmatter.title}
            readTime={blog.timeToRead}
            excerpt={blog.excerpt}
            coverImage={blog.frontmatter.cover.childImageSharp.fluid}
            slug={blog.fields.slug}
            tags={blog.frontmatter.tags}
          />
        ))}
      </div>
    </G.Container>
  );
};

export default BlogPreviewSection;
