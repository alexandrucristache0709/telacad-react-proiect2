import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../redux/user/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
        <Link to="/" className="my-3">
          <img src={Logo} alt="Sirluggia Shop" className="logo" />
        </Link>
        <div>
          {props.user ? <p>Salut, {props.user.displayName}!</p> : null}
          <div className="d-flex justify-content-end">
            {props.user ? (
              <p className="logout h5" onClick={() => props.signOut()}>
                Delogare
              </p>
            ) : (
              <Link to="/login" className="h5 mb-0">
                Logare
              </Link>
            )}
            <div className="d-flex align-items-center">
              <Link to="/cart" className="d-flex">
                <ShoppingCart className="ml-2" />
                <p className="ml-1 mb-0">{props.numberOfProductsInCart}</p>
              </Link>
              <Link to="/favorites" className="d-flex">
                <FontAwesomeIcon icon={faHeart} />
                <p className="ml-1 mb-0">{props.numberOfProductsInFavorites}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProductsInCart: state.cart.products.length,
    numberOfProductsInFavorites: state.favorites.products.length,
    user: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
