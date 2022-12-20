import React from "react";
import CardHistory from "../../components/card-history";
import Navigation from "../../components/header/Navigation";

const History = () => {
  return (
    <>
      <div className="bg-utama h-screen">
        <Navigation></Navigation>
        <div className="container-lg">
          <CardHistory />
          <CardHistory />
          <CardHistory />
        </div>
      </div>
    </>
  );
};

export default History;
