import React, { useEffect } from "react";
import Product from "./product/product";
import { getProduct } from "../../actions/product";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, addReview } from "../../reducers/product";
import "./products.css";

const Products = (props) => {
  const [toggleModal, setToggleModal] = React.useState(false);
  const [productData, setProductData] = React.useState(false);
  const [review, setReview] = React.useState("");
  const [allReview, setAllReview] = React.useState([]);

  const { product } = useSelector(selectProducts);
  const dispatch = useDispatch();

  const searchedProduct = product.filter((post) => {
    const pattern = props.searchText.toLowerCase().trim();
    if (pattern === "") return true;
    if (post.name.toLowerCase().includes(pattern)) return true;
    if (post.brand.toLowerCase().includes(pattern)) return true;
    if (post.description.toLowerCase().includes(pattern)) return true;
    return false;
  });

  const modal = (data) => {
    setProductData(data);
    if (data.review) setAllReview(data.review);
    setToggleModal(true);
  };

  const handleReview = (event) => {
    event.preventDefault();
    dispatch(addReview({ product: productData, review: review }));
    setAllReview((data) => [...data, review]);
    setReview("");
  };

  const handleClick = (event) => {
    if (event.target.className === "modal fade show") setToggleModal(false);
  };

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getProduct());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="d-flex mx-0" style={{ maxWidth: "99%" }}>
      <div className="col-6 col-md-3 px-4 pt-5 mt-5 ">
        <div class="card">
          <article class="filter-group">
            <header class="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_1"
                aria-expanded="true"
                class=""
              >
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Product type</h6>
              </a>
            </header>
            <div class="filter-content collapse show" id="collapse_1">
              <div class="card-body">
                <ul class="list-menu">
                  {/* <li>
                    <a href="#">People </a>
                  </li> */}
                  <li>
                    <a href="#">Watches </a>
                  </li>
                  {/* <li>
                    <a href="#">Cinema </a>
                  </li> */}
                  <li>
                    <a href="#">Clothes </a>
                  </li>
                  <li>
                    <a href="#">Home items </a>
                  </li>
                  <li>
                    <a href="#">Electronic</a>
                  </li>
                  {/* <li>
                    <a href="#">People </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </article>
          <article class="filter-group">
            <header class="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_2"
                aria-expanded="true"
                class=""
              >
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Brands </h6>
              </a>
            </header>
            <div class="filter-content collapse show" id="collapse_2">
              <div class="card-body">
                <label class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">
                    Mercedes
                    <b class="badge badge-pill badge-light float-right">
                      120
                    </b>{" "}
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">
                    Toyota
                    <b class="badge badge-pill badge-light float-right">
                      15
                    </b>{" "}
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">
                    Mitsubishi
                    <b class="badge badge-pill badge-light float-right">
                      35
                    </b>{" "}
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    checked=""
                    class="custom-control-input"
                  />
                  <div class="custom-control-label">
                    Nissan
                    <b class="badge badge-pill badge-light float-right">
                      89
                    </b>{" "}
                  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">
                    Honda
                    <b class="badge badge-pill badge-light float-right">
                      30
                    </b>{" "}
                  </div>
                </label>
              </div>
            </div>
          </article>
          <article class="filter-group">
            <header class="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_3"
                aria-expanded="true"
                class=""
              >
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Price range </h6>
              </a>
            </header>
            <div class="filter-content collapse show" id="collapse_3">
              <div class="card-body">
                <input
                  type="range"
                  class="custom-range"
                  min="0"
                  max="100"
                  name=""
                />
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Min</label>
                    <input
                      class="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div class="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      class="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button class="btn btn-block btn-primary">Apply</button>
              </div>
            </div>
          </article>
          <article class="filter-group">
            <header class="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_4"
                aria-expanded="true"
                class=""
              >
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Sizes </h6>
              </a>
            </header>
            <div class="filter-content collapse show" id="collapse_4">
              <div class="card-body">
                <label class="checkbox-btn">
                  <input type="checkbox" />
                  <span class="btn btn-light"> XS </span>
                </label>

                <label class="checkbox-btn">
                  <input type="checkbox" />
                  <span class="btn btn-light"> SM </span>
                </label>

                <label class="checkbox-btn">
                  <input type="checkbox" />
                  <span class="btn btn-light"> LG </span>
                </label>

                <label class="checkbox-btn">
                  <input type="checkbox" />
                  <span class="btn btn-light"> XXL </span>
                </label>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="col-6 col-md-9 px-2">
        <div onClick={handleClick}>
          {searchedProduct.length > 0 ? (
            <div
              className={
                "bg-light mt-4 px-0 100vh container-fluid " +
                (toggleModal ? "toggleModal" : "")
              }
            >
              <div className="pt-5 row justify-content-center px-0">
                {searchedProduct.map((item, idx) => {
                  return <Product product={item} key={idx} modal={modal} />;
                })}
                {/* <button onClick={handleClick}>arrow</button> */}
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-middle pt-5 mt-5 h3 text-muted">
              No Products found
            </div>
          )}
          {toggleModal ? (
            <div
              className="modal fade show"
              id="exampleModalLive"
              tabIndex="-1"
              aria-labelledby="exampleModalLiveLabel"
              style={{ display: "block" }}
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">
                      {productData.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setToggleModal(false);
                      }}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <section>
                      <div className="row text-center">
                        <div className="col-md-12">
                          <div
                            id="carouselBasicExample"
                            className="carousel slide carousel-dark"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <p className="lead font-italic mx-4 mx-md-5 px-5">
                                  "Neque cupiditate assumenda in maiores
                                  repudiandae mollitia adipisci maiores
                                  repudiandae mollitia consectetur adipisicing
                                  architecto elit sed adipiscing elit."
                                </p>

                                <p className="text-muted mb-0">- Teresa May</p>
                              </div>
                              <div className="carousel-item ">
                                <p className="lead font-italic mx-4 mx-md-5 px-5">
                                  "Neque cupiditate assumenda in maiores
                                  repudiandae mollitia adipisci maiores
                                  repudiandae mollitia consectetur adipisicing
                                  architecto elit sed adipiscing elit."
                                </p>

                                <p className="text-muted mb-0">- Teresa May</p>
                              </div>
                              {allReview.map((item, idx) => {
                                return (
                                  <div className="carousel-item">
                                    <p className="lead font-italic mx-4 mx-md-5 px-5">
                                      {}
                                    </p>
                                    {item}
                                    <p className="text-muted mb-0">- user1</p>
                                  </div>
                                );
                              })}
                            </div>

                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselBasicExample"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselBasicExample"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <form>
                      <div className="mb-3 " style={{ width: "400px" }}>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Add a review
                        </label>
                        <textarea
                          className="form-control "
                          aria-label="With textarea"
                          onChange={handleChange}
                          value={review}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-0"
                        onClick={handleReview}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
