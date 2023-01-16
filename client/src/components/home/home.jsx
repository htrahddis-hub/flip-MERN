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
            E-comm
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
      <Product searchText={search} />
    </div>
  );
};

export default Home;
