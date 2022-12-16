import Navigation from "../header/Navigation";
import { useNavigate } from "react-router-dom";
import BPJS from "../../assets/logo/bpjs.png";

function Bill() {
  const Navigate = useNavigate();
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
              <div></div>
              <br />
              <div className="grid grid-cols-1 justify-items-center w-full">
                <div className=" col-span-1">
                  <img src={BPJS} className=" h-36" />
                </div>
              </div>

              <div className="mb-3">
                <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Id Pelanggan
                  </span>
                  <input
                    type="text"
                    name="number"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  block w-full rounded-md sm:text-sm focus:border-utama focus:ring-utama"
                    placeholder="Tolong Masukkan ID PELANGGAN"
                  />
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
                  onClick={() => Navigate(`/pay`)}
                >
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
