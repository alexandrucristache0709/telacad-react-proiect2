import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";
import { addToFavorites } from "../redux/favorites/favoritesActions";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { name, price, currency, image, id } = props;

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <img src={image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center">{price + currency}</p>
      </Link>
      <div className="d-flex flex-column justify-content-center">
        <button
          className="btn btn-outline-dark mb-1"
          onClick={() =>
            props.addProductToCart({
              product: {
                id,
                name,
                price,
                currency,
                image,
              },
            })
          }
        >
          Adaugă în coș
        </button>
        <button
          className="align-btn btn btn-outline-dark "
          onClick={() =>
            props.addProductToFavorites({ id, name, price, currency, image })
          }
        >
          Adaugă la favorite
        </button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (product) => dispatch(addToCart(product)),
    addProductToFavorites: (product) => dispatch(addToFavorites(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
