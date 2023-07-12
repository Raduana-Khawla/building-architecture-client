import React from "react";
const RentApartment = () => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        {" "}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card shadow-sm p-3  rounded border border-0 h-100">
              <img
                src="https://i.ibb.co/6HQ81BP/apartment-Rent1.jpg"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6>Narsingdi.Dhaka</h6>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card shadow-sm p-3  rounded border border-0 h-100">
              <img
                src="https://i.ibb.co/7CFvbFW/apartment-Rent2.jpg"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6>Narsingdi.Dhaka</h6>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card shadow-sm p-3  rounded border border-0 h-100">
              <img
                src="https://i.ibb.co/HBk04s1/apartment-Rent3.jpg"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6>Narsingdi.Dhaka</h6>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentApartment;
