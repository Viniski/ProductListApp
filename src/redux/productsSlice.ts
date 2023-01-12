import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "./store";

export const updateStore = createAsyncThunk("store/update", async () => {
  const response = await axios.get(`https://reqres.in/api/products`);
  console.log(response.data.data);
  return response.data.data;
});

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
  value: [
    {
      id: 1,
      name: "cerulean",
      year: 2000,
      color: "#98B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 2,
      name: "fuchsia rose",
      year: 2001,
      color: "#C74375",
      pantone_value: "17-2031",
    },
  ],
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<{
      id: number;
      name: string;
      year: number;
      color: string;
      pantone_value: string;
    }[]>) => {
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
        (state, action: PayloadAction<{
          id: number;
          name: string;
          year: number;
          color: string;
          pantone_value: string;
        }[]>) => {
          state.loading = false;
          state.value = action.payload;
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
