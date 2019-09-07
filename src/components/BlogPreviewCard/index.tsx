import * as React from 'react';
// import ProfileImage from '@components/Images/ProfilePic';
import Image from 'gatsby-image';
import { Link, navigate } from 'gatsby';
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
    <L.Container onClick={() => navigate(`/blog${slug}`)}>
      <L.Header>
        <h2>
          <Link to={`/blog${slug}`}>{title}</Link>
        </h2>
        <L.TagsContainer>
          <div className="tag__container--read">
            {readTime} minute{readTime > 1 ? 's' : ''} read
          </div>
          <div className="tag__container--tags">
            {tags.map(tag => (
              <Link
                onClick={e => {
                  // so that navigation to blog won't trigger an we can goto the tag
                  // this will stop event bubbling and we navigate won't be called on the root element of this component
                  e.stopPropagation();
                }}
                key={`tag-${title}-${tag}`}
                to={`/tag/${tag}`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </L.TagsContainer>
      </L.Header>
      <L.ExcerptSection>
        <p>{excerpt}</p>
      </L.ExcerptSection>
      <div>
        <Link to={`/blog${slug}`}>
          <Image fluid={coverImage} />
        </Link>
      </div>
    </L.Container>
  );
};

export default BlogPreviewCard;
