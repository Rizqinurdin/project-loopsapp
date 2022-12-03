import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Navbar from "../../components/navbar";
import CardHistory from "../../components/card-history";

const History = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-utama">
        <Navbar />
        <div className="md:pt-20"></div>
        <CardHistory key={products?.id} onClick={products.id} />
      </div>
    </>
  );
};

export default History;
