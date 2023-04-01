import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../styles/media";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  ${media.tablet} {
    padding: 10px;
  }
`;

export const SuccessMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const BackToStoreLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: black;
  }
  ${media.tablet} {
    font-size: 1rem;
    padding: 5px 10px;
  }
`;
