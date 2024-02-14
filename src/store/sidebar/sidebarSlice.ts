import { createSlice } from "@reduxjs/toolkit";

interface ISidebarSliceInitialValue {
  isOpen: boolean;
}

const initialState: ISidebarSliceInitialValue = {
  isOpen: true,
};
export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarToggleHandler: (state) => {
      state.isOpen = !state.isOpen;
    },
    sidebarOpenHandler: (state) => {
      state.isOpen = true;
    },
    sidebarCloseHandler: (state) => {
      state.isOpen = false;
    },
  },
});

export const { sidebarToggleHandler, sidebarOpenHandler, sidebarCloseHandler } =
  SidebarSlice.actions;
export default SidebarSlice.reducer;
