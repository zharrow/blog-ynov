// src/components/Article.jsx
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import bilanStage from '../data/bilanStage';
import '../styles/article.css';

const BilanStage = () => {
  const { id } = useParams();
  const bilan = bilanStage.find((bilan) => bilan.id === parseInt(id));
  const bilanRef = useRef();

  useEffect(() => {
    if (bilanRef.current) {
      gsap.fromTo(
        bilanRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  if (!bilan) {
    return <h2>Bilan not found</h2>;
  }

  return (
    <div ref={bilanRef} className="article-details">
      <h1>{bilan.title}</h1>
      <img src={bilan.bannerImage} alt={bilan.title} className="article-banner" />
      <div style={
        {display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}
      }>
        <p><strong>Date de publication</strong> {bilan.date}</p>
        <p><strong>Écrit par</strong> {bilan.author}</p>
      </div>

      <a className='link-to-website' href="https://www.spectacle-collectiondartistes.com/" target='_blanck'>Lien vers le site réalisé lors du stage</a>

      {bilan.contentBlocks.map((block, index) => (
        <div key={index} className="article-section">
          <p>{block.text}</p>
          {block.image && <img src={block.image} alt={`Block ${index}`} className="article-image" />}
        </div>
      ))}
    </div>
  );
};

export default BilanStage;
