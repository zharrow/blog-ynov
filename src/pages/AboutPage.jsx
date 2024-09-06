// src/pages/AboutPage.jsx
import React from 'react';
import '../styles/variable.css';
import '../styles/about.css';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const AboutPage = () => {
  return (
    
    <div className="about-page">
      <section className="intro">
        <div className="intro-image">
          <img src="./Florent_DETRES.jpg" alt="Florent DETRES" />
        </div>
        <div className="intro-text">
          <h1>Bienvenue sur mon blog</h1>
          <p>
            Je suis Florent DETRES, un passionné de développement web et de gestion de projets numériques. 
            Avec une solide expérience dans la création de sites web et la gestion de projets, 
            je suis constamment à la recherche de nouvelles opportunités pour innover et améliorer l'expérience utilisateur.
          </p>
          <section className="cv">
            <h2>Curriculum Vitae</h2>
            <p>
              Vous pouvez consulter mon CV à jour en cliquant sur le lien ci-dessous :
            </p>
            <a href="./CV_Florent_DETRES.pdf" target="_blank" className="cv-link">
              Télécharger mon CV
            </a>
          </section>
          <section className='social'>
            <h2>Suivez-moi</h2>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/thestudioflow/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/zharrow" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </section>
        </div>
      </section>

      <section className="parcours">
        <h2>Mon Parcours</h2>
        <ul className="timeline">
          <li>
            <h3>2022 - Présent : Étudiant Développeur</h3>
            <p>
              Actuellement étudiant en développement web, je me spécialise dans les technologies front-end et back-end.
              J'ai acquis des compétences en Angular, C# .NET, Python, Golang, et bien d'autres.
              Je suis également passionné par l'UX UI Design et la gestion de projets numériques.
              Je suis constamment à la recherche de nouvelles opportunités pour apprendre et me perfectionner.
            </p>
          </li>
          <li>
            <h3>2019 - 2022 : Freelance UX UI Designer</h3>
            <p>
              En tant que Freelance UX UI Designer, j'ai travaillé sur plusieurs projets de conception de sites web et d'applications mobiles.
              J'ai acquis une solide expérience en matière de conception d'interfaces utilisateur intuitives et esthétiques.
              J'ai également développé des compétences en matière de prototypage et de tests utilisateurs.
              Les logiciels que j'utilise régulièrement sont Adobe XD, Figma, et Illustrator.
            </p>
          </li>
          <li>
            <h3>2011 - 2014 : BAC PRO Système Electroniques et Numériques</h3>
            <p>
              Lors de ces études, j'ai acquis des compétences en électronique, informatique, et réseaux.
              J'ai appris à concevoir des systèmes électroniques et à les programmer.
              J'ai également appris à installer et configurer des réseaux informatiques.
              Ces compétences m'ont permis de commencer à me spécialiser dans le développement web et la gestion de projets numériques.
            </p>
          </li>
          {/* Ajoutez d'autres étapes de votre parcours ici */}
        </ul>
      </section>

      <section className="profile">
        <h2>Présentation de mon Profil</h2>
        <p>
          Avec une expertise en développement front-end et back-end, je maîtrise les dernières technologies 
          web comme React, Node.js, et bien d'autres. Ma capacité à gérer des projets complexes et à travailler 
          en équipe fait de moi un atout précieux pour toute entreprise à la recherche de solutions innovantes.
        </p>
      </section>

      <section className="link">
        <h2>En savoir plus</h2>
        <a href="/contact" className="cta-link">
          Contactez-moi
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
