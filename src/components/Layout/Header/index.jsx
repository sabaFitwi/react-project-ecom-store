import React from 'react';
import Nav from '../../Navbar';
import { HeaderWrapper, Logo } from './HeaderStyle';
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />

      <Nav />
    </HeaderWrapper>
  );
}

export default Header;
