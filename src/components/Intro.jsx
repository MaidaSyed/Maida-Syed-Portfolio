import { motion } from "framer-motion";
import "./Intro.css";

const Intro = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 2,
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onComplete}
      className="intro"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        MAIDA SYED
      </motion.h1>
    </motion.div>
  );
};

export default Intro;