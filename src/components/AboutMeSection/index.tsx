import * as React from 'react';
import * as G from '@components/Shared';
import SvgBezier from '../SvgBezier';
import CoderSvg from './coderSvg';
import * as L from './styles';

const AboutMeSection: React.FC = () => (
  <L.Container id="about">
    <G.CenteredHeader>
      <h1>About Me</h1>
    </G.CenteredHeader>
    <L.SectionContainer>
      <G.SVGSectionWrapper>
        <CoderSvg />
      </G.SVGSectionWrapper>
      <L.CoderTextSection>
        <p id="brief_desc">
          I started coding with my friends when I was in 6th grade. Over time I
          learned various technologies and programming concept and started
          developing my own applications
        </p>
        <p id="iuse_desc">
          I primarily use the following technologies, tools and libraries:
        </p>
        <ul>
          <li>Rust</li>
          <li>SQL & NoSQL</li>
          <li>TypeScript</li>
          <li>Serverless</li>
          <li>React</li>
          <li>Vue</li>
          <li>GraphQL</li>
          <li>CI/CD systems</li>
        </ul>
      </L.CoderTextSection>
    </L.SectionContainer>
    <SvgBezier svgType={1} />
  </L.Container>
);

export default AboutMeSection;
