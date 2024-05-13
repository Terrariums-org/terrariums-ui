import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Theme/theme.slice";
import authSlice from "./Auth/auth.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
