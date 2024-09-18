import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Email from './components/email/Email';
import { useContext } from "react";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppContext } from './components/context/AppContext';


function App() {

  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { loading } = useContext(AppContext);

  return (

    <div className="App">
      <motion.div className='progressBar' style={{ scaleX }} />

      {loading && <Spinner />}

      {!loading && (

        <motion.div className={'sections'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Topbar />
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Intro />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
          <Email />
          <Footer />

        </motion.div>
      )}
    </div>

  );
}

const Spinner = () => (
  <div className="spinner">
    <div className="spinner1"></div>
  </div>
)

export default App;
