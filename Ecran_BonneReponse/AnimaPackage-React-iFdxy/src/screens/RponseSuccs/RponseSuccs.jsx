import React from "react";
import "./style.css";

export const RponseSuccs = () => {
  return (
    <div className="rponse-succs">
      <div className="div">
        <div className="lifes">
          <div className="overlap-group">
            <div className="question" />
            <img className="coeur" alt="Coeur" src="/img/coeur-1.png" />
            <img className="img" alt="Coeur" src="/img/coeur-1.png" />
            <img className="coeur-2" alt="Coeur" src="/img/coeur-1.png" />
          </div>
        </div>
        <div className="frame">
          <div className="overlap">
            <p className="text-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget ipsum cursus, varius odio id, interdum
              nulla. Praesent arcu lorem, blandit eu turpis eget, mollis condimentum nulla. In non aliquam mauris.
              Curabitur semper euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              fringilla turpis eu felis
            </p>
            <div className="text-wrapper-2">Bien joué</div>
          </div>
        </div>
        <div className="success-bar">
          <div className="rectangle" />
        </div>
        <div className="bouton-droite">
          <div className="overlap-2">
            <img className="fleche-droite" alt="Fleche droite" src="/img/fleche-droite.svg" />
            <div className="text-wrapper-3">Question suivante</div>
          </div>
        </div>
        <div className="quit">
          <div className="overlap-3">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
