import { motion, useReducedMotion } from 'motion/react';

const defaultTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

const RevealInView = ({
  children,
  className = '',
  delay = 0,
  amount = 0.2,
  once = true,
  x = 0,
  y = 36,
  scale = 1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x, y, scale }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, y: 0, scale: 1 }
      }
      viewport={{ once, amount }}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealInView;
