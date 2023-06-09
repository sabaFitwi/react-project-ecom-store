import styled from "styled-components";
import { media } from "../../../styles/media";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
  padding: 20px;
`;
export const Logo = styled.img`
  width: 250px;
  height: auto;
  padding-left: 10px;
  ${media.tablet} {
    width: 170px;
  }
  ${media.mobile} {
    width: 150px;
  }
`;
