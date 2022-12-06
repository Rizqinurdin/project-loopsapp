import React from "react";
import Navbar from "../../components/navbar";
import CardHistory from "../../components/card-history";
import Navigation from "../../components/header/Navigation";

const History = () => {

  return (
    <>
      <div className="bg-utama">
        <Navigation/>
        <div className=" md:pt-16"></div>
        <CardHistory />
      </div>
    </>
  );
};

export default History;
