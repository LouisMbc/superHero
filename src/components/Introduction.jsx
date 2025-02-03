import './Introduction.css';
import { useEffect, useState } from 'react';

// Dans src/components/Introduction.jsx
export function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`intro-container ${isVisible ? 'appear' : ''}`}>
      <div className="energy-circle circle-1"></div>
      <div className="energy-circle circle-2"></div>
      
      <div className="container intro-content">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="intro-title">
              L'Univers des Super-Héros
            </h2>
            <p className="intro-description">
              Plongez dans un monde extraordinaire où les pouvoirs surhumains 
              rencontrent le courage et la détermination. Découvrez les histoires, 
              les capacités et les secrets de vos super-héros préférés. Que vous 
              soyez fan de Marvel, ou d'autres univers de supers héros, notre 
              application vous ouvre les portes d'un monde fascinant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  intro: {
    margin: '2rem 0',
    textAlign: 'center',
  }
};