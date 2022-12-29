import { Cursor, Loader, Navbar } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutPage, HomePage, WorkPage, WorkShowcase } from './pages';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        {isLoading ? (
          <Loader
            isLoading={isLoading}
            setIsLoading={(state: boolean) => setIsLoading(state)}
          />
        ) : null}
      </AnimatePresence>
      <Navbar />
      <Cursor />
      <motion.main
        animate={{
          backgroundColor: location.pathname === '/about' ? '#FFF' : '#000',
        }}
        transition={{
          delay: 0.6,
          duration: 0.3,
        }}
        id="main"
        className="overflow-y-auto overflow-x-hidden h-screen scroll-smooth"
      >
        <AnimatePresence initial={false}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:name" element={<WorkShowcase />} />
          </Routes>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

export default App;
