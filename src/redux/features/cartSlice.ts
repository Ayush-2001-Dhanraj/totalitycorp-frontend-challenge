import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productSlice";
import toast from "react-hot-toast";

export interface CartProductInterface extends Product {
  quantity: number;
}

interface DataState {
  cart: CartProductInterface[];
}

const initialState: DataState = {
  cart: [],
};

const TOAST_PRODUCT_ADDED = "Product added to cart successfully";
const TOAST_QUANTITY_UPDATED = "Quantity updated in cart successfully";
const TOAST_PRODUCT_REMOVED = "Product removed from cart successfully";
const TOAST_ORDER_CONFIRMED = "Order Confirmed";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { product } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += product.quantity;
        toast(TOAST_QUANTITY_UPDATED);
      } else {
        state.cart.push(product);
        toast(TOAST_PRODUCT_ADDED);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        state.cart[productIndex].quantity = newQuantity;
      }
    },
    removeProduct: (state, action) => {
      const { productId } = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
      toast(TOAST_PRODUCT_REMOVED);
    },
    reset: (state) => {
      state.cart = [];
      toast(TOAST_ORDER_CONFIRMED);
    },
  },
});

export const { addProduct, updateQuantity, removeProduct, reset } =
  cartSlice.actions;
export default cartSlice.reducer;
