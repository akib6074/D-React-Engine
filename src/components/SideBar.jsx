import { Menu } from "antd";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const theme = {
    primaryColor: "#1890ff",
  };
  const navigate = useNavigate();
  const items = [
    {
      label: "DashBoard",
      key: "dashboard",
      icon: <AiOutlineAppstore size={24} />,
    },
    {
      label: "All Issues",
      key: "all-issues",
      icon: <BiLogOut />,
    },
    {
      label: "Services",
      key: "services",
      icon: <BiLogOut />,
      children: [
        {
          label: "Item 1",
          key: "item1",
        },
        {
          label: "Item 2",
          key: "item2",
        },
      ],
    },

    {
      label: "Incendents",
      key: "Incidents",
      icon: <BiLogOut />,
      children: [
        {
          label: "Item 1",
          key: "item1",
        },
        {
          label: "Item 2",
          key: "item2",
        },
      ],
    },
  ];
  const onClick = (e) => {
    navigate(`${e.key}`);
  };
  return (
    <div>
      <Menu
        items={items}
        className="mt-5"
        mode="inline"
        theme={theme}
        onClick={onClick}
      />
    </div>
  );
};

export default SideBar;
