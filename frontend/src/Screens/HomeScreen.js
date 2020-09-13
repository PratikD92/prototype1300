import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { listProductsAction } from "../actions/product_actions";

function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsAction());
    return () => {

    };
  }, [])

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
      <ul className="products">
        {
          products.map(product =>
            <li key={product._id}>
              <div className="product">
                <Link to={"/product/" + product._id} >
                  <div className="image-div">
                    <img className="product-image" src={product.image} alt="product" />
                  </div>
                </Link>
                <div className="product-name">
                  <Link to={"/product/" + product._id} >
                    {product.name}
                  </Link>
                </div>
                <div className="product-locality">{product.locality}</div>
                <div className="product-price">&#x20b9; {product.price}</div>
                <div className="product-rating">
                  {product.rating} Stars ({product.numReviews} Reviews)
            </div>
              </div>
            </li>)
        }

      </ul>

}

export default HomeScreen;