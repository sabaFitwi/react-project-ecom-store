import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  ${media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;
