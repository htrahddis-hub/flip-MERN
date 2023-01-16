import React from "react";
import "./orders.css";
import NavBar from "./navbar";
import { useNavigate, useLocation } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const handleClickUser = () => {
    navigate("/");
  };

  const handleClickSeller = () => {
    navigate("/seller");
  };

  return (
    <div>
      <NavBar path={useLocation()} />
      <div className="mx-5" style={{ marginTop: "10%" }}>
        <form>
          <div class="row mb-3">
            <label for="name" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="name" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="brand" class="col-sm-2 col-form-label">
              Brand
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="brand" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="description" class="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="description"
                style={{ height: "80px" }}
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="brand" class="col-sm-2 col-form-label">
              Price
            </label>
            <div class="col-sm-1 d-flex align-items-center h4">
              $<input type="number" class="form-control ms-2" id="brand" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="brand" class="col-sm-2 col-form-label">
              Quantity
            </label>
            <div class="col-sm-1">
              <input type="number" class="form-control" id="brand" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="brand" class="col-sm-2 col-form-label">
              Brand
            </label>
            <div class="col-sm-10">
            <input class="form-control" type="file" id="formFile"/>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Orders;
