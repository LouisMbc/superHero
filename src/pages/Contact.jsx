import React, { useState } from 'react';
import './Contact.css';
import { useAuth } from '../auth/AuthProvider';

export const Contact = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.username || '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="contact-container d-flex align-items-center justify-content-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="success-message p-4">
                <h4 className="alert-heading mb-3">Message envoyé avec succès!</h4>
                <p>Merci {formData.name} ! Votre message a été reçu par notre équipe de super-héros.</p>
                <hr className="border-light" />
                <p className="mb-0">Nous vous répondrons avec la vitesse de Flash! ⚡</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="contact-card">
              <div className="card-body p-5">
                <h2 className="text-center contact-title">Contact</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label">Nom de super-héros</label>
                    <input
                      type="text"
                      className="form-control form-control-lg contact-input"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre identité secrète..."
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg contact-input"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votremail@justice-league.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control form-control-lg contact-input"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message pour la ligue des justiciers..."
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn contact-button">
                      Envoyer le signal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};