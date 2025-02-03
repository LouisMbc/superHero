import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../auth/AuthProvider';
import './SearchBar.css';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    if (!user) {
      navigate('/login'); 
      return;
    }
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-icon">⚡</div>
        <input
          type="text"
          className="form-control search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher un super-héros..."
          required
        />
        <button type="submit" className="btn search-button">
          Rechercher
        </button>
      </form>
    </div>
  );
}