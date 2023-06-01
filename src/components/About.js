import React from 'react'
import { motion } from "framer-motion"

export default function About() {
  return (
    <div class="container">
        <div id="about">
            <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                <p class="h2 display-3 text-center">About Me</p>
                <p class="text-center display-6 text-muted mb-5">When I'm not coding ...</p>
            </motion.div>
            <div class="row align-items-center g-5 pt-1">
                <div class="col-12 col-lg-7">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                        <img src="/img/photography.png" class="img-fluid w-100 rounded-4" alt="Bootstrap Themes" loading="lazy"></img>
                    </motion.div>
                </div>
                <div class="col-lg-5">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Photography</h1>
                        <p class="lead">I've been a photographer since I was a kid in the late 80's and worked as a pro photographer for the early part of my career.</p>
                        <p class="lead">These days I use photography purely as as a creative outlet and enjoy making images related to travel, landscape and street photography.</p>
                    </motion.div>
                </div>
            </div>
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-12 col-lg-7">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                        <img src="/img/guitar.png" class="img-fluid w-100 rounded-4" alt="Bootstrap Themes" loading="lazy"></img>
                    </motion.div>
                </div>
                <div class="col-lg-5">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Music</h1>
                        <p class="lead">I started playing guitar when I was 12 and then played local events and bars during my 20's. I'm Gen X .. so just imagine lots of flannel and punk rock.</p>
                        <p class="lead">I don't have much free time to play these days but I keep a Les Paul Goth near my desk .. just for an extra dose of creativity.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}
