import React from 'react'
import { motion } from "framer-motion"

export default function SitePortfolio() {
  return (
    <div class="container">
        <section>
            <div class="row mt-4">      
                <div class="col-12 col-lg-6">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/site/bigjelly.png" alt="" class="shadow"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Freelancer Website</p>
                                    <p class="lead text-center"></p>
                                </div>
                                <div class="btn-group mb-3">
                                    <a class="btn btn-outline-primary" href="https://bigbadjelly.com/" target="_blank" role="button">Launch Website</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <div class="col-12 col-lg-6">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/site/newimage.png" alt="" class="shadow"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Photography Studio</p>
                                    <p class="lead text-center"></p>
                                </div>
                                <div class="btn-group mb-3">
                                    <a class="btn btn-outline-primary" href="https://newimagephotos.com/" target="_blank">Launch Website</a>
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
