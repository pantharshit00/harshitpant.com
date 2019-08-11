import styled from 'styled-components';

export const InlineSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: inherit;
  fill: currentColor;
  pointer-events: none;
  > g {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
  }
`;

export const SvgWrapper = styled.div<{ color: string }>`
  position: absolute;
  left: -6rem;
  right: -6rem;
  bottom: 0;
  z-index: 1;
  height: 240px;
  width: calc(100% + 6rem);
  display: inline-block;
  color: ${props => props.color};
  pointer-events: none;
  flex: none;
`;
