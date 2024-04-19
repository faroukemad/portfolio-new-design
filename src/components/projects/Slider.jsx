import React, { useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import './projects.scss'

const Slider = () => {
      
      
      const controls = useAnimation();
      const sideControls = useAnimation();

      const [ref, inView] = useInView();
      
useEffect(() => {
if (inView) {
  controls.start("visible");
  sideControls.start('animate');

}
}, [controls,sideControls, inView]);

const animation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0
      ,
    },
  };
  const sideAnimation = {
      hidden: {
          width: '100%',
      },
      animate: {
          width: 0,
         
      },
    };

    


return (
<div className="text">
    
<motion.div style={{position:"relative"}} ref={ref} 
             animate={controls} initial="hidden" variants={animation} transition= {{
              duration: 0.5,
              delay:0.25,
              ease: 'easeOut',
             }}>
            <motion.div initial="hidden" animate={sideControls} variants={sideAnimation}  transition={ {
            duration: 0.5,
            ease: 'easeIn',
          }}
                style={{ position:"absolute",left:0,top:0,bottom:0,right:0,background:"lightblue",zIndex:20}}
                 />

                <h1>Latest <span className='x'>Projects</span></h1>   
                           
                </motion.div>


           
    </div>
  )
}

export default Slider;