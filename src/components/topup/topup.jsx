import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import Navigation from "../header/Navigation";

const bank = [
  { value: "BCA", label: "BCA" },
  { value: "BRI", label: "BRI" },
  { value: "BNI", label: "BNI" },
  { value: "MANDIRI", label: "MANDIRI" },
];

const nominal = [
  { value: "20000", label: "20000" },
  { value: "30000", label: "30000" },
  { value: "50000", label: "50000" },
  { value: "100000", label: "100000" },
  { value: "150000", label: "150000" },
  { value: "200000", label: "200000" },
  { value: "400000", label: "400000" },
];

function Topup() {
  return (
    <>
      <Navigation></Navigation>
      <div className="Payment mt-5 font-[poppins]">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <h3 className="font-[poppins]">Metode Topup</h3>
              <br />

              <div className="mb-3">
                <Select options={bank} placeholder="Top Up With" />
              </div>

              <div className="mb-3">
                <Select options={nominal} placeholder="Nominal" />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                >
                  Top Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topup;
