import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthLoading: true,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
        state.isAuthLoading = payload
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
