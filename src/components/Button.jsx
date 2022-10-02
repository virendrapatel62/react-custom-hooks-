import { useNothing } from "../hooks";

export function Button({ label }) {
  const nothing = useNothing();
  console.log({ nothing });
  return <button>{label}</button>;
}
