import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const chatRoomsSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomData: (state, { payload }) => {
      state.data = {...payload};
    },
  },
});

export const { setRoomData } = chatRoomsSlice.actions;
export default chatRoomsSlice.reducer;
