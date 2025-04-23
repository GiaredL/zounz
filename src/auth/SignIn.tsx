import { Link, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.scss";
import { useState } from "react";
import { useAuth } from "../context/useAuth";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    console.log("Attempting to sign in user:", userName);

    try {
      await login({
        username: userName,
        password,
        streams: 0, // Adding required streams property with default value
      });
      console.log("Login successful, navigating to home");
      navigate("/");
    } catch (err: unknown) {
      console.error("Sign in error:", err);
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Failed to sign in");
    }
  };

  return (
    <div className={styles["sign-in"]}>
      <form onSubmit={handleSubmit}>
        <button className={styles["back-button"]}>
          <Link to="/">Go Back</Link>
        </button>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SignIn;
