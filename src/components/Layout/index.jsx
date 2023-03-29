import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "./indexStyles";

function Layout() {
  return (
    <Content>
      <Header />
      <Outlet />
      <Footer />
    </Content>
  );
}
export default Layout;
