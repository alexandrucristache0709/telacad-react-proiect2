import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Product from "./pages/Product";
import "./utils/utility-classes.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/terms" component={Terms} />
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
