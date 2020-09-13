import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../product-details.css'
import { productDetailsAction } from "../actions/product_actions";
import { useDispatch, useSelector } from "react-redux";

function ProductScreen(props) {

  const productDetail = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetailsAction(props.match.params.id));
    return () => {

    };
  }, [])

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
          <div className="details">

            {/* Image column */}
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>

            {/* Info column */}
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>{product.rating} Stars</li>
                <li>({product.numReviews}) Reviews</li>
                <li>
                  <b>Price: &#x20b9; {product.price}</b>
                </li>
                <li>{product.locality}</li>
              </ul>
            </div>

            {/* Action column */}
            <div className="details-action">
              <ul>
                <li>
                  Price: &#x20b9; {product.price}
                </li>
                <li>
                  Status: {product.status}
                </li>
                <li>
                  Meal:
              <select>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Combo</option>
                  </select>
                </li>
                <li>
                  <button className="button">
                    Add to Cart
                  </button>
                </li>

              </ul>
            </div>
          </div>

      }
    </div>
  )
}


export default ProductScreen;