import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { useLogger } from "./hooks";

function App() {
  const { log: error, logs: errorLogs } = useLogger(
    "error",
    "From App Component"
  );
  const { log: warning, logs: warningLogs } = useLogger(
    "warning",
    "From App Component"
  );
  const { log: info, logs: infoLogs } = useLogger("info", "From App Component");

  const errorHandler = () => {
    error("App Component Button Clicked...");
  };

  const warningHandler = () => {
    warning("App Component Button Clicked...");
  };

  const infoHandeler = () => {
    info("App Component Button Clicked...");
  };
  return (
    <div>
      <h1>Hooks Zero To Hero 😎</h1>

      <button onClick={infoHandeler}>App Click Info</button>
      <button onClick={warningHandler}>App Click Warning</button>
      <button onClick={errorHandler}>App Click Error</button>

      <hr />
      <Button label={"Click Here"} />
      <List />
    </div>
  );
}

export default App;
