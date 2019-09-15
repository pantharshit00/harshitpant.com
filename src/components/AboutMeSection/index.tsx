import * as React from 'react';
import * as G from '@components/Shared';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import { useSpring, animated, config } from 'react-spring';
import SvgBezier from '../SvgBezier';
import CoderSvg from './coderSvg';
import * as L from './styles';

const AboutMeSection = () => {
  const node = React.useRef(null);
  const { isVisible } = useVisibilitySensor(node, {
    intervalCheck: false,
    partialVisibility: true,
    scrollCheck: true,
    resizeCheck: true,
  });

  const fade = useSpring({
    transform: isVisible ? 'translateY(0)' : 'translateY(-45px)',
    opacity: isVisible ? 1 : 0,
    config: config.slow,
  });
  const slideRight = useSpring({
    transform: isVisible ? 'translateX(0)' : 'translateX(-45px)',
    opacity: isVisible ? 1 : 0,
    config: config.slow,
  });
  return (
    <L.Container ref={node} id="about">
      <G.CenteredHeader>
        <h1>{JSON.stringify(isVisible)}</h1>
      </G.CenteredHeader>
      <L.SectionContainer>
        <G.SVGSectionWrapper>
          <CoderSvg />
        </G.SVGSectionWrapper>
        <L.CoderTextSection>
          <animated.p id="brief_desc" style={fade}>
            I started coding with my friends when I was in 6th grade. Over time
            I learned various technologies and programming concept and started
            developing my own applications
          </animated.p>

          <animated.p style={slideRight} id="iuse_desc">
            I primarily use the following technologies, tools and libraries:
          </animated.p>
          <ul>
            <li>Javascript</li>
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
};

export default AboutMeSection;
