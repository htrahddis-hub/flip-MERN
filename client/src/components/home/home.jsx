import React from "react";
import Product from "../products/products";
import "./home.css";
import { logout } from "../../actions/auth";
import { getCart } from "../../reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">
            Flipkart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto me-sm-auto pe-5">
              <input
                className="form-control me-2 boxWid"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleChange}
              />
            </form>
            <button
              className="d-flex btn button me-2 mt-sm-0 mt-2"
              type="submit"
              onClick={handleLogout}
            >
              Logout
            </button>
            <Link to="/cart">
              <button
                className="d-flex btn btn-primary mt-sm-0 mt-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {cart.cart.length > 0 ? (
                  <span className="position-absolute mt-3 start-75 translate-middle badge rounded-pill bg-danger">
                    {cart.cart.length}
                  </span>
                ) : (
                  <></>
                )}
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="d-flex mx-0"
        style={{ maxWidth: "99%" }}
      >
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
                    <li>
                      <a href="#">People </a>
                    </li>
                    <li>
                      <a href="#">Watches </a>
                    </li>
                    <li>
                      <a href="#">Cinema </a>
                    </li>
                    <li>
                      <a href="#">Clothes </a>
                    </li>
                    <li>
                      <a href="#">Home items </a>
                    </li>
                    <li>
                      <a href="#">Animals</a>
                    </li>
                    <li>
                      <a href="#">People </a>
                    </li>
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
          <Product searchText={search} />
        </div>
      </div>
    </div>
  );
};

export default Home;
