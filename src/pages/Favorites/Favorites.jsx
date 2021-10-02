import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/favoritesActions";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

function Favorites(props) {
  return (
    <Layout>
      <div
        className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
      >
        {props.products.length ? (
          <div className="w-100">
            <div className="d-flex justify-content-between text-center h4 text-bold">
              <p className="w-50">Produs</p>
              <p className="w-50">Pret</p>
            </div>
            {props.products.map((product) => {
              return (
                <div
                  className="d-flex justify-content-between align-items-center text-center"
                  key={product.id}
                >
                  <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <img src={product.image} alt="Produs" />
                    <p>{product.name}</p>
                  </div>
                  <div className="w-50 d-flex justify-content-around align-items-center">
                    {product.price} {product.currency}
                  </div>
                  <Close
                    onClick={() => props.removeProductFromFavorites(product)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <p className="h3">Nu ai produse la favorite!</p>
            <Link to="/">
              <button className="btn btn-outline-dark">Inapoi la home</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    products: state.favorites.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeProductFromFavorites: (payload) =>
      dispatch(removeFromFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
