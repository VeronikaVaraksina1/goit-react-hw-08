import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  itinialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: false,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
});
