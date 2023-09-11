import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import classNames from "classnames";
export function AnimationDownToUp({
  children,

  className,
}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={classNames(className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const Typed = ({ text, duration, delay, ...props }: any) => {
  const letters = Array.from(text);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: (i: any) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const item = {
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
      opacity: 1,
    },
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="typed"
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    >
      {letters.map((letter: any, index) => (
        <motion.span key={index} variants={item}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
