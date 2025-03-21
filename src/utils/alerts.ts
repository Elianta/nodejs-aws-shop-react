export const showAlert = (
  message: string,
  severity: "error" | "warning" | "info" | "success"
) => {
  const event = new CustomEvent("show-alert", {
    detail: { message, severity },
  });
  window.dispatchEvent(event);
};
