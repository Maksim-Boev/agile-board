import { flow, types } from "mobx-state-tree";
import User from "../types/user";
import axios from "../api";

const UsersStore = types
  .model("UserStore", {
    users: types.maybe(types.array(User)),
  })
  .actions((self) => ({
    fetchUsers: flow(function* () {
      try {
        self.users = yield axios.get("./users").then((res) => res.data);
      } catch (e) {
        console.log(e);
      }
    }),
  }));

export default UsersStore;
