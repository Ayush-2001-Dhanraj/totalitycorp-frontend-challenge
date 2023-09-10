import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface DataState {
  products: Product[];
  selectedProduct: Product;
  categories: string[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: DataState = {
  products: [],
  selectedProduct: {} as Product,
  categories: [],
  isLoading: false,
  isError: false,
};

// API endpoints
const BASE_URL = "https://dummyjson.com/products";

const fetchProductsByCategory = async (category?: string) => {
  const res = await fetch(
    `${BASE_URL}${category ? `/category/${category}` : ""}?limit=12`
  );
  return res?.json();
};

const fetchProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res?.json();
};

const fetchProductCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res?.json();
};

// API calling function

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (category?: string) => {
    return fetchProductsByCategory(category);
  }
);

export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (id: string) => {
    return fetchProductById(id);
  }
);

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  return fetchProductCategories();
});

// Product Slice

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.products = state.products.filter((product) => {
        const { priceRange, minRating } = action.payload;

        // Filter by price range
        const isPriceInRange =
          product.price >= priceRange.min && product.price <= priceRange.max;

        // Filter by rating
        const isRatingAboveMin = product.rating >= minRating;

        return isPriceInRange && isRatingAboveMin;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
