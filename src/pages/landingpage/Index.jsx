import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Carousel,
  Card,
  Figure,
} from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import user from "./../../assets/user.svg";
import hero1 from "./../../assets/11.png";
import hero2 from "./../../assets/10.png";
import hero3 from "./../../assets/9.png";
import Promo from "../../assets/icon1.png";
import Pay from "../../assets/icon2.png";
import History from "../../assets/icon3.png";
import Working from "../../assets/workingspace.png";
import Keamanan from "./../../assets/kemanan.png";
import Sistem from "./../../assets/layanan.png";
import Layanan from "./../../assets/sistem.png";
import PLN from "./../../assets/Logo_PLN.png";
import BPJS from "./../../assets/bpjs.png";
import MyRep from "./../../assets/myrep.png";
import PDAM from "./../../assets/pdam.png";
import BNI from "./../../assets/bni.png";
import BCA from "./../../assets/bca.png";
import mandiri from "./../../assets/mandiri.png";
import User1 from "./../../assets/user.svg";

const Index = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar fixed-top"
      >
        <Container>
          <img className="w-20" src={logo} alt="logo" />
          <Nav className="mr-5 font-[poppins]">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Payment</Nav.Link>
            <Nav.Link href="#">Promo</Nav.Link>
            <Nav.Link href="#">History</Nav.Link>
            <Nav.Link href="#">Sign in</Nav.Link>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sign up
            </a>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={hero1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <div className="row mt-5">
          <div className="col-6">
            <img className="w-96 ml-14" src={Working} alt="" />
          </div>
          <div className="col-5">
            <p className="mt-2 text-3xl text-gray-600 font-bold font-[poppins]">
              Tentang Kami
            </p>
            <p className="text-gray-500 text-2x1 text font-[poppins] mt-2">
              Mau bayar apapun jadi semudah lewat sentuhan jari. melewati loops,
              kamu bisa melakukan transaksi apapun dengan praktis mulai dari
              transfer uang hingga pembayaran tagihan. ayo! segera bergabung dan
              nikmati layanannya dengan metode yang lebih cepat, praktis, dan
              aman. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Enim temporibus, ab vero tempore ratione voluptates similique aut
              voluptatibus nam impedit! Alias mollitia dicta quibusdam
              veritatis!
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-4 justify-content-center">
        <div className="row">
          <h1 className="text-4xl text-center uppercase font-[poppins]">
            Transaksi <span className="font-bold">Aman</span> dan{" "}
            <span className="font-bold">Nyaman</span> <br /> dengan LoopsApp
          </h1>
        </div>
      </Container>

      <section className="container">
        <div className="row mt-5 ">
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Sistem} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Layanan Terlengkap
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Layanan Terlengkap kemudahan untuk transaksi, kirim uang, dan
              pembayaran tagihan pada merchant
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Keamanan} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Keamanan Terjamin
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Keamanan terjamin Loops menjamin 100% kemanan transaksi digital
              dengan garansi uang kembali
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mx-auto" src={Layanan} alt="" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Sistem Tercanggih
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Sistem Tercanggih Loops dibangun dengan teknologi keamanan kelas
              dunia dengan sistem jaringan yang diawasi 24 jam
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h1 className="text-center text-3xl mt-5 font-[poppins]">
          Merchant Kami
        </h1>
        <div className="row mt-4">
          <div className="col-md-3">
            <img className="w-40 ml-5" src={PLN} alt="" />
          </div>
          <div className="col-md-3 mt-3">
            <img className="w-100" src={BPJS} alt="" />
          </div>
          <div className="col-md-3">
            <img className="w-60" src={PDAM} alt="" />
          </div>
          <div className="col-md-3 mt-5">
            <img className="w-500" src={MyRep} alt="" />
          </div>
          <div className="col-md-2 mt-5 ml-72">
            <img className="w-500" src={BCA} alt="" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="w-500" src={BNI} alt="" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="w-500" src={mandiri} alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h5 className="text-center text-4xl font-[poppins]">
              Testimonial Teman Loops
            </h5>
            <h5 className="text-center mt-5 text-2x1 text-slate-400 font-[poppins]">
              "Fitur yang sangat baik dan canggil , proses pengiriman PULSA{" "}
              <br /> dan membayar TAGIHAN apapun menjadi lebih simple"
            </h5>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-6 d-flex justify-content-center">
            <Figure>
              <Figure.Image
                className="mr-2 mt-4 opacity-50"
                width={50}
                height={50}
                alt="171x180"
                src={User1}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={User1}
              />
              <Figure.Caption>
                <h5 className="text-center font-bold text-sm font-[poppins]">
                  Rizqinurdin
                </h5>
                <p className="text-center text-xs font-[poppins]">Dokter</p>
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                className="ml-2 mt-4 opacity-50"
                width={50}
                height={50}
                alt="171x180"
                src={User1}
              />
            </Figure>
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