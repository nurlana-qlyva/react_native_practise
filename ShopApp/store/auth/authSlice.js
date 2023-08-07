import AsyncStorage from "@react-native-async-storage/async-storage";
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
      state.isAuthLoading = payload;
    },
    setUser: (state, { payload }) => {
      payload
        ? AsyncStorage.setItem("@User", JSON.stringify(payload))
        : AsyncStorage.removeItem("@User");
         state.user = payload;
    },
  },
});

export const { setUser, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
