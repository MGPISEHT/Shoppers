import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from API when the component mounts
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <p>Loading products...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="/">Home</a> <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Shop</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h2 className="text-black h5">Shop All</h2>
                      <div className="d-flex">
                        <div className="dropdown mr-1 ml-md-auto">
                          <button
                            type="button"
                            className="me-2 btn btn-secondary btn-sm dropdown-toggle"
                            id="dropdownMenuOffset"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Latest
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuOffset"
                          >
                            <a className="dropdown-item" href="#">
                              Men
                            </a>
                            <a className="dropdown-item" href="#">
                              Women
                            </a>
                            <a className="dropdown-item" href="#">
                              Children
                            </a>
                          </div>
                        </div>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm dropdown-toggle"
                            id="dropdownMenuReference"
                            data-toggle="dropdown"
                          >
                            Reference
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuReference"
                          >
                            <a className="dropdown-item" href="#">
                              Relevance
                            </a>
                            <a className="dropdown-item" href="#">
                              Name, A to Z
                            </a>
                            <a className="dropdown-item" href="#">
                              Name, Z to A
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Price, low to high
                            </a>
                            <a className="dropdown-item" href="#">
                              Price, high to low
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* products map  */}
                <div className="row mb-5">
                  {products.map((product) => (
                    <div
                      className="col-sm-6 col-lg-4 mb-4"
                      key={product.id}
                      data-aos="fade-up"
                    >
                      <div className="block-4 text-center border rounded ">
                        <div style={{ width: "304px", height: "360px" }}>
                          <figure
                            className="block-4-image "
                            style={{ height: "170px" }}
                          >

                            {/*   Using product.image from the API data */}
                            <a href={`/shop-single/${product.id}`}>
                              <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid "
                                style={{ width: "100px", marginTop: "10px" }}
                              />
                            </a>

                          </figure>

                          <div
                            className="block-4-text p-3"
                            style={{ height: "173px" }}
                          >

                            {/* products title */}
                            <h3
                              style={{
                                fontSize: "1rem",
                                fontFamily: "revert",
                                height: "110px",
                              }}
                            >
                              <a
                                style={{ height: "40px" }}
                                href={`/shop-single/${product.id}`}
                              >
                                {product.title}
                              </a>
                            </h3>

                              {/* products price and button add to cart */}
                            <p className="text-danger font-weight-bold">
                              ${product.price}
                              <Link
                                onClick={() => handleAddToCart(product)}
                                to="/cart"
                                className="buy-now btn fw-bold  btn-info btn-outline"
                                style={{
                                  width: "100px",
                                  height: "30px",
                                  marginLeft: "50px",
                                  fontSize: "12px",
                                  color: "white",
                                }}
                              >
                                Add Cart
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-md-12 text-center">
                    <div className="site-block-27">
                      <ul className="justify-content-center">
                        <li className="page-item ">
                          <a className="page-link rounded-circle me-2" href="#">
                            &lt;
                          </a>
                        </li>
                        <li className="page-item active me-1">
                          <span className="page-link">1</span>
                        </li>
                        <li className="page-item me-1">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item me-1">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item me-1">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item me-1">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item me-1">
                          <a className="page-link rounded-circle ms-2" href="#">
                            &gt;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <a
                        href="#"
                        className="text-decoration-none d-flex justify-content-between"
                      >
                        <span>Men</span>
                        <span className="text-black">(2,220)</span>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#"
                        className="text-decoration-none d-flex justify-content-between"
                      >
                        <span>Women</span>
                        <span className="text-black">(2,550)</span>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a
                        href="#"
                        className="text-decoration-none d-flex justify-content-between"
                      >
                        <span>Children</span>
                        <span className="text-black">(1,500)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border p-4 rounded mb-4">
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Filter by Price
                    </h3>
                    <div id="slider-range" className="border-primary"></div>
                    <input
                      type="text"
                      name="text"
                      id="amount"
                      className="form-control border-0 pl-0 bg-white"
                      disabled
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Size
                    </h3>
                    <div className="d-flex flex-column">
                      <label
                        htmlFor="s_sm"
                        className="d-flex align-items-center"
                      >
                        <input
                          type="checkbox"
                          id="s_sm"
                          className="mr-2 mt-1"
                        />
                        <span className="text-black ms-2">Small (2,319)</span>
                      </label>
                      <label
                        htmlFor="s_md"
                        className="d-flex align-items-center"
                      >
                        <input
                          type="checkbox"
                          id="s_md"
                          className="mr-2 mt-1"
                        />
                        <span className="text-black ms-2">Medium (1,282)</span>
                      </label>
                      <label
                        htmlFor="s_lg"
                        className="d-flex align-items-center"
                      >
                        <input
                          type="checkbox"
                          id="s_lg"
                          className="mr-2 mt-1"
                        />
                        <span className="text-black ms-2">Large (1,392)</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4 ">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Color
                    </h3>
                    <a
                      href="#"
                      className=" text-decoration-none d-flex color-item align-items-center"
                    >
                      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black ms-2">Red (2,429)</span>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none d-flex color-item align-items-center"
                    >
                      <span className="bg-success color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black ms-2">Green (2,298)</span>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none d-flex color-item align-items-center"
                    >
                      <span className="bg-info color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black ms-2">Blue (1,075)</span>
                    </a>
                    <a
                      href="#"
                      className="d-flex color-item align-items-center text-decoration-none"
                    >
                      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>
                      <span className="text-black ms-2">Purple (1,075)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
