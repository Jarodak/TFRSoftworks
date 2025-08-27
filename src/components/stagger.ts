export const parentStagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

export const childFadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
