import { PayloadAction } from "@reduxjs/toolkit";
import { ThemeOptions } from "../../entities";

export const setThemeReducer = (
  state: ThemeOptions,
  action: PayloadAction<ThemeOptions>
) => {
  const theme = action.payload;
  console.log(theme);
  return theme;
};
