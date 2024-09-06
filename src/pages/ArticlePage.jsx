// src/pages/ArticlePage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import articles from '../data/articles';
import bilanStage from '../data/bilanStage';
import '../styles/article-page.css';

const ArticlePage = ({text}) => {
  const articleCardsRef = useRef([]);
  const bilanCardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      articleCardsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
    gsap.fromTo(
      bilanCardsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="article-page-container">
      <h1>Articles</h1>
      <div className="article-grid">
        {articles.map((article, index) => (
          <div
            className="article-card"
            key={article.id}
            ref={el => (articleCardsRef.current[index] = el)}
          >
            <img 
              src={article.bannerImage} 
              alt={article.title} 
              className="article-page-banner" 
            />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <Link to={`/articles/${article.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h1>Bilan</h1>
      <div className="article-grid">
        {bilanStage.map((item, index) => (
          <div
            className="article-card"
            key={item.id}
            ref={el => (bilanCardsRef.current[index] = el)}
          >
            <img 
              src={item.bannerImage} 
              alt={item.title} 
              className="article-page-banner" 
            />
            <div className="article-content">
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <Link to={`/bilan/${item.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
