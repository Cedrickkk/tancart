import { StateCreator } from "zustand";

export type UserState = {
  fullname: string;
  address: string;
};

export type UserAction = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserAction;

const initialState: UserState = {
  fullname: "",
  address: "",
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
) => ({
  ...initialState,
  setAddress: (address) => set(() => ({ address })),
});
