import { useLogger, useNothing } from "../hooks";

export function Button({ label }) {
  const logger = useLogger("info", Button.name);

  const handler = () => {
    logger("Button Component Button Clicked...");
  };
  return <button onClick={handler}>{label}</button>;
}
