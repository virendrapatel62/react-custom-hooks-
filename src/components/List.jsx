import { useLogger } from "../hooks";

export function List() {
  const log = useLogger("info", List.name);

  const listItemClickHandler = () => {
    log("List Item Clicked...");
  };
  return (
    <ul>
      <li onClick={listItemClickHandler}>Item 1</li>
      <li onClick={listItemClickHandler}>Item 2</li>
      <li onClick={listItemClickHandler}>Item 3</li>
      <li onClick={listItemClickHandler}>Item 4</li>
    </ul>
  );
}
