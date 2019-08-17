import * as React from 'react';
import theme from '@utils/theme';
import * as L from './styles';

interface ISVGBezierProps {
  color?: string;
  svgType: number;
}

const SvgBezier: React.FC<ISVGBezierProps> = props => {
  const { color = theme.colors.green[800], svgType } = props;
  const svgData = React.useMemo(() => {
    switch (svgType) {
      case 1:
        return (
          <g>
            <path d="M1920,144.532l0,95.468l-1920,0l0,-84c90.5,58 780,52.5 980,52.5c200,0 547.69,-52.5 634,-52.5c86.31,0 152,52.5 306,-11.468Z" />
            <path d="M1485.5,159.333c18.37,-1.773 39.53,-7.468 38.5,-11.193c-1.03,-3.726 -15.25,-3.812 -39.5,-1.64c-24.25,2.172 -37.8,5.5 -36,12c1.8,6.5 18.63,2.607 37,0.833Z" />
            <path d="M1549.19,145.713c0.34,1.34 -1.57,2.969 -4.24,3.639c-2.68,0.67 -5.13,0.127 -5.46,-1.212c-0.34,-1.34 1.56,-2.969 4.24,-3.639c2.68,-0.67 5.13,-0.127 5.46,1.212Z" />
          </g>
        );
      case 2:
        return (
          <g>
            <path d="M1920,170.408l0,69.59l-1920,0l0,-70.108c16.912,-0.457 41.496,5.326 78.75,14.089c34.06,8.012 78.712,18.516 137.771,29.019c97.689,17.373 151.251,-7.434 204.304,-32.005c40.085,-18.565 79.879,-36.995 138.196,-36.995c42.888,0 96.297,12.473 159.528,27.24c136.535,31.888 318.871,74.47 539.971,25.26c240.59,-53.548 479.8,-56.485 661.48,-26.09Z" />
            <path d="M567.439,130.592c-0.66,3.489 7.503,4.22 19.289,5.275c7.461,0.668 16.373,1.466 25.419,3.176c7.616,1.44 14.477,3.149 20.302,4.599c12.022,2.995 19.63,4.889 20.356,1.051c1.077,-5.698 -17.179,-15.46 -40.514,-19.871c-23.335,-4.411 -43.775,0.072 -44.852,5.77Z" />
          </g>
        );
      case 3:
        return (
          <g>
            <path d="m1920 157.624v82.231h-1920v-106.045c54.693-9.327 89 45.297 242 56.045s265.5-30.5 411-30.5 603 131.5 1267-1.731z" />
            <path d="m573 121.5c2.5 12.5-68.5 37-148 44.5s-108.103.808-107-5c1.537-8.094 89.5-14.365 136.5-22.5s116-29.5 118.5-17z" />
          </g>
        );
      default:
        return null;
    }
  }, [svgType]);

  return (
    <L.SvgWrapper color={color}>
      <L.InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title"
        viewBox="0 0 1920 240"
      >
        <title id="title">svg bezier</title>
        {svgData}
      </L.InlineSvg>
    </L.SvgWrapper>
  );
};

export default SvgBezier;
