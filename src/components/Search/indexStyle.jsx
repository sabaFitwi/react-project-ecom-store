import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { media } from "../../styles/media";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;

  border-radius: 5px;
  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    padding: 10px;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid lightgrey;
  background-color: transparent;
  font-size: 16px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 5px;

  &:focus {
    outline: none;
  }

  ${media.tablet} {
    height: ${(props) => (props.isVisible ? "40px" : "0")};
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    margin: ${(props) => (props.isVisible ? "5px 0" : "0")};
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  fill: #333;
  margin-right: 5px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
export const SearchImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
`;
export const SearchDivWrap = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 10px;
`;

export const SearchResultContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
`;
export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;

  ${({ showDropdown }) =>
    !showDropdown &&
    `
    height: 0;
    padding: 0;
    border: none;
    overflow: hidden;
  `}
`;

export const NoSearchResult = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 10px;
`;
export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #333;
  }
`;
