import React from "react";
import { getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import useStore from "./hooks/useStore";

const App = () => {
  const { users } = useStore();
  users.fetchUsers();

  console.log(getSnapshot(users).users);

  return (
    <div>
      <p>Main</p>
    </div>
  );
};

export default observer(App);
