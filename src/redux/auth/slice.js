import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      uid: null,
      name: null,
      email: null,
    },
    loading: false,
    error: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = { uid: null, name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, state => {
        state.error = false;
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = true;
      }),
});

export default authSlice.reducer;
