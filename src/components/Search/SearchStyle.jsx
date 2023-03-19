import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

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

  @media (max-width: 768px) {
    height: ${(props) => (props.isVisible ? '40px' : '0')};
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    margin: ${(props) => (props.isVisible ? '5px 0' : '0')};
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

// export const DropdownItem = styled.div`
//   padding: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #f5f5f5;
//   }
// `
// export const SearchBarContainer1 = styled.div`
//   position: relative;
// `;

// export const SearchIcon1 = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 10px;
//   width: 20px;
//   height: 20px;
//   background-image: url('/path/to/search-icon.svg');
//   background-repeat: no-repeat;
//   background-size: contain;
//   cursor: pointer;
// `;

// export const SearchInput1 = styled.input`
//   padding: 10px 10px 10px 40px;
//   width: 100%;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   transition: all 0.3s ease;

//   ${({ isVisible }) =>
//     !isVisible &&
//     `
//     height: 0;
//     padding: 0;
//     border: none;
//     overflow: hidden;
//   `}
// `;
