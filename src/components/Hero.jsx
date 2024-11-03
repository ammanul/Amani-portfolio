import { HERO_CONTENT } from "../assets/constants";
import profilePic from '../assets/projects/gurdphoto.jpg';

// React
import { motion } from "framer-motion"
const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opactity: 1,
    transition: {duration: 0.3, delay: delay},
  },
});

// React Server Components
// import * as motion from "framer-motion/client"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-screen-lg mx-auto">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-0">
          <motion.h1
          variants={container(0)}
          initial={{x: -100, opacity: 0}} 
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 0.5, delay: 0.5}}
          className="pb-6 text-4xl font-thin tracking-tight lg:text-8xl"
          >
            Amanuel Bekele
          </motion.h1>
          <motion.span
          variants={container(1)}
          initial={{x: -100, opacity: 0}} 
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 0.5, delay: 1}}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left">
            Full Stack Developer
          </motion.span>
          <motion.p
          variants={container(1)}
          initial={{x: -100, opacity: 0}} 
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 0.5, delay: 1.5}}
          className="my-4 max-w-lg py-4 font-light tracking-tighter text-center lg:text-left">
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
          initial={{ x: 100, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2}}
            src={profilePic}
            alt="Amanuel Bekele"
            className="rounded-full object-cover w-48 h-48 lg:w-64 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
