import { useNothing } from "../hooks";

export function List() {
  const nothing = useNothing();
  console.log({ nothing });
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
}
