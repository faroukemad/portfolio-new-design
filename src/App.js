import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Email from './components/email/Email';
import { useState, useEffect } from "react";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [menuOpen, setMenuOpen] = useState(false)
  const [backOpen, setBackOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)

  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  useEffect(()=>{
    setLoading(true)
    window.scrollTo(0,0);
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])




  console.log(backOpen);



  return (

    <div className="App">
      <motion.div className='progressBar' style={{ scaleX }} />
      {loading ?
        <div className="spinner">
          <div className="spinner1"></div>
        </div>
        :

        <motion.div className={'sections'}   initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
          <Topbar backOpen={backOpen} setBackOpen={setBackOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen} />} />
              <Route path="/projects" element={<Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen} />} />
              <Route path="/about" element={<About menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen} />} />
            </Routes>
          </AnimatePresence>
          <Email menuOpen={menuOpen} setMenuOpen={setMenuOpen} load={load} setLoad={setLoad} />
          <Footer />

        </motion.div>
      }
    </div>

  );
}

export default App;
