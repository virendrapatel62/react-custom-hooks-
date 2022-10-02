export function useNothing() {}

export const useLogger = (type = "info", location = "") => {
  if (type == "info")
    return () =>
      console.log(
        `${new Date().toLocaleTimeString()} : ${message} : ${location}`
      );

  if (type == "warning")
    return () =>
      console.warn(
        `${new Date().toLocaleTimeString()} : ${message} : ${location}`
      );

  if (type == "error")
    return () =>
      console.error(
        `${new Date().toLocaleTimeString()} : ${message} : ${location}`
      );
};
