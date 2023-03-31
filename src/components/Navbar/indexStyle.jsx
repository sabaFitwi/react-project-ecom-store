import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../styles/media";

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: right;
  position: relative;
`;

export const NavigationItem = styled(Link)`
  margin: 0 5px;
  color: #333;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
  &.active {
    background-color: red;
  }

  ${media.mobile} {
    margin: 8px 0;
    color: #fff;
    z-index: 1;
  }
`;

export const ShoppingCartIcon = styled(Link)`
  padding: 0 8px;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-left: 60px;

  ${media.mobile} {
    margin-left: 8px;
  }
`;

export const CartIcon = styled.span`
  font-size: 19px;
`;
export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ff4d4f;
  color: #fff;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  ${media.mobile} {
    display: block;
    position: relative;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  ${media.mobile} {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    right: 0;
    left:0
    z-index: 1;
    background-color: #333;
    padding: 40px 16px;
  }
`;

export const ShoppingBag = styled.button`
  border: none;
  font-size: 20px;
`;
