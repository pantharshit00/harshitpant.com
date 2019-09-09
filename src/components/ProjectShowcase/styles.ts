import styled from 'styled-components';
import { Container as BaseContainer } from '@components/Shared';
import media from '@utils/media';

export const Container = styled(BaseContainer)`
  background: ${p => p.theme.colors.green[800]};
  padding-top: 8rem;
  padding-bottom: 18rem;
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  margin-bottom: 6rem;
  margin: 0 auto;
  max-width: 1330px;
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
