import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      placeholderImage: file(relativePath: { eq: "my_picture.png" }) {
        childImageSharp {
          fluid(maxWidth: 291, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
