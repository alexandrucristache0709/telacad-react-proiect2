import { FavoritesConstants } from "./favoritesConstants";

const initialState = {
  products: [],
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case FavoritesConstants.ADD_TO_FAVORITES:
      const productInFavorites = state.products.find(product => product.id === action.payload.id);
      console.log(productInFavorites);
      if (!productInFavorites) {
        return { ...state, products: [...state.products, action.payload] };
      } else {
        return state;
      }
    case FavoritesConstants.REMOVE_FROM_FAVORITES:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, products: filteredProducts };
    default:
      return state;
  }
}
