import styled from 'styled-components';
import { media } from '../../../styles/media';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${media.desktop} {
    flex-direction: row;
  }
`;
export const Logo = styled.img`
  height: 70px;
  padding-left: 10px;

  ${media.desktop} {
    margin-bottom: 0.5rem;
  }
`;
