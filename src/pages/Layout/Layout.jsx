import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/Auth";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "../Layout/Layout.css";
import { Collapse } from "antd";
import { BsArrowDownCircle } from "react-icons/bs";
const Layout = () => {
  return (
    <>
      <div className="grid-layout">
        <header className="main-content">main content</header>
        <main className="main-layout"/>
        <aside class="aside-layout">sidebar</aside>
      </div>
      {/* <div className="grid-mainlayout">
        <div>asd</div>
      </div> */}
    </>
  );
};

export default Layout;
