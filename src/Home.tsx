import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "./components/button";
import ListItem from "./components/list-item";
import { Linkedin, Github, File } from "lucide-react";
import v4Black from "./images/v4-black.jpeg";
import v4Green from "./images/v4-green.jpeg";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.15,
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

const bodyContainer: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: (isInitial) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.2,
      delayChildren: isInitial ? 0.7 : 0.25,
    },
  }),
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("introPlayed") === "1"
  );
  const [isReturning, setIsReturning] = useState(() => typeof window !== "undefined" && sessionStorage.getItem("introPlayed") === "1");

  useEffect(() => {
    if (!hasPlayedIntro) {
      sessionStorage.setItem("introPlayed", "1");
      setHasPlayedIntro(true); // optional; keeps state consistent if you need it
    }
  }, []);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-theme text-theme transition-colors duration-200">
        <motion.div
          className="flex flex-col gap-2 mx-auto pt-20 px-4 md:max-w-2xl"
          variants={container}
          initial={hasPlayedIntro ? false : "hidden"}
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
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {dark ? (
                <motion.p
                  key="dark-copy"
                  className="text-muted will-change-transform"
                  initial={{ opacity: 0, filter: "blur(5px)", y: 18 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(5px)", y: -18 }}
                  transition={{
                    type: "spring", damping: 32, stiffness: 200, mass: 0.9
                  }}
                >
                  Jack of all trades, master of none, but oftentimes better than
                  master of one. A collection of my other pastimes.
                </motion.p>
              ) : (
                <motion.p
                  key="light-copy"
                  className="text-muted will-change-transform"
                  initial={{ opacity: 0, filter: "blur(5px)", y: 18 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(5px)", y: -18 }}
                  transition={{
                    type: "spring", damping: 32, stiffness: 200, mass: 0.9
                  }}
                >
                  Currently studying CS &amp; UX Design at the UofM. Passionate
                  about building, committed to improving every day.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-row gap-1.5 mt-2 items-center"
          >
            <motion.div layout="position">
              <Button link="https://www.linkedin.com/in/vannesschia">
                <Linkedin className="icon-4" />
                LinkedIn
              </Button>
            </motion.div>
            <motion.div layout="position">
              <Button link="https://github.com/vannesschia">
                <Github className="icon-4" />
                GitHub
              </Button>
            </motion.div>
            <motion.div layout="position">
              <Button>
                <File className="icon-4" />
                CV
              </Button>
            </motion.div>

            <motion.div layout="position">
              <Button
                scheme={dark ? "light" : "dark"}
                onClick={() => {
                  setIsReturning(false);      // always clear the “returning” state
                  setDark((v) => !v);         // toggle dark mode
                  }}
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

          <motion.div
            layout
            style={{ overflow: "hidden" }}
            transition={{ layout: { duration: 0.4, ease: [0.5, 0, 0.5, 1] } }}
          >
            <AnimatePresence mode="popLayout">
              {!dark ? (
                <motion.div
                  key="body-light"
                  className={`mt-12 flex flex-col gap-20 mb-20`}
                  variants={bodyContainer}
                  initial={isReturning ? false : "hidden"}
                  animate="show"
                  custom={!hasPlayedIntro}
                >
                  <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">EXPERIENCE</p>
                    <ListItem
                      mainText="Software Engineer Intern"
                      subText="GEICO"
                      rightText="Summer 2025"
                    />
                    <ListItem
                      mainText="Software Engineer Intern"
                      subText="JoobyRumi"
                      rightText="Summer 2024"
                    />
                    <ListItem
                      mainText="Teaching Assistant"
                      subText="UofM COE (Joy of Coding)"
                      rightText="Summer 2024"
                    />
                    <ListItem
                      mainText="Section Commander"
                      subText="Singapore Armed Forces"
                      rightText="2020-2022"
                    />
                  </motion.div>

                  <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">PERSONAL PROJECTS</p>
                    <ListItem
                      mainText="ZProfile"
                      rightText="Management platform for university organization"
                    />
                    <ListItem
                      mainText="Receiptify Clone"
                      rightText="View your top Spotify tracks as a receipt"
                    />
                  </motion.div>

                  <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">ACADEMIC PROJECTS</p>
                    <ListItem
                      mainText="MapReduce"
                      rightText="A simplified MapReduce framework in Python"
                    />
                    <ListItem mainText="Pager" rightText="Virtual & physical memory mangement" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="body-dark"
                  className={`mt-12 flex flex-col gap-20 mb-20`}
                  variants={bodyContainer}
                  initial={isReturning ? false : "hidden"}
                  animate="show"
                  custom={!hasPlayedIntro}
                >
                  <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">CLIMBING</p>
                    <div className="flex flex-row items-center gap-2">
                      <div>
                        <img src={v4Black} className="w-48 h-56 object-fit rounded-md"></img>
                        <p className="text-muted text-sm mt-1 font-serif tracking-tight text-right">V4 @ Planet Rock (2025)</p>
                      </div>
                      <div>
                        <img src={v4Green} className="w-48 h-56 object-fit rounded-md"></img>
                        <p className="text-muted text-sm mt-1 font-serif tracking-tight text-right">V4 @ Planet Rock (2025)</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">COOKING</p>
                    <ListItem
                      mainText="Quick N' Easy Fried Rice"
                      rightText="10 min"
                    />
                    <ListItem
                      mainText="Kimchi Jjigae"
                      rightText="30 min"
                    />
                    <ListItem
                      mainText="Japanese Curry"
                      rightText="30 min"
                    />
                  </motion.div> */}

                  <motion.div className="flex flex-col gap-2.5" variants={item}>
                    <p className="text-muted text-xs">DANCE</p>
                    <ListItem mainText="Dancemix" rightText="2025" link="https://youtu.be/nzQIuJj32Ns?si=kZqFv_nzjNNxWHva&t=306"/>
                    <ListItem mainText="Warmup" rightText="2024" link="https://youtu.be/cZtzc8-Fohs?si=en2O7LeIJMvi0xA-&t=209"/>
                    <ListItem mainText="Sleepless in Seoul" rightText="2023" link="https://youtu.be/dH45kRTgF1U?si=P1DjSiVnYNM_sC-P&t=16"/>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
