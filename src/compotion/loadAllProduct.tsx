import "/src/assets/css/style.css";
import "/src/assets/css/a.css";
const LoadListProduct = () => {
  return (
    <>
      <main>
        <div className="container mb-5 ">
          <hr className="mb-5" />
          <div className="tile">
            <button className="btn btn-danger"></button>{" "}
            <a className="btn text-danger fw-medium" href="">
              This Month
            </a>
            <div className="row">
              <div className="col-10">
                <h3 className="mt-3 ">Best Selling Products</h3>
              </div>
              <div className="col-2 mb-4 ">
                <a className="btn btn-danger py-3 px-5  " href="">
                  View All
                </a>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div
                className="card px-5 py-3 bg-dark-subtle"
                style={{ width: "18rem", height: "14rem" }}
              >
                <div className="position-absolute top-0 end-0 ">
                  <div className="icon px-3">
                    <div className="icon-heart rounded-circle bg-white my-3">
                      <a href="">
                        <i className="btn bi bi-heart fs-6 "></i>
                      </a>
                    </div>
                    <div className="icon-heart rounded-circle bg-white">
                      <a href="">
                        <i className="btn bi bi-eye fs-6 "></i>
                      </a>
                    </div>
                  </div>
                </div>
                <a href="/single">
                  <img
                    src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                    className="card-img-top"
                    style={{ width: "11rem" }}
                  />
                </a>
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title"></h5>
                <div className="prices my-3">
                  <h5 className="card-title">Áo Anh 7</h5>
                  <span className="price-old text-danger fw-medium">$100</span>
                  <span className="sep">-</span>
                  <span className="price text-decoration-line-through fw-medium">
                    $360
                  </span>
                </div>
              </div>
              <div className="start">
                <span>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
                <span>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
                <span>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
                <span>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
                <span>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
                <samp>(65)</samp>
              </div>
            </div>
           
          </div> */}
          <div className="danhsachsanpham py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4 position-relative">
                  <div className="card mb-4 shadow-sm">
                    <div className=" hover-overlay position-absolute top-0 end-0 ">
                      <div className="icon px-3">
                        <div className="icon-heart rounded-circle bg-white my-3">
                          <a href="">
                            <i className="btn bi bi-heart fs-6 "></i>
                          </a>

                          <a href="">
                            <i className="btn bi bi-eye fs-6 "></i>
                          </a>

                          <a href="">
                            <i className="btn bi bi-cart2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="product-detail.html">
                      <img
                        src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                        width="100%"
                        height="350"
                        alt=""
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <a href="product-detail.html">
                        <h5>Áo Quỷ đỏ</h5>
                      </a>
                      <h6>MU</h6>
                      <p className="card-text">Sản phẩm của năm 3000</p>
                      <div className="start">
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <samp>(65)</samp>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="/single"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                        <small className="text-muted text-right">
                          <s>12,600,000.00</s>
                          <b>12,000,000.00 vnđ</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <a href="product-detail.html">
                      <img
                        src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                        width="100%"
                        height="350"
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <a href="product-detail.html">
                        <h5>Áo hạng A</h5>
                      </a>
                      <h6>Áo FC</h6>
                      <p className="card-text">Mặc vào là hay như anh 7</p>
                      <div className="start">
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <samp>(65)</samp>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="/single"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                        <small className="text-muted text-right">
                          <s>12,000,000.00</s>
                          <b>11,800,000.00 vnđ</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <a href="product-detail.html">
                      <img
                        src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                        width="100%"
                        height="350"
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <a href="product-detail.html">
                        <h5>Áo bóng</h5>
                      </a>
                      <h6>MC</h6>
                      <p className="card-text">Độ dày mát tinh tế</p>
                      <div className="start">
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </span>
                        <samp>(65)</samp>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="/single"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                        <small className="text-muted text-right">
                          <s>0.00</s>
                          <b>14,890,000.00 vnđ</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoadListProduct;
