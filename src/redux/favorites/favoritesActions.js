import { FavoritesConstants } from "./favoritesConstants";

export function addToFavorites(payload) {
  return {
    type: FavoritesConstants.ADD_TO_FAVORITES,
    payload,
  };
}

export function removeFromFavorites(payload) {
  return {
    type: FavoritesConstants.REMOVE_FROM_FAVORITES,
    payload,
  };
}
