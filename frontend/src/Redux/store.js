import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import homeSlice from "./homeSlice";
import detailsSlice from "./detailsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice,
    media: detailsSlice,
  },
});
