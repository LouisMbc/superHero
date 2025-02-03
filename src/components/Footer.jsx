import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="energy-beam beam-footer"></div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <h4 className="footer-title">SuperHero App</h4>
            <p className="footer-description">
              Explorez l'univers des super-héros et découvrez leurs histoires extraordinaires.
            </p>
          </div>
          
          <div className="col-md-4 footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/search">Recherche</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 footer-column">
            <h4 className="footer-title">Crédit</h4>
            <p className="footer-credit">
              Propulsé par <a href="https://superheroapi.com" target="_blank" rel="noopener noreferrer">SuperHero API</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} SuperHero App. Tous droits réservés. ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}