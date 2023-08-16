import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const FavouriteJobsSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteJob: (state, { payload }) => {
      state.data.unshift(payload);
    },
    setRemovingJob: (state, {payload}) => {
      state.data = state.data.filter(item => item.id !== payload)
    }
  },
});

export const { setFavoriteJob, setRemovingJob } = FavouriteJobsSlice.actions;

export default FavouriteJobsSlice.reducer;
