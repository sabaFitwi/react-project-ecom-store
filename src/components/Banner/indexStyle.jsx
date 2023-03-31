import styled from "styled-components";
import backgroundImage from "../../assets/banners.png";

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url(${backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 60px;
`;

export const BannerText = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;
