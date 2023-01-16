import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../../reducers/cart";
import { checkCard } from "../../api";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useSelector(getCart);
  const navigate = useNavigate();

  const [card, setCard] = React.useState({ number: "", cvv: 0, expirey: "" });

  const handleChange = (e) => {
    setCard((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card1 = {
      ...card,
      expirey: card.expirey.split("-").reverse().join("/"),
      cvv: parseInt(card.cvv),
    };
    const ans = await checkCard(card1);
    if (ans.message === "payment successful") {
      navigate("/success");
    }
    console.log(ans);
  };

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

  const sign = "<-";
  const total = cart.length;

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
      <div>
        <div class="container my-5 pt-5">
          <main>
            <div class="row g-5">
              <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Your cart</span>
                  <span class="badge bg-primary rounded-pill">{total}</span>
                </h4>
                <ul class="list-group mb-3">
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
                  {/* <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Acer IPS Ultra-Thin</h6>
                      <small class="text-muted">28inch i7</small>
                    </div>
                    <span class="text-muted">$800</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Bluetooth Headphones</h6>
                      <small class="text-muted">
                        BT 5.6 sound cancellation
                      </small>
                    </div>
                    <span class="text-muted">$59</span>
                  </li> */}
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Delivery charges</h6>
                      {/* <small class="text-muted">Brief description</small> */}
                    </div>
                    <span class="text-muted">$1.99</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>
                      $
                      {(parseFloat(totalPrice()) + parseFloat(1.99)).toFixed(2)}
                    </strong>
                  </li>
                </ul>
              </div>
              <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Delivery address</h4>
                <form class="needs-validation" novalidate>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder=""
                      />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                      />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    {/* <div class="col-12">
                      <label for="email" class="form-label">
                        Email <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div> */}

                    <div class="col-12">
                      <label for="address" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    {/* <div class="col-12">
                      <label for="address2" class="form-label">
                        Address 2 <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div> */}

                    <div class="col-md-5">
                      <label for="country" class="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="country"
                        required
                      />
                    </div>

                    <div class="col-md-4">
                      <label for="state" class="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="state"
                        required
                      />
                    </div>

                    <div class="col-md-3">
                      <label for="zip" class="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <h4 class="mb-3">Payment</h4>

                  <div class="row gy-3">
                    <div class="col-md-6">
                      <label for="cc-name" class="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small class="text-muted">
                        Full name as displayed on card
                      </small>
                      <div class="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-number" class="form-label">
                        Credit card number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        name="number"
                        value={card.number}
                        onChange={handleChange}
                        required
                      />
                      <small class="text-muted">16 digit</small>
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-expiration" class="form-label">
                        Expiration
                      </label>
                      <input
                        type="month"
                        class="form-control"
                        id="cc-expiration"
                        min="2023-02"
                        max="2028-02"
                        placeholder=""
                        name="expirey"
                        value={card.expirey}
                        onChange={handleChange}
                        required
                      />
                      <div class="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-cvv" class="form-label">
                        CVV
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        name="cvv"
                        value={card.cvv}
                        onChange={handleChange}
                        required
                      />
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <button
                    class="w-100 btn btn-primary btn-lg"
                    onClick={handleSubmit}
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Checkout;
