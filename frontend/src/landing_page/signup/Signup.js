import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/${isLogin ? "login" : "signup"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      localStorage.setItem("zerodhaUser", JSON.stringify(data));
      window.location.href = DASHBOARD_URL;
    } catch (requestError) {
      setError(
        requestError.message === "Failed to fetch"
          ? "Could not connect to the server. Please try again."
          : requestError.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-page">
      <header className="signup-heading">
        <h1>Open a free demat and trading account online</h1>
        <p>Start investing brokerage free and join a community of 1.8+ crore investors and traders</p>
      </header>

      <section className="signup-content">
        <div className="signup-visual">
          <img src="/images/signup.png" alt="Zerodha trading dashboard" />
        </div>

        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="auth-tabs" role="tablist" aria-label="Account access">
            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
          </div>
          <h2>{isLogin ? "Log in" : "Signup now"}</h2>
          <p className="auth-subtitle">
            {isLogin ? "Access your existing account" : "Or track your existing application"}
          </p>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Choose a username"
            autoComplete="username"
            required
            minLength="3"
            maxLength="30"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
            minLength="6"
          />

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Log in" : "Sign up"}
          </button>

          <p className="auth-switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Signup;
