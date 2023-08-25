import { configureStore } from '@reduxjs/toolkit';
import chatRoomsSlice from '../features/chatRoomsSlice';

export const store = configureStore({
    reducer: {
        room: chatRoomsSlice
    }
})
