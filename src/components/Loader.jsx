import './Loader.css';

export function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="shield">
          <div className="shield-inner">
            <div className="shield-star">⚡</div>
          </div>
        </div>
        <div className="energy-rings">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
        <div className="loading-text">
          <span>C</span>
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span>G</span>
          <span>E</span>
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
        </div>
      </div>
    </div>
  );
}