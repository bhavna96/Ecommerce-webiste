import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import listProducts from "../action/productActions";

function Home(props) {
  const productList = useSelector((state) => state.productList);
  const {products,loading,error}=productList;
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);
  return loading ? <div>Loading...</div> :
  error ? <div>{error}</div>:
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={"/products/" + product.id}>
              <img className="product-image" src={product.image} alt=""></img>
            </Link>

            <div className="product-name">
              <Link to={"/products/" + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>

}
export default Home;
