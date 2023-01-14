import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "./store";

export const updateStore = createAsyncThunk(
  "store/update",
  async (parameters: string) => {
    const res = await axios.get(`https://reqres.in/api/products${parameters}`);
    const response = res.data.data;
    if (Array.isArray(response) === false) return Array(response);
    return response;
  }
);

interface ProductsState {
  value: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }[];
  loading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  value: [],
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (
      state,
      action: PayloadAction<
        {
          id: number;
          name: string;
          year: number;
          color: string;
          pantone_value: string;
        }[]
      >
    ) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateStore.fulfilled,
        (
          state,
          action: PayloadAction<
            {
              id: number;
              name: string;
              year: number;
              color: string;
              pantone_value: string;
            }[]
          >
        ) => {
          state.loading = false;
          state.value = action.payload;
          state.error = false;
        }
      )
      .addCase(updateStore.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { updateProducts } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
