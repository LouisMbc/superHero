import { SearchBar } from '../components/SearchBar';
import { Introduction } from '../components/Introduction';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <div className="power-circle circle-1"></div>
      <div className="power-circle circle-2"></div>
      
      <div className="energy-beam beam-1"></div>
      <div className="energy-beam beam-2"></div>
      <div className="energy-beam beam-3"></div>
      
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="content-wrapper">
          <h1 className="hero-title">
            Bienvenue sur SuperHero App
          </h1>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-wrapper">
        <Introduction />
      </div>
    </div>
  );
}