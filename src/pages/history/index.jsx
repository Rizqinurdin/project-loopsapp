import React from "react";
import CardHistory from "../../components/card-history";
import Navigation from "../../components/header/Navigation";

const History = () => {
  return (
    <>

      <div className="container-lg">
        <Navigation></Navigation>
        <div className="md:pt-20"></div>

        <CardHistory />
      </div>
    </>
  );
};

export default History;
