import { Buffer } from "buffer";

export const initializeAuth = () => {
  const login = import.meta.env.VITE_AUTH_LOGIN;
  const password = import.meta.env.VITE_AUTH_PASSWORD;

  if (!login || !password) {
    console.error(
      "Authentication credentials are not properly set in environment variables"
    );
    return;
  }

  try {
    // Create base64 encoded token for Basic auth
    const token = Buffer.from(`${login}:${password}`).toString("base64");
    console.log("Valid Authorization token:", token);
    console.log(
      "403 Invalid Authorization token:",
      Buffer.from(`banneduser:${password}`).toString("base64")
    );
    console.log(
      "401 Invalid Authorization token:",
      Buffer.from(`otheruser:${password}`).toString("base64")
    );
    localStorage.setItem("authorization_token", token);
  } catch (error) {
    console.error("Failed to initialize authentication:", error);
  }
};
