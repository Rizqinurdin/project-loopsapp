import React from "react";
import "../../assets/styleHeader.css";
import { MdPayments } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "./../../assets/logo/logo.svg";
import user from "./../../assets/logo/user.svg";
import { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";

const Navigation = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/setting">
          My Account
        </a>
      ),
    },
  ];
  return (
    <>
      <section className="navBarSection h-20">
        <header className="header flex">
          <div className="logoDiv">
            <img className="w-20 ml-10" src={logo} alt="logo" />
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Beranda
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Payment
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Promo
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  History
                </a>
              </li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <Button className="bg-green-600 text-white">
                  Hi Muhammad Farizqi Nurdin
                </Button>
              </Dropdown>
            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toogleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Navigation;
