import React from 'react'
import { motion } from "framer-motion"

export default function ShowcaseProject() {
    return (
      <div class="container">
        <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                <p class="h2 display-3 text-center mt-3">Most Recent Project</p>
                <p class="text-center display-6 text-muted mb-5">SwiftUI • UserNotifications • CocoaPods • GoogleMobileAd • AVFoundation</p>
        </motion.div>
        <div class="mb-5">
            <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                <img src="/img/mobile/ios-dev-showcase.png" width="100%"></img>
                <a href="https://apps.apple.com/us/app/nd-filter-pro-calculator/id6450627147" target="_blank"><img src="/img/apple-badge.png" class="mt-5" width="175"></img></a>
            </motion.div>
        </div>
      </div>
    )
}
