"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

export default function Wrapper({ children, className }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      className={classNames(className, "min-h-screen pt-16 lg:px-16")}
    >
      {children}
    </motion.div>
  );
}
