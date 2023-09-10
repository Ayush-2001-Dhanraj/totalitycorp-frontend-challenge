import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { fetchCategories, fetchProducts } from "./features/productSlice";

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());

export default store;
