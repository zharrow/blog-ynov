// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import Article from './components/Article';
import BilanStage from './components/BilanStage';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/bilan/:id" element={<BilanStage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
