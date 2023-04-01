import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.default};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 160px;
`;
