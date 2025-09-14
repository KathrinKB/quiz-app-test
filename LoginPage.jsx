import React, { useState } from "react";
import "./style.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [passwort, setPasswort] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      setMessage("Bitte gib deinen Usernamen ein.");
      return;
    }
    if (!passwort) {
      setMessage("Bitte gib dein Passwort ein.");
      return;
    }

    if (username === "test" && passwort === "1234") {
      setMessage("Login erfolgreich!");
    } else {
      setMessage("Ungültige Anmeldedaten.");
    }
  };

  return (
    <div
      className="login-card"
      style={{ width: "50%", margin: "auto", marginTop: "50px" }}
    >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="passwort">Passwort:</label>
          <input
            type="password"
            id="passwort"
            value={passwort}
            onChange={(e) => setPasswort(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
