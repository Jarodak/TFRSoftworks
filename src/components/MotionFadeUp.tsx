import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type Props = React.PropsWithChildren<{
  delay?: number; // seconds
  className?: string;
}>;

export default function MotionFadeUp({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 16 };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
