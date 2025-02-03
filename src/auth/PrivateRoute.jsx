import { useAuth } from "./AuthProvider";
import { Login } from "./LoginOut";
import './LoginOut.css';

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="login-container">
        <div className="login-card" style={styles.accessDenied}>
          <div className="hero-symbol" style={styles.symbol}>⚡</div>
          <h3 className="login-title">Accès Restreint</h3>
          <p style={styles.message}>
            Cette zone est réservée aux super-héros authentifiés.
            Veuillez vous identifier pour accéder à vos super-pouvoirs.
          </p>
          <Login />
        </div>
      </div>
    );
  }

  return children;
}

const styles = {
  accessDenied: {
    textAlign: 'center',
    maxWidth: '500px'
  },
  message: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2rem',
    fontSize: '1.1rem',
    lineHeight: '1.6'
  },
  symbol: {
    fontSize: '3rem',
    color: '#ffd93d',
    marginBottom: '1rem',
    animation: 'pulse 2s infinite'
  }
};
