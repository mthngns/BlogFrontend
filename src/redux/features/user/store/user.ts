import { User } from "@/app/lib/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, resetUserState } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;
