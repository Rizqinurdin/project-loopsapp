import React from "react";
import Navigation from "../../components/header/Navigation";
import Banner4 from "../../assets/11.png";
import Sale from "../../assets/sale.svg";
import Sale1 from "../../assets/sale1.svg";
import Sale2 from "../../assets/sale20.png";
import Sale3 from "../../assets/sale50.png";
import Promo from "../../assets/icon1.png";
import Pay from "../../assets/icon2.png";
import History from "../../assets/icon3.png";
import Logobpjs from "../../assets/logobpjs.png";
import LogoPLN from "../../assets/logopln.png";
import LogoPDM from "../../assets/logopdam.png";
import XL from "../../assets/xl1.png";
import Indihome from "../../assets/indihome.png";
import Tsel from "../../assets/tsel.png";

import { Carousel } from "antd";
import { Form, Button, Container } from "react-bootstrap";

const Index = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Navigation></Navigation>

      <img src={Sale} class="max-w-full h-auto" alt="..." />

      <section className="container">
        <h1 className="text-center text-2xl mt-5 font-[poppins]">
          Payment LoopsApp
        </h1>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <a href="">
              <img className="ml-36" src={Logobpjs} alt="" />
            </a>
          </div>
          <div className="col-md-3">
            <img className="ml-20" src={LogoPLN} alt="" />
          </div>
          <div className="col-md-3">
            <img className="" src={LogoPDM} alt="" />
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <a href="">
              <img className="w-50 ml-24" src={XL} alt="" />
            </a>
          </div>
          <div className="col-md-3">
            <img className="w-80 mt-4" src={Indihome} alt="" />
          </div>
          <div className="col-md-3">
            <img className="" src={Tsel} alt="" />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pt-1 pb-1 my-3">
              <p className="text-green-500 fw-bold">
                {" "}
                2022 Copyright LoopsApps. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
