import React, { useCallback } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IconBase } from "react-icons/lib";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/Auth";
import LogoutAndProfile from "./Logout-and-profile";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "20px",
        lineHeight: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "10px",
          lineHeight: "0px",
        }}
      >
        <div>My Task</div>
        <div>Dashboard</div>
        <div>Search Issue</div>
        <div>Profile</div>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        lineHeight: "0px",
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            lineHeight: "0px",
            rowGap: "16px",
            position: "relative",
            textAlign: "right",

          }}
        >
          <span>SUPER MAN</span>
          <span>super.admin@gmail.com</span>
        </div>
        <div  className="logout" style={{cursor: "pointer"}}>
          <IconBase size={52} markerHeight={2}>
            {<HiOutlineUserCircle size={52} />}
          </IconBase>
          <LogoutAndProfile/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
