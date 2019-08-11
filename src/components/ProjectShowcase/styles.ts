import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';

export const Container = styled(BaseContainer)`
  background: ${p => p.theme.colors.green[800]};
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 6rem;
`;
