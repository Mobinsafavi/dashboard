import { createSlice } from "@reduxjs/toolkit";

interface IUserSliceInitialValue {
  isAuthenticate: boolean;
  token: string;
  userId: string;
}

const initialState: IUserSliceInitialValue = {
  isAuthenticate: false,
  token: "",
  userId: "",
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isAuthenticate = true;
    },
    makingUserAuthenticate: (state) => {
      state.isAuthenticate = true;
    },
  },
});

export const { setUserInformation, makingUserAuthenticate } = UserSlice.actions;
export default UserSlice.reducer;
