import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.section`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.h1`
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerText>Get 20% off your first order!</BannerText>
    </BannerWrapper>
  );
};

export default Banner;
