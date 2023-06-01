import React from 'react'
import { motion } from "framer-motion"

export default function WebAppPortfolio() {
  return (
    <div class="container">
        <section id="webdev">
            <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                <p class="h2 display-3 text-center">Frontend Development</p>
                <p class="text-center display-6 text-muted mb-5">Web Apps developed using React, JavaScript, HTML, CSS</p>
            </motion.div>
            <div class="row">      
                <div class="col-12 col-lg-6 col-xxl-4">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/web/moji-match.png" alt="" class="shadow"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Moji Match</p>
                                    <p class="lead text-center"></p>
                                </div>
                                <div class="btn-group mb-3">
                                    <a class="btn btn-outline-primary" href="https://randymckown.com/portfolio/moji-match/" target="_blank" role="button">Launch App</a>
                                    <a class="btn btn-outline-dark"  href="https://github.com/codewithrandy/moji-match" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <div class="col-12 col-lg-6 col-xxl-4">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/web/tenzi.png" alt="" class="shadow"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Tenzi</p>
                                    <p class="lead text-center"></p>
                                </div>
                                <div class="btn-group mb-3">
                                    <a class="btn btn-outline-primary" href="https://randymckown.com/portfolio/tenzi/" target="_blank">Launch App</a>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/tenzi" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div class="col-12 col-lg-6 col-xxl-4">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/web/todo.png" alt="" class="shadow"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Yes, Another Todo</p>
                                    <p class="lead text-center"></p>
                                </div>
                                <div class="btn-group mb-3">
                                    <a class="btn btn-outline-primary" href="https://randymckown.com/portfolio/todo/" target="_blank">Launch App</a>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/todo" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    </div>
  )
}
