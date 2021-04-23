import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Product(props) {
  console.log(props.match.params.id);

  const product = data.products.find((x) => x.id === props.match.params.id);
  return (
    <div>
      <div className='result'>
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h3>
                <b>{product.name}</b>
              </h3>
            </li>
            <li>
              <b>
                {product.rating} Stars ({product.numofReviews} Reviews)
              </b>
            </li>
            <li>
              <b>RS. {product.price}</b>
            </li>
            <li>
              <h4>
                <b>Description</b>
              </h4>
              <div>
                <b>{product.description}</b>
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              <b>Price : ${product.price}</b>
            </li>
            <li>
              <b>Status : {product.status}</b>
            </li>
            <li>
              <b>Qty :</b>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li >
              <button type='button' className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Product;
