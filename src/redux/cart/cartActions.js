import { CartConstants } from "./cartConstants"

export function addToCart(payload) {
    return {
        type: CartConstants.ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: CartConstants.REMOVE_FROM_CART,
        payload
    }
}