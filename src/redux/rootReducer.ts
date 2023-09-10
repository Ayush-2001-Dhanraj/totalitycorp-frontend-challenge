import { combineReducers } from "redux";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
