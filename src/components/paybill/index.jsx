import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import Navigation from "../header/Navigation";


function PaymentBill() {
  return (
    <>
      <Navigation></Navigation>
      <div className="Payment pt-40">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <div></div>
              <br />
              <div className="grid grid-cols-1 justify-items-center w-full pb-4">
                <div className=" col-span-1"><img src={require("../bill/logobpjs.png")} className=" h-36" /></div>
                </div>

              <div className="mb-3">
                <div className="w-full ring-2 ring-kedua rounded-lg bg-white text-center text-lg font-serif font-medium">Fuad Mubarok</div>
              </div>
              <div className="mb-3">
              <div className="w-full ring-2 ring-kedua rounded-lg bg-white text-center text-kedua text-lg">RP. 50.000</div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentBill;