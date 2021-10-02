import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { favoritesReducer } from "./favorites/favoritesReducer";
import { userReducer } from "./user/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
