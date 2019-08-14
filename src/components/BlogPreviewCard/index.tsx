import * as React from 'react';
import ProfileImage from '@components/Images/ProfilePic';
import * as L from './styles';

const BlogPreviewCard = () => {
  return (
    <L.Container>
      <L.Header>
        <h2>
          <a href="/link-to-article">
            JSON Web Token Authentication in React and react-router
          </a>
        </h2>
        <L.TagsContainer>
          <div className="tag__container--read">30 minute read</div>
          <div className="tag__container--tags">
            <a href="/react">#react</a>
            <a href="/auth">#auth</a>
          </div>
        </L.TagsContainer>
      </L.Header>
      <L.ExcerptSection>
        <p>
          In a previous blog I showed you guys how to make a JSON Web Token
          Authentication Server. You can find that article here. Now in this
          blog post I am going to show [...]
        </p>
      </L.ExcerptSection>
      <div>{/* <ProfileImage /> */}</div>
    </L.Container>
  );
};

export default BlogPreviewCard;
