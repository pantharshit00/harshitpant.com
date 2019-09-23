import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Image: React.FC = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      placeholderImage: file(relativePath: { eq: "my_picture.png" }) {
        childImageSharp {
          fluid(maxWidth: 230, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <picture {...props}>
      <source
        srcSet={data.placeholderImage.childImageSharp.fluid.srcSetWebp}
        type="image/webp"
      />
      <source
        srcSet={data.placeholderImage.childImageSharp.fluid.srcSet}
        type="image/png"
      />
      <img
        alt="my_profile"
        src={data.placeholderImage.childImageSharp.fluid.src}
      />
    </picture>
  );
};

export default Image;
