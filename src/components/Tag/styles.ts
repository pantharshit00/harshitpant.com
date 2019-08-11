import styled from 'styled-components';
import { rgba, rem, darken } from 'polished';

export interface ITagProps {
  color: string;
  textColor?: string;
}

export const Tag = styled.div<ITagProps>`
  padding: 0.2rem 1rem 0.2rem 0.5rem;
  border-radius: 1rem;
  display: inline-flex;
  box-shadow: 2px 2px 3.5px ${p => rgba(p.color, 0.3)};
  background: ${p => p.color};
  align-items: center;
  margin-right: 1rem;
  margin-top: 1rem;
  .tag__circle {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #fff;
  }
  .tag__text {
    margin-left: 0.5rem;
    font-size: ${rem('16px')};
    color: ${p => p.textColor || darken(0.3, p.color)};
  }
`;
