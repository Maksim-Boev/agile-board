import { types } from "mobx-state-tree";

const User = types.model("User", {
  id: types.identifier,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

export default User;
