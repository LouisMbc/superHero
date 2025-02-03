import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Loader } from './Loader';

export function HeroCard({ hero }) {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div 
      style={styles.card}
      onClick={() => navigate(`/hero/${hero.id}`)}
    >
      {imageLoading && (
        <div style={styles.loaderContainer}>
          <Loader />
        </div>
      )}
      <img 
        src={hero.image.url} 
        alt={hero.name}
        style={{
          ...styles.image,
          display: imageLoading ? 'none' : 'block'
        }}
        onLoad={() => setImageLoading(false)}
      />
      <div style={styles.content}>
        <h3 style={styles.name}>{hero.name}</h3>
        <p style={styles.publisher}>{hero.biography.publisher}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1a1c20',
    borderRadius: '15px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    minHeight: '400px'
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1a1c20 0%, #2d3436 100%)'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  content: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  name: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.2rem',
    color: '#ffd93d',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  },
  publisher: {
    margin: 0,
    color: '#fff',
    fontSize: '0.9rem',
    opacity: 0.8
  }
};