import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
const CardHistory = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center bg-utama h-32 place-items-center">
      <div
        className="bg-white w-2/5 text-center
        rounded-lg font font-[poppins] text-sm font-semibold"
      >
        <div
          className="hover:bg-utama hover:ring-2 hover:ring-white py-3
          rounded-lg hover:text-white ring-2 ring-kedua shadow-xl shadow-kedua"
        >
          <div className="grid grid-flow-col grid-cols-5 items-center grid-rows-2">
            <div className=" col-span-1 row-span-2 ml-3">
              <AiFillCaretLeft />
            </div>
            <div className=" col-span-2 row-span-1 text-left">
              Jenis Transaksi
            </div>
            <div className=" col-span-2 row-span-1 text-left">1000000</div>
            <div className=" col-span-2 row-span-2 text-right mr-3">Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
