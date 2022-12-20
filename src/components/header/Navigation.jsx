import React from "react";
import "../../assets/styleHeader.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "./../../assets/logo/logo.svg";
import { useState } from "react";
import { Dropdown, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  const Navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <button onClick={() => Navigate(`/setting`)}>My Account</button>,
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
                <button className="navLink" onClick={() => Navigate(`/home`)}>
                  Beranda
                </button>
              </li>
              <li className="navItem">
                <button
                  className="navLink"
                  onClick={() => Navigate(`/payment`)}
                >
                  Payment
                </button>
              </li>
              <li className="navItem">
                <button className="navLink" onClick={() => Navigate(`/promo`)}>
                  Promo
                </button>
              </li>
              <li className="navItem">
                <button
                  className="navLink"
                  onClick={() => Navigate(`/history`)}
                >
                  History
                </button>
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
