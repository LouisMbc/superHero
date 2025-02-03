import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/AuthProvider';
import { Logout } from '../../auth/LoginOut';
import './Header.css';

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          SuperHero App
        </div>
        
        <nav className="nav-buttons">
          <button 
            onClick={() => navigate('/')}
            className="btn nav-button home"
          >
            Accueil
          </button>

          {user && (
            <button 
              onClick={() => navigate('/contact')}
              className="btn nav-button home"
            >
              Contact
            </button>
          )}
          
          <div>
            {user ? (
              <Logout />
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="btn nav-button home"
              >
                Se connecter
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}