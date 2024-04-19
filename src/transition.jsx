import { motion } from "framer-motion";

const transition = (OgComponent) => {
    return (props) => ( // Receive props here
        <>
            <OgComponent {...props} /> {/* Pass props to the original component */}
            <motion.div className="slide-in"
                initial={{ scaleX: 0 }} animate={{ scaleX: 0 }} exit={{ scaleX: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div className="slide-out"
                initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default transition;
