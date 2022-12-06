import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./components/header/Navigation";
import Promo from "./components/promo/Promo";
import Banner from "./components/card/Banner";
import Details from "./pages/details-promo";
import Home from "./pages/home/Home";
import Topup from "./components/topup/topup";
import Index from "./pages/landingpage/Index";
import { History, Invoice } from "./pages";
import Payment from "./pages/payment/Index"
import Register from "./components/register/index"
import Login from "./components/login/index"
import Setting from "./pages/setting/Setting";
import CardHistory from "./components/card-history";
import { Bill, PaymentBill } from "./components";




function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="promo" element={<Promo />} />
        <Route path="/details" element={<Details />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/ch" element={<CardHistory/>}/>
        <Route path="/bill" element={<Bill/>}/>
        <Route path="/pay" element={<PaymentBill/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;