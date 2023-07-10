import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Applayout.css";
import { Button, Menu } from "antd";
import logo from "../assets/logo.png";

import { useDispatch } from "react-redux";
import { logout } from "../slices/Auth";
import Navbar from "../components/Navbar";
import HeaderLayout from "../components/Header";
import SideBar from "../components/SideBar";
const AppLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="brand-header">
            <img src={logo} alt="itsm-logo" width="200px" />
          </div>
          <div>
            <Sider
              className="sidebar-layout mt-3"
              style={{ height: "85vh", marginLeft: "1vw" }}
            >
              <div className="container-fluid">
                <SideBar />
              </div>
            </Sider>
          </div>
        </div>

        <Layout>
          <HeaderLayout />
          <Content className="content-layout">
            <div className="container-fluid">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
