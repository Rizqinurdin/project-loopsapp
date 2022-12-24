import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/header/Navigation";

function Price() {
  const Navigate = useNavigate();
  var a = 1000000;
  var merchantPayment = "BPJS";
  var jenis = "";
  var discount, bayar;
  if (merchantPayment.toUpperCase() === "BPJS") {
    discount = (a * 25) / 100;
    bayar = a - discount;
  } else if (merchantPayment.toUpperCase() === "PDAM") {
    discount = (a * 50) / 100;
    bayar = a - discount;
  } else if (jenis.toUpperCase() === "TOPUP") {
    if (a >= 100000) {
      discount = (a * 10) / 100;
      bayar = a - discount;
    } else {
      discount = 0;
      bayar = a - discount;
    }
  } else {
    discount = 0;
    bayar = a - discount;
  }
  return (
    <>
      <Navigation></Navigation>
      <div className="Payment mt-2 font-[poppins]">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <h3 className="font-[poppins]">TOTAL PAYMENT</h3>
              <br />

              <section className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Base Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="baseprice"
                      name="baseprice"
                      value={a}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Discount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="discount"
                      name="discount"
                      value={discount}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label htmlFor="name">Total Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="totalPrice"
                      name="totalPrice"
                      value={bayar}
                    />
                  </div>
                </div>
              </section>

              <div className="mb-3"></div>

              <div className="mb-3"></div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={() => Navigate(`/invoice`)}
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

export default Price;
