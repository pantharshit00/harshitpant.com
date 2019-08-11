import styled from 'styled-components';
import { rem } from 'polished';

export const Card = styled.div`
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  border-radius: ${rem('20px')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
`;

export const Logo = styled.div`
  > svg {
    width: 110px;
    height: 40px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Spacer = styled.div`
  flex: 1 1 0%;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;

export const Li = styled.li`
  font-size: ${rem('16px')};
  color: ${p => p.theme.colors.gray[700]};
  line-height: ${rem('24px')};
  display: flex;
  margin-bottom: 1.5rem;
  & > svg {
    margin-right: 1.5rem;
    height: 1.75rem;
    width: 1.75rem;
  }
  & > span {
    flex: 1 1 0;
  }
`;

export const ListContainer = styled.div`
  margin-top: 2rem;
`;

export const Links = styled.div`
  display: flex;
  a {
    margin: 0 0.5rem;
    color: ${p => p.theme.colors.gray[800]};
    transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    > svg {
      transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    :hover {
      color: ${p => p.theme.colors.gray[900]};
      > svg {
        transform: scale(1.2);
      }
    }
  }
`;
