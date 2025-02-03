import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { HeroCard } from '../components/HeroCard';
import { Loader } from '../components/Loader';
import './Search.css';

export function Search() {
  const [searchParams] = useSearchParams();
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`https://corsproxy.io/https://superheroapi.com/api/f3a11082b565ad71a456613e9cedc676/search/${query}`)
        .then(res => res.json())
        .then(data => {
          if (data.results) {
            setHeroes(data.results);
          }
        })
        .catch(error => console.error('Error:', error))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="search-page-container">
      <div className="power-circle circle-1"></div>
      <div className="power-circle circle-2"></div>
      
      <div className="energy-beam beam-1"></div>
      <div className="energy-beam beam-2"></div>
      <div className="energy-beam beam-3"></div>
      
      <div className="search-section">
        <h1 className="search-title">
          Recherche de Super-Héros
        </h1>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      <div className="results-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="results-grid">
            {heroes.map(hero => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}