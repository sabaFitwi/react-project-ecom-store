import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductCard = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: auto;
  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.xs} {
    grid-template-columns: 1fr;
  }
`;
