import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const FavouriteJobsSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteJob: (state, { payload }) => {
        console.log(payload)
      state.data.unshift(payload);
    },
  },
});

export const { setFavoriteJob } = FavouriteJobsSlice.actions;

export default FavouriteJobsSlice.reducer;
