import { useState } from "react";

export function useNothing() {}

export const useLogger = (type = "info", location = "") => {
  const [logs, setLogs] = useState([]);

  const actionMap = {
    info: console.log,
    error: console.error,
    warning: console.warn,
  };

  const log = (message) => {
    const timeStamp = new Date().toLocaleTimeString();
    const finalMessage = `${timeStamp} : ${message} : ${location}`;
    const log = {
      timeStamp,
      message,
      location,
      type,
    };
    setLogs([...logs, log]);
    actionMap[type](finalMessage);
  };

  return {
    log,
    logs,
  };
};
