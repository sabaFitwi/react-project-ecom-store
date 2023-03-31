import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SuccessMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BackToStoreLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #0077cc;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #005fa3;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px 10px;
  }
`;
