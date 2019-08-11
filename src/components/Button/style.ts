import styled from 'styled-components';
import { rem } from 'polished';

export const Button = styled.button`
  border-radius: ${rem('8px')};
  background-color: ${p => p.theme.colors.green[800]};
  color: ${p => p.theme.colors.gray[100]};
  font-size: ${rem('24px')};
  border: none;
  padding: 0.25rem 1.25rem;
  cursor: pointer;
`;
