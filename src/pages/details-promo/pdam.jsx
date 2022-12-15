import React from "react";
import Navigation from "../../components/header/Navigation";
import hero3 from "./../../assets/logo/holiday.png";

const Details = () => {
  return (
    <>
      <div className="container-lg mt-24">
        <Navigation />
        <h1 className="text-center text-3xl font-bold font-[poppins]">
          Kabar gembira untuk Loopers kali ini aplikasi loops <br /> kembali
          menghadirkan promo discount sebanyak 10 % <br /> bagi para pelanggan
          setia
        </h1>
        <img src={hero3} class="img-fluid mx-auto mt-4 w-auto" alt="..." />

        <h1 className="mt-5 font-bold">Syarat dan Ketentuan</h1>
        <div className="container mt-2">
          <p className="col-md-8">
            1. Promo yang diberikan merupakan potongan harga sebanyak 10% yang
            berlaku untuk top up ke semua merchant dan bank hanya melalui
            aplikasi loops.
          </p>
          <p className="col-md-8">
            2. Maksimum discount potongan harga yang diberikan sebesar 10%.
          </p>
          <p className="col-md-8">
            3. Periode 1 – 31 Desember 2022, Pelanggan akan mendapatkan discount
            atau potongan harga sebesar 10% selama periode promo berlaku hingga
            10x transaksi/ Pelanggan/ Periode.
          </p>
          <p className="col-md-8">
            4. promo discount hanya berlaku bagi pengguna yang melakukan top up
            sebesar 100.000 di aplikasi loops.
          </p>
          <p className="col-md-8">
            5. Promo discount berlaku untuk seluruh denom (tidak berlaku
            kelipatan) pada aplikasi Loops.
          </p>
          <p className="col-md-8">
            6. Promo discount berlaku untuk 1 kali transaksi/pelanggan/periode
            promo.
          </p>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Reedem Code
          </button>
        </div>
      </div>

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

export default Details;
