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
  },
});

export const { sidebarToggleHandler } = SidebarSlice.actions;
export default SidebarSlice.reducer;
