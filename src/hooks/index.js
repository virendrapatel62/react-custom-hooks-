export function useNothing() {}

export const useLogger = (type = "info", location = "") => {
  const actionMap = {
    info: console.log,
    error: console.error,
    warning: console.warn,
  };

  return (message) => {
    actionMap[type](
      `${new Date().toLocaleTimeString()} : ${message} : ${location}`
    );
  };
};
