import React from "react";
import "./style.css";

export const EcranFin = () => {
  return (
    <div className="ecran-fin">
      <div className="rponse-succs-wrapper">
        <div className="rponse-succs">
          <div className="frame">
            <div className="overlap">
              <div className="overlap-group">
                <p className="text-wrapper">Tu as terminé le quizz ! Tu es maintenant un vrai écolo !</p>
                <div className="div">Bien joué</div>
                <div className="success-bar">
                  <div className="rectangle" />
                </div>
              </div>
              <div className="lifes">
                <div className="overlap-group-2">
                  <div className="question" />
                  <img className="coeur" alt="Coeur" src="/img/coeur-1.png" />
                  <img className="img" alt="Coeur" src="/img/coeur-1.png" />
                  <img className="coeur-2" alt="Coeur" src="/img/coeur-1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="bouton-droite">
            <div className="overlap-2">
              <img className="fleche-droite" alt="Fleche droite" src="/img/fleche-droite.svg" />
              <div className="text-wrapper-2">Retour à l’accueil</div>
            </div>
          </div>
          <div className="quit">
            <div className="overlap-3">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
            </div>
          </div>
          <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-12.png" />
        </div>
      </div>
    </div>
  );
};
