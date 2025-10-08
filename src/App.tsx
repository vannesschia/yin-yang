import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "./components/button";
import { Linkedin, Github, File } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 32, stiffness: 200, mass: 0.9 },
  },
};

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-theme text-theme transition-colors duration-200">
        <motion.div
          className="flex flex-col gap-2 mx-auto pt-20 px-4 md:max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-serif tracking-tight text-4xl"
            variants={item}
          >
            Hey there, I'm Vanness.
          </motion.h1>

          <motion.div
            variants={item}
            layout
            style={{ overflow: "hidden" }}
            transition={{
              layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {dark ? (
                <motion.p
                  key="dark-copy"
                  className="text-muted will-change-transform"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                    type: "tween",
                  }}
                >
                  Jack of all trades, master of none, but oftentimes better than
                  master of one.
                </motion.p>
              ) : (
                <motion.p
                  key="light-copy"
                  className="text-muted will-change-transform"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                    type: "tween",
                  }}
                >
                  Currently studying CS &amp; UX Design at the UofM. Passionate
                  about building, committed to improving every day.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            layout="position"
            transition={{
              layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className="flex flex-row gap-1.5 mt-2 items-center"
          >
            <motion.div layout="position" variants={item}>
              <Button>
                <Linkedin className="icon-4" />
                LinkedIn
              </Button>
            </motion.div>
            <motion.div layout="position" variants={item}>
              <Button>
                <Github className="icon-4" />
                GitHub
              </Button>
            </motion.div>
            <motion.div layout="position" variants={item}>
              <Button>
                <File className="icon-4" />
                CV
              </Button>
            </motion.div>

            <motion.div layout="position" variants={item}>
              <Button
                scheme={dark ? "light" : "dark"}
                onClick={() => setDark((v) => !v)}
                className="relative inline-flex items-center"
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {dark ? (
                    <motion.span
                      key="yin"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.18,
                        type: "tween",
                        ease: "easeOut",
                      }}
                      className="inline-flex items-center gap-1"
                    >
                      <span className="font-kaiti">陰</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="yang"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.18,
                        type: "tween",
                        ease: "easeOut",
                      }}
                      className="inline-flex items-center gap-1"
                    >
                      <span className="font-kaiti">陽</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
