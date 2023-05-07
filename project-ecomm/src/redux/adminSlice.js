import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productAdd = createAsyncThunk(
  "product/productAdd",
  async (e) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/add",
      e,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {

    const config = {
      withCredentials: true,
    };

    const response = await axios.delete(
      `http://localhost:5000/api/v1/product/${id}`, config);
    return response.data;
  }
);

export const productStats = createAsyncThunk(
  "product/productStats",
  async () => {

    const response = await axios.get(
      "http://localhost:5000/api/v1/pd",
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    return response.data;
  }
);
const adminSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    error: null,
    stats: []
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAdd.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAdd.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(productAdd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(productStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(productStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(productStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default adminSlice.reducer;
