import React from "react";
import video from "../../assets/logo/Sea.mp4";
import "../../assets/styleFooter.css";
import logo from "./../../assets/logo/logo.svg";
import { FiSend } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <section className="footer pb-0">
        <div className="secContent container-lg">
          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <img className="w-20" src={logo} alt="logo" />
              </div>
              <div className="footerParagraf text-md font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                velit, obcaecati perspiciatis est eligendi enim. Voluptate,
                accusamus? Sit veniam consequuntur placeat sunt suscipit
                molestiae alias, consectetur, quaerat ab omnis beatae!
              </div>
              <div className="footerSocial flex">
                <AiFillTwitterCircle className="icon" />
                <AiFillInstagram className="icon" />
                <AiFillYoutube className="icon" />
              </div>
            </div>

            <div className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle block mb-2 font-bold">
                  Contact Us
                </span>
                <li className="footerList flex col-span-3">
                  <FiChevronRight className="icon" />
                  No Telpon : 0812xxxxxxx
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Alamat :
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  No Telpon
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Alamat
                </li>
              </div>
            </div>
            <div className="footerDiv flex">
              <h1 className="text-center font-bold">
                BEST PAYMENT WEBSITE IN THE WORLD
              </h1>
              <h1 className="text-center font-bold">
                {" "}
                COPYRIGHTS RESERVED - ISRATECH 2022
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
