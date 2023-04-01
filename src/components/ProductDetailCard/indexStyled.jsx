import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 8px;
  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 16px;
    margin: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 450px;
  margin-right: 16px;
  object-fit: cover;

  ${media.tablet} {
    height: 300px;
    margin-right: 0;
    margin-bottom: 16px;
  }

  ${media.mobile} {
    height: 450px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 16px;
  flex-grow: 1;
  background: ${({ theme }) => theme.color.default};

  ${media.tablet} {
    margin-left: 0;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  text-align: left;

  ${media.tablet} {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  margin-top: 0;
  ${media.tablet} {
    font-size: 16px;
  }
`;

export const ProductRating = styled.p`
  font-size: 16px;
  margin: 0;
  ${media.tablet} {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  text-decoration: line-through;
  color: ${({ theme }) => theme.color.red};
  margin-right: 10px;
`;

export const AddToCartButton = styled.button`
  width: 40%;
  background-color: ${(props) =>
    props.added
      ? ({ theme }) => theme.color.green
      : ({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.default};
  border: 1px solid ${({ theme }) => theme.color.default};
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 30px;
  margin: 25px;
  cursor: pointer;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.7);
  }

  ${media.tablet} {
    margin-top: 40px;
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const NoReviewText = styled.div``;
export const ReviewItem = styled.div`
   display:flex;
   flex-direction:column;
   align-items: start;
   justify-content: center;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  padding 10px;
  background:${({ theme }) => theme.color.default};
`;

export const ReviewContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
`;

export const ReviewHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReviewUserName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const ReviewRating = styled.p`
  font-size: 16px;
`;

export const ReviewDescription = styled.p`
  font-size: 14px;
  padding-left: 50px;
  margin-top: 0;
`;
export const ReviewAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.pink};
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;
export const Price = styled.span``;
export const DiscountedPrice = styled.span`
   {
    font-weight: 600px;
  }
`;
