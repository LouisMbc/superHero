import { useNavigate } from 'react-router';
import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="power-circle circle-1"></div>
      <div className="power-circle circle-2"></div>
      
      <div className="energy-beam beam-1"></div>
      <div className="energy-beam beam-2"></div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="notfound-content">
              <div className="error-code">404</div>
              <h1 className="error-title">Mission Impossible</h1>
              <p className="error-description">
                Même avec nos super-pouvoirs, nous n'avons pas pu trouver cette page.
                Elle a dû s'échapper dans une dimension parallèle !
              </p>
              <div className="hero-symbol">⚡</div>
              <button 
                className="btn return-button"
                onClick={() => navigate('/')}
              >
                Retour à la base
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}