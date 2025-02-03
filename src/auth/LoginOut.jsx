import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import './LoginOut.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Louis" && password === "malbec") {
      login(username, password);
      navigate('/');
    } else {
      setError("Identifiants de super-héros non reconnus!");
      setTimeout(() => setError(""), 3000); // L'erreur disparaît après 3s
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Accès Superhéros</h3>
        {error && (
          <div className="error-alert">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control login-input"
              placeholder="🦸 Identité secrète"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control login-input"
              placeholder="🛡️ Code d'accès"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn login-button">
            Activer les pouvoirs
          </button>
        </form>
      </div>
    </div>
  );
}

function Logout() {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="btn nav-button home">
      Retour à la base
    </button>
  );
}

export { Login, Logout };
