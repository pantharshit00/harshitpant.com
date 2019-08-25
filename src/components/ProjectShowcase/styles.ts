import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';
import media from '@utils/media';

export const Container = styled(BaseContainer)`
  background: ${p => p.theme.colors.green[800]};
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 6rem;
  ${media.bigDesktop`
   display: flex;
   flex-direction: column;
   > div {
     ${media.bigDesktop`
      margin-bottom: 4rem;
     `}
   }
  `}
`;
