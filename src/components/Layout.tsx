import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0, bacgroundColor: "black" },
//   exit: { opacity: 0, x: 0, y: -100, bacgroundColor: "white" },
// };

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <motion.main
      layout
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="absolute z-[-1] w-full"
    >
      {/* <motion.div className="h-screen w-screen bg-black" /> */}
      {children}
    </motion.main>
  </>
);

export default Layout;
