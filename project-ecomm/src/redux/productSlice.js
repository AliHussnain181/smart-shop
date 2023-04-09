import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const productData = createAsyncThunk(
  'product/productData',
  async () => {
    const response = await fetch(`http://localhost:5000/api/v1/product`, {
      withCredentials: true,
    })
    const res = await response.json();
    return res;
  }
);



export const blogSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: false,
    faild: false,
  },
  reducers: {

    clearFaild: (state) => {
        state.faild = false;
    },
    clearLoading: (state) => {
        state.loading = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(productData.pending, (state) => {
        state.loading = true;
      })
      .addCase(productData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.faild = false;
      })
      .addCase(productData.rejected, (state, action) => {
        state.loading = false;
        state.faild = true
      })

  },
});

export const { clearFaild, clearLoading } = blogSlice.actions;


export default blogSlice.reducer
