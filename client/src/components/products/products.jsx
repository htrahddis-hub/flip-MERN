import React, { useEffect } from "react";
import Products from "./product/productCard";
import { getProduct } from "../../api";

// var products = [
//   {
//     name: "Apple pro display XDR",
//     price: 7197.0,
//     comapny: "Apple",
//     imgLink:
//       "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
//   },
//   {
//     name: "Apple pro display XDR",
//     price: 7197.0,
//     comapny: "Apple",
//     imgLink:
//       "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
//   },
//   {
//     name: "Apple pro display XDR",
//     price: 7197.0,
//     comapny: "Apple",
//     imgLink:
//       "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
//   },
// ];

const Product = (props) => {
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProduct(await getProduct());
        // console.log(product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const callBack = (id) => {
    const item = product.find((item) => item._id === id);
    if(item)
      props.addCart(item);
  };

  console.log(product);
  return (
    <div>
      {product.length > 0 ? (
        <div className="bg-light mt-4 px-0 100vh container-fluid">
          <div className="pt-5 row justify-content-center px-0 mx-md-5 mx-lg-5 ">
            {product.map((item, idx) => {
              return <Products product={item} callBack={callBack} key={idx} />;
            })}
            {/* <button onClick={handleClick}>arrow</button> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
