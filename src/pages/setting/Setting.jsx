import React from "react";
import Navigation from "../../components/header/Navigation";

const Setting = () => {
  return (
    <>
      <div className="container-md">
        <Navigation></Navigation>
        <h1 className="text-2xl">My Account</h1>
        <p>Update your current profile</p>
      </div>
      <div className="dashboard-content mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="">
                <div className="card">
                  <div className="card-body bg-slate-100">
                    <div className="row mb-12">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={"Muhammad Farizqi Nurdin"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={"rizqi.ndin27@gmail.com"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="addressOne">Address 1</label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressOne"
                            name="addressOne"
                            value={"Jalan Gunung Tambora III"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="addressTwo">Address 2 </label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressTwo"
                            name="addressTwo"
                            value={"Jalan Gunung Jaya Wijaya"}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="province">Province</label>
                          <select
                            name="province"
                            id="province"
                            className="form-control"
                          >
                            <option value="Banten">Banten</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="cities">Cities</label>
                          <select
                            name="cities"
                            id="cities"
                            className="form-control"
                          >
                            <option value="Tangerang City">
                              Tangerang City
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="postalCode">Postal Code</label>
                          <select
                            name="postalCode"
                            id="postalCode"
                            className="form-control"
                          >
                            <option value="15144">15144</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={"Indonesia"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="mobile">Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={"+62 821 7205 6024"}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mt-4">
                        <div className="form-group">
                          <label>Thumnails</label>
                          <input type="file" className="form-control" />
                          <p className="text-muted">Upload Photo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <button
                  type="submit"
                  className="btn btn-success bg-green-700 hover:bg-green-500 px-5"
                >
                  Save Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
