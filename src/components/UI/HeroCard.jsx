import React from "react";

const HeroCard = ({ heroImage, name, title, buttonText }) => {
  return (
    <div className="hero-card card bg-dark border-0 position-relative h-100">
      <img src={heroImage} alt={title} className="hero-image img-fluid rounded w-100" />
      <div className="hero-content position-absolute bottom-0 start-0 p-3">
        <p className="mb-1 text-light">{name}</p>
        <h5 className="fw-bold text-light">{title}</h5>
        <button className="btn btn-primary rounded-pill mt-2">{buttonText}</button>
      </div>
    </div>
  );
};

export default HeroCard;
