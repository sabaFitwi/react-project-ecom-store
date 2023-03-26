import React from "react";
import SearchBar from "../Search";
import * as S from "./indexStyle";

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerText>Get 20% off your first order!</S.BannerText>
      <SearchBar />
    </S.BannerWrapper>
  );
};

export default Banner;
