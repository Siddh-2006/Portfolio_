import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ExperiencePage from './components/Pages/ExperiencePage';
import ProjectsPage from './components/Pages/ProjectsPage';
import SkillsPage from './components/Pages/SkillsPage';
import ContactPage from './components/Pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </Layout>
  );
}

export default App;