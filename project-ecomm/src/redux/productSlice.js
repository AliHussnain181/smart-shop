import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const productData = createAsyncThunk(
  'product/productData',
  async ({ category , keyword }) => {
    const response = await fetch(`http://localhost:5000/api/v1/product?keyword=${keyword}&category=${category}`);
    const res = await response.json();
    return res;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productData.pending, (state) => {
        state.loading = true;
      })
      .addCase(productData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(productData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
