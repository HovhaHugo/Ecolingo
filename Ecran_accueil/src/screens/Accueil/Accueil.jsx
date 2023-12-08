import React from "react";
import "./style.css";

export const Accueil = () => {
  return (
    <div className="accueil">
      <div className="div">
        <div className="bouton-droite">
          <div className="overlap-group">
            <img className="fleche-droite" alt="Fleche droite" src="/img/fleche-droite.svg" />
            <div className="text-wrapper">Lancer un quiz</div>
          </div>
        </div>
        <div className="logo">
          <div className="overlap">
            <p className="COL-NGO">
              <span className="span">ÉCO</span>
              <span className="text-wrapper-2">L&nbsp;&nbsp;&nbsp;&nbsp; NGO</span>
            </p>
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-11.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
