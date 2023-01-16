import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../../reducers/cart";
import { checkCard } from "../../api";
import "./checkout.css";

const Checkout = () => {
  const { cart } = useSelector(getCart);

  const sign = "<-";
  const totalPrice = () => {
    let rem = 0;
    if (cart.length === 0) return 0;
    else {
      const sum = cart.reduce(
        (prev, curr) => prev + curr.count * curr.price,
        rem
      );
      return sum.toFixed(2);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">
            E-Commerce
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
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <button
                className="d-flex btn btn-primary mt-sm-0 mt-2"
                type="button"
              >
                {sign}
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="p-3 d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <ul class="list-group mb-3" style={{ width: "600px" }}>
          {cart.map((item) => (
            <li
              class="list-group-item d-flex justify-content-between lh-sm"
              key={item._id}
            >
              <div>
                <h6 class="my-0">{item.name}</h6>
                <small class="text-muted">{item.description}</small>
              </div>
              <span class="text-muted">${item.price}</span>
            </li>
          ))}
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Delivery charges</h6>
            </div>
            <span class="text-muted">$1.99</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>
              ${(parseFloat(totalPrice()) + parseFloat(1.99)).toFixed(2)}
            </strong>
          </li>
          <li class="list-group-item d-flex flex-column align-items-center">
            <img
              src="https://cdn.dribbble.com/users/458522/screenshots/14007167/media/214f6fa81fbd40f3b65b2cb747393226.png"
              alt="success"
              height="250px"
            />
            <div className="text-center h1">Payment successful</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Checkout;
