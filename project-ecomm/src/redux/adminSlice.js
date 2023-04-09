import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (e) => {
      const response = await axios.post(
        "http://localhost:5000/api/b1/addproduct",
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



export const adminSlice = createSlice({
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
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                console.log(state.data);
                state.faild = false;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.faild = true
            })

    },
});

export const { clearFaild, clearLoading } = adminSlice.actions;


export default adminSlice.reducer
