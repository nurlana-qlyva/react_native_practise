import { configureStore } from "@reduxjs/toolkit";
import FavouriteJobsSlice from "./slices/favourite_Jobs_slice/FavouriteJobsSlice";

export const store = configureStore({
  reducer: {
    favourites: FavouriteJobsSlice,
  },
});
