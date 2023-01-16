import React from "react";
import "./form.css";
import NavBar from "./navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const Form = () => {
  const navigate = useNavigate();

  const [image, setImage] = React.useState(null);
  const [file, setFile] = React.useState();

  const onImageChange = (event) => {
    setFile(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const upload = async () => {
    const fileRef = ref(storage, `${file.name + v4()}`);
    const next = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(next.ref);
  };

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
              <input class="form-control" type="file" id="formFile" />
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

export default Form;
