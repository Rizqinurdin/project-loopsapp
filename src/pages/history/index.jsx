<<<<<<< HEAD
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
=======
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
>>>>>>> a822d6fd96c22bfae3796228abb42af032b786c1
