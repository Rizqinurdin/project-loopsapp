import React from "react";
import Navigation from "../../components/header/Navigation";
import Hero from "../../components/hero/Hero";
import bpjs from "./../../assets/logo/bpjs1.png";
import listrik from "./../../assets/logo/listrik.png";
import pdam from "./../../assets/logo/pdam1.png";
import { Carousel } from "antd";
import { Form, Button } from "react-bootstrap";

const Index = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <section className="container-lg">
        <Navigation></Navigation>
        <Hero></Hero>
        <h1 className="text-center text-2xl mt-5 font-[poppins]">
          Payment LoopsApp
        </h1>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100  m-4">
            <a href="/bill">
              <img className="ml-auto mr-auto" src={bpjs} alt="" />
            </a>
          </div>
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100 m-4">
            <a href="#">
              <img className="ml-auto mr-auto" src={listrik} alt="" />
            </a>
          </div>
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100 m-4">
            <a href="#">
              <img className="w-60 mt-2 ml-auto mr-auto" src={pdam} alt="" />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="row">
          <div className="col-12 text-center pt-1 pb-1 my-3">
            <p className="text-green-500 fw-bold">
              {" "}
              2022 Copyright LoopsApps. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
