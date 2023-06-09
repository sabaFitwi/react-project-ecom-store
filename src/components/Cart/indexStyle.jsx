import styled from "styled-components";
import { media } from "../../styles/media";

export const Wrapper = styled.div`
  margin: auto;
  padding: 10px;
  position: relative;
`;
export const PriceQtyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  align-items: start;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled"
      ? ({ theme }) => theme.color.primary
      : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
  justify-content: space-between;

  ${media.tablet} {
    grid-template-columns: 1fr;
    padding: 8px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  margin-top: 0;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 20px;
  margin: 0 5px;
`;

export const ProductPrice = styled.p`
  font-size: 15px;
  font-weight: 200;
  margin-top: 0;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
  padding: 20px;
  height: 100vh;
  position: sticky;
  top: 0;
  ${media.tablet} {
    height: auto;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "400"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.default};
  font-weight: 600;
`;

export const ClearButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.color.default};
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
`;
export const EmptyItem = styled.h2`
  font-size: 40px;
  margin: 30px, auto;
`;
