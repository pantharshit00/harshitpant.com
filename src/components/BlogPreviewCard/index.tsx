import * as React from 'react';
// import ProfileImage from '@components/Images/ProfilePic';
import Image from 'gatsby-image';
import * as L from './styles';

export interface IBlogPreviewCardProps {
  title: string;
  readTime: number;
  excerpt: string;
  coverImage: any;
  slug: string;
  tags: string[];
}

const BlogPreviewCard: React.FC<IBlogPreviewCardProps> = ({
  title,
  readTime,
  excerpt,
  coverImage,
  tags,
  slug,
}) => {
  return (
    <L.Container>
      <L.Header>
        <h2>
          <a href={`/blog${slug}`}>{title}</a>
        </h2>
        <L.TagsContainer>
          <div className="tag__container--read">
            {readTime} minute{readTime > 1 ? 's' : ''} read
          </div>
          <div className="tag__container--tags">
            {tags.map(tag => (
              <a key={`tag-${title}-${tag}`} href={`/tag/${tag}`}>
                #{tag}
              </a>
            ))}
          </div>
        </L.TagsContainer>
      </L.Header>
      <L.ExcerptSection>
        <p>{excerpt}</p>
      </L.ExcerptSection>
      <div>
        <Image fluid={coverImage} />
      </div>
    </L.Container>
  );
};

export default BlogPreviewCard;
