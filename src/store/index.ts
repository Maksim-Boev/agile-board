import { createContext } from "react";
import { types } from "mobx-state-tree";
import UsersStore from "./users";
import BoardStore from "./board";

const RootStore = types.model("RootState", {
  users: types.optional(UsersStore, {}),
  board: types.optional(BoardStore, {}),
});

export const store = RootStore.create({});

export const StoreContext = createContext(store);
