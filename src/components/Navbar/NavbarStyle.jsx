import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/media';
export const NavigationBar = styled.nav`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: right;

  ${media.desktop} {
    padding: 1rem;
  }
`;

export const NavigationItem = styled(Link)`
  margin: 0 1rem;
  color: black;
  text-decoration: none;

  ${media.desktop} {
    margin: 0.5rem 0;
  }
`;

export const ShoppingCartIcon = styled.div`
  margin: 0 1rem;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: relative;
  margin-left: 60px ${media.desktop} {
    margin: 0.5rem 0;
  }
`;

export const CartIcon = styled.span`
  font-size: 1.2rem;
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
  font-size: 0.8rem;
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  ${media.desktop} {
    display: block;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.desktop} {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;

    background-color: #333;
    padding: 0.5rem 1rem;
  }
`;

export const ShoppingBag = styled.button`
  border: none;
  font-size: 20px;
`;
