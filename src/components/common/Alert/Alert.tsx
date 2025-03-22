import React from "react";
import { Alert, Snackbar } from "@mui/material";

function AlertComponent() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<
    "error" | "warning" | "info" | "success"
  >("error");

  React.useEffect(() => {
    const handleAlert = (
      event: CustomEvent<{
        message: string;
        severity: "error" | "warning" | "info" | "success";
      }>
    ) => {
      setMessage(event.detail.message);
      setSeverity(event.detail.severity);
      setOpen(true);
    };

    window.addEventListener("show-alert", handleAlert as EventListener);

    return () => {
      window.removeEventListener("show-alert", handleAlert as EventListener);
    };
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertComponent;
