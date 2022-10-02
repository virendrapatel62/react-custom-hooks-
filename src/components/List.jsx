import { useLogger } from "../hooks";

export function List() {
  const logger = useLogger("warning", List.name);

  const listItemClickHandler = () => {
    logger.log("List Item Clicked...");
  };
  return (
    <ul>
      <li onClick={listItemClickHandler}>Item 1</li>
      <li onClick={listItemClickHandler}>Item 2</li>
      <li onClick={listItemClickHandler}>Item 3</li>
      <li onClick={listItemClickHandler}>Item 4</li>

      {logger.logs.map((log) => (
        <small>{JSON.stringify(log)}</small>
      ))}
    </ul>
  );
}
