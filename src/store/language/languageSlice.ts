import { createSlice } from "@reduxjs/toolkit";
import English from "../../lang/en.json";

const initialState = {
  locale: "en",
  message: English,
  direction: "rtl",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguageHandler: (state, action) => {
      state.locale = action.payload.locale;
      state.message = action.payload.message;
      state.direction = action.payload.direction;
    },
  },
});

const { changeLanguageHandler } = languageSlice.actions;
export default languageSlice.reducer;
