import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    "user/getUser",
    async (e) => {
        const response = await axios.post(
            "http://localhost:5000/api/v1/register",
            e,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }
);

export const getLogin = createAsyncThunk(
    "user/getLogin",
    async (e) => {
        const response = await axios.post(
            "http://localhost:5000/api/v1/login",
            e,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    }
);

export const getLogout = createAsyncThunk(
    "user/getLogout",
    async () => {
        const response = await axios.get(
            "http://localhost:5000/api/v1/logout",
            {
                withCredentials: true,
            }
        );
        return response.data;
    }
);

export const getMe = createAsyncThunk(
    "user/getMe",
    async () => {
        const response = await axios.get(
            "http://localhost:5000/api/v1/me",
            {
                withCredentials : true
            }
        );
        return response.data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        loading: false,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            })
            .addCase(getLogin.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(getLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(getLogin.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            })
            .addCase(getLogout.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(getLogout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(getLogout.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.error = action.error.message;
            })
            .addCase(getMe.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.error.message;
            });

    }
})


export default userSlice.reducer;
