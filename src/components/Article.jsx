// src/components/Article.jsx
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import articles from '../data/articles';
import '../styles/article.css';
import '../styles/variable.css';

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  const articleRef = useRef();

  useEffect(() => {
    if (articleRef.current) {
      gsap.fromTo(
        articleRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div ref={articleRef} className="article-details">
      <h1>{article.title}</h1>
      <img src={article.bannerImage} alt={article.title} className="article-banner" />
      <div style={
        {display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}
      }>
        <p><strong>Date de publication</strong> {article.date}</p>
        <p><strong>Écrit par</strong> {article.author}</p>
      </div>

      <a className='link-to-website' href="https://www.spectacle-collectiondartistes.com/" target='_blanck'>Lien vers le site réalisé lors du stage</a>

      {article.contentBlocks.map((block, index) => (
        <div key={index} className="article-section">
          <h4 className='article-subtitle'>{block.subtitle}</h4>
          <p className='article-text'>{block.text}</p>
          <div className="article-section-scrollable">
            {block.image && <img src={block.image} alt={`Block ${index}`} className="article-image" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
