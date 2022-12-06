import React from "react";
import Navbar from "../../components/navbar";
import CardHistory from "../../components/card-history";

const History = () => {

  return (
    <>
      <div className="bg-utama">
        <Navbar />
        <div className="md:pt-20"></div>
        <CardHistory />
      </div>
    </>
  );
};

export default History;
