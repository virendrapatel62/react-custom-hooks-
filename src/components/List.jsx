import React from "react";
import { useLogger } from "../hooks";
import { data } from "./products";
const Actions = React.memo(({ log }) => {
  console.log("Re-rendering Actions");
  return (
    <div style={{ display: "inline" }}>
      <button onClick={() => log("Edit Button")}>✏️</button>
      <button onClick={() => log("Delete Button")}>🗑️</button>
    </div>
  );
});

export function List() {
  console.log("Rerending LIST ");
  const { log } = useLogger("info", List.name);
  const listItemClickHandler = () => {
    log("List Item Clicked...");
  };

  const products = data.products;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <span onClick={listItemClickHandler}>{product.title}</span>{" "}
            <Actions log={log} />
          </li>
        );
      })}
    </ul>
  );
}
