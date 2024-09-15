import img1 from "../landing_page/img/img-info-1.jpg"
import img2 from "../landing_page/img/img-info-2.jpg"
import img3 from "../landing_page/img/img-info-3.jpg"
import img4 from "../landing_page/img/points.png"
import "./landingPage.css"
export default function LandingPage() {
    return (
      <>
        
  
        {/* Accueil */}
        <div className="accueil" id="home">
          <div className="bloc-gauche-accueil">
            <h1>GYM YONOS</h1>
            <p>Dépassez Vos Limites </p>
            <p>Entrainez Vous</p>
            <p>Progressez</p>
            <div className="ctn-btn-home">
              <a href="#" className="btn-accueil b1">Equipement</a>
              <a href="#" className="btn-accueil b2">Contact</a>
            </div>
          </div>
          <div className="bloc-droit-accueil"></div>
        </div>
  
        {/* Section 1 Infos */}
        <h2 className="titre-section-info">PRENDRE EN MAIN</h2>
        <section className="section-info" id="infos">
          <div className="carte-info">
            <div className="container-photo-info">
              <img src={img1} alt="femme faisant du sport" />
            </div>
            <h2>Faire parti dun groupe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <img src={img4} alt="decoration petits points noirs" className="deco-infos" />
          </div>
          <div className="carte-info">
            <div className="container-photo-info">
              <img src={img2} alt="homme abdominaux" />
            </div>
            <h2>Atteindre ces objectifs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="carte-info">
            <div className="container-photo-info">
              <img src={img3} alt="Une cage à Squatt" />
            </div>
            <h2>Exploser ses limites</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </section>
  
        {/* Section 2 Choix */}
        <section id="choix">
          <div className="entrainement-choix">
            <h3>Salle de sport</h3>
            <p>Lorem ipsum dolor sit...</p>
            <button className="btn-outline-choix" type="button">Voir les Prix</button>
          </div>
          <div className="entrainement-choix">
            <h3>Cross Fit</h3>
            <p>Lorem ipsum dolor sit...</p>
            <button className="btn-outline-choix" type="button">Voir les Prix</button>
          </div>
        </section>
  
        {/* Section Equipement */}
        <h2 className="titre-equipement">Les équipements</h2>
        <section id="equipement">
          <button type="button" data-index="1" className="btn-modale"></button>
          <button type="button" data-index="2" className="btn-modale"></button>
          {/* Add remaining buttons... */}
        </section>
  
        <div className="bloc-modale">
          <div className="bloc-img">
            <img src="img/img6-equip.jpg" alt="Matériel de la salle de sport" />
            <button className="fermeture-modale">X</button>
          </div>
        </div>
  
        {/* Section Parallax */}
        <section className="parallax">
          <p className="parallax-txt">COURAGE</p>
        </section>
  
        {/* Footer */}
        <footer>
          <p>Tous droits réservés©</p>
        </footer>
      </>
    );
  }
  