import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { useNothing } from "./hooks";

function App() {
  const nothing = useNothing();

  console.log({ nothing });
  return (
    <div>
      <h1>Hooks Zero To Hero 😎</h1>
      <hr />
      <Button label={"Click Here"} />
      <List />
    </div>
  );
}

export default App;
