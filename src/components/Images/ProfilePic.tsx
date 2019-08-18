import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';

const Image: React.FC<GatsbyImageProps> = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      placeholderImage: file(relativePath: { eq: "my_picture.png" }) {
        childImageSharp {
          fluid(maxWidth: 230, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />;
};

export default Image;
