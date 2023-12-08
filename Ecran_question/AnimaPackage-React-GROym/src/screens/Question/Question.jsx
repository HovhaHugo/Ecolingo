import React from "react";
import "./style.css";

export const Question = () => {
  return (
    <div className="question">
      <div className="div">
        <div className="lifes">
          <div className="overlap-group">
            <div className="div-2" />
            <img className="coeur" alt="Coeur" src="/img/coeur-1.png" />
            <img className="img" alt="Coeur" src="/img/coeur-1.png" />
            <img className="coeur-2" alt="Coeur" src="/img/coeur-1.png" />
          </div>
        </div>
        <div className="frame">
          <div className="overlap">
            <p className="text-wrapper">Lorem ipsum dolor sit amet ?</p>
          </div>
        </div>
        <div className="success-bar" />
        <div className="quit">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="boutons-reponse">
          <div className="bouton-droite">
            <div className="overlap-group-2">
              <img className="fleche-droite" alt="Fleche droite" src="/img/fleche-droite.svg" />
              <div className="text-wrapper-2">dolor sit</div>
            </div>
          </div>
          <div className="bouton-bas">
            <div className="overlap-group-2">
              <img className="fleche-haut" alt="Fleche haut" src="/img/fleche-haut-1.svg" />
              <div className="text-wrapper-3">amet</div>
            </div>
          </div>
          <div className="bouton-haut">
            <div className="text-wrapper-4">lorem ipsum</div>
            <img className="fleche-haut-2" alt="Fleche haut" src="/img/fleche-haut.svg" />
          </div>
          <div className="bouton-gauche">
            <div className="overlap-group-2">
              <img className="fleche-gauche" alt="Fleche gauche" src="/img/fleche-gauche.svg" />
              <div className="text-wrapper-5">Réponse D</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
