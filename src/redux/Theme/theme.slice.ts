import { createSlice } from "@reduxjs/toolkit";
import { setThemeReducer } from "./reducers/setTheme.reducer";
import { ReduxSliceName, ThemeOptions } from "../entities";

export const themeSlice = createSlice({
  name: ReduxSliceName.THEME,
  initialState: "" as ThemeOptions,
  reducers: {
    setTheme: setThemeReducer,
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
