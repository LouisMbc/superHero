import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './HeroDetails.css';
import { Loader } from '../components/loader/Loader';

export function HeroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      setLoading(true);
      try {
        const baseUrl = `https://corsproxy.io/https://superheroapi.com/api/f3a11082b565ad71a456613e9cedc676/${id}`;
        const [powerstats, biography, appearance, work, image] = await Promise.all([
          fetch(`${baseUrl}/powerstats`).then(res => res.json()),
          fetch(`${baseUrl}/biography`).then(res => res.json()),
          fetch(`${baseUrl}/appearance`).then(res => res.json()),
          fetch(`${baseUrl}/work`).then(res => res.json()),
          fetch(`${baseUrl}/image`).then(res => res.json())
        ]);

        setHero({ powerstats, biography, appearance, work, image });
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroDetails();
  }, [id]);

  if (loading) return <Loader />;
  
  if (!hero) return (
    <div className="hero-container">
      <div className="alert alert-danger" role="alert">
        Héros non trouvé
      </div>
    </div>
  );

  return (
    <div className="hero-container">
      <div className="container hero-card">
        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <img src={hero.image.url} alt={hero.biography['full-name']} className="img-fluid hero-image" />
          </div>
          <div className="col-md-8">
            <h1 className="display-4 mb-3">{hero.biography['full-name']}</h1>
            <p className="lead">Alias: {hero.biography.aliases.join(', ')}</p>
            
            {/* Déplacer les statistiques ici */}
            <h2 className="section-title">Statistiques</h2>
            <div className="stats-container">
              {Object.entries(hero.powerstats).map(([stat, value]) => (
                <div key={stat} className="stat-card">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{stat.charAt(0).toUpperCase() + stat.slice(1)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="section-title">Biographie</h2>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Première apparition</div>
            <div>{hero.biography['first-appearance']}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Éditeur</div>
            <div>{hero.biography.publisher}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Alignement</div>
            <div>{hero.biography.alignment}</div>
          </div>
        </div>

        <h2 className="section-title">Apparence</h2>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Genre</div>
            <div>{hero.appearance.gender}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Race</div>
            <div>{hero.appearance.race}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Taille</div>
            <div>{hero.appearance.height[1]}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Poids</div>
            <div>{hero.appearance.weight[1]}</div>
          </div>
        </div>

        <h2 className="section-title">Travail</h2>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Occupation</div>
            <div>{hero.work.occupation}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Base</div>
            <div>{hero.work.base}</div>
          </div>
        </div>
      </div>
    </div>
  );
}