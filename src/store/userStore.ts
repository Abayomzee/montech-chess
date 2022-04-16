import create from "zustand";

const userStore = create((set: any, get: any) => ({
  user: false,
}));

export default userStore;
